import React from 'react';
import { sample, random, range, sortBy, values, isEqual, flatten } from 'lodash'
import { isZero } from 'lodash-contrib';
import { Form, Row, Col, InputNumber, Button, message } from 'antd';
import { linearInterpolation } from '@dmytropaduchak/simple-linear-interpolation';

const { Item, useForm } = Form;
const LINEAR_INTERPOLATION_GROUPS = [['x1', 'y1'], ['x2','y2'], ['x3', 'y3']];
const LINEAR_INTERPOLATION_FIELDS = sortBy(flatten(LINEAR_INTERPOLATION_GROUPS));

const calculate = (form) => {
  const fields = form.getFieldsValue(LINEAR_INTERPOLATION_FIELDS);
  const groups = LINEAR_INTERPOLATION_GROUPS.map((i) => (
    {
      x: { name: i[0], value: fields[i[0]] },
      y: { name: i[1], value: fields[i[1]] }
    }
  ))

  const points = groups.filter(({ x, y }) => (x.value || isZero(x.value)) && (y.value || isZero(y.value))).map(({ x, y }) => (
    {
      x: x.value,
      y: y.value
    }
  ));
  const point = groups.find(({ x, y }) => (!x.value && !isZero(x.value)) || (!y.value && !isZero(y.value)));

  if (!point) {
    throw new Error('Please provide correct search params');
  }

  let name, value;

  if (!point.x.value && !isZero(point.x.value)) {
    name = point.x.name;
    value = linearInterpolation(points)({ y: point.y.value });
  }

  if (!point.y.value && !isZero(point.y.value)) {
    name = point.y.name;
    value = linearInterpolation(points)({ x: point.x.value });
  }
  return [name, value];
}

export const LinearInterpolation = () => {
  const [form] = useForm();

  const onFinish = () => {
    try {
      const [name, value] = calculate(form);

      if (name && (value || isZero(value))) {
        form.getFieldInstance(name).focus();
        form.setFieldsValue({ [name]: Math.round(value) });
      } else {
        throw new Error('Please provide correct search params');
      }
    } catch (err) {
      message.error(err.message);
    }
  }

  const onRandomClick = () => {
    const fields = form.getFieldsValue(LINEAR_INTERPOLATION_FIELDS)
    const field = sample(LINEAR_INTERPOLATION_FIELDS);

    sortBy(range(6).map(() => random(0, 1000))).forEach((value, i) => {
      if (isEqual(LINEAR_INTERPOLATION_FIELDS[i], field)) {
        delete fields[LINEAR_INTERPOLATION_FIELDS[i]];
      } else {
        fields[LINEAR_INTERPOLATION_FIELDS[i]] = value;
      }
    });

    form.resetFields();
    form.setFieldsValue(fields);
  }

  const onClearClick = () => {
    form.resetFields();
  }

  const rules = [{
    validator: async (_, value) => {
      const fields = form.getFieldsValue(LINEAR_INTERPOLATION_FIELDS);
      const isFields = values(fields).map((i) => i || isZero(i)).length < LINEAR_INTERPOLATION_FIELDS.length - 1;
      return (!value && !isZero(value)) && isFields ? Promise.reject() : Promise.resolve();
    }
  }];

  return (
    <Form name="linear-interpolation-form" form={form} onFinish={onFinish}>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          Linear Interpolation Calculator Example
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="x1" hasFeedback rules={rules}>
            <InputNumber placeholder="X1" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="y1" hasFeedback rules={rules}>
            <InputNumber placeholder="Y1" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="x2" hasFeedback rules={rules}>
            <InputNumber placeholder="X2" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="y2" hasFeedback rules={rules}>
            <InputNumber placeholder="Y2" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="x3" hasFeedback rules={rules}>
            <InputNumber placeholder="X3" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="y3" hasFeedback rules={rules}>
            <InputNumber placeholder="Y3" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <Button block shape="round" type="primary" htmlType="submit">
            Calculate
          </Button>
        </Col>
        <Col span={6}>
          <Button block shape="round" type="default" onClick={onClearClick}>
            Clear
          </Button>
        </Col>
        <Col span={6}>
          <Button block shape="round" type="default" onClick={onRandomClick}>
            Random
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
