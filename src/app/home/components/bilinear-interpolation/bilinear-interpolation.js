import React from 'react';
import { random, range, sortBy, values, isEqual, flatten, uniq, sample } from 'lodash'
import { isZero } from 'lodash-contrib';
import { Form, Row, Col, InputNumber, Button, message } from 'antd';
import { bilinearInterpolation } from '@dmytropaduchak/simple-bilinear-interpolation';

const { Item, useForm } = Form;
const BILINEAR_INTERPOLATION_GROUPS = [['x1', 'y1', 'z11'], ['x1', 'y3', 'z13'], ['x2', 'y2', 'z22'], ['x3', 'y1', 'z31'], ['x3', 'y3', 'z33']];
const BILINEAR_INTERPOLATION_FIELDS = sortBy(uniq(flatten(BILINEAR_INTERPOLATION_GROUPS)));

const calculate = (form) => {
  const fields = form.getFieldsValue(BILINEAR_INTERPOLATION_FIELDS);
  const groups = BILINEAR_INTERPOLATION_GROUPS.map((i) => (
    {
      x: { name: i[0], value: fields[i[0]] },
      y: { name: i[1], value: fields[i[1]] },
      z: { name: i[2], value: fields[i[2]] }
    }
  ));

  const points = groups.filter(({ x, y, z }) => (x.value || isZero(x.value)) && (y.value || isZero(y.value)) && (z.value || isZero(z.value))).map(({ x, y, z }) => (
    { 
      x: x.value,
      y: y.value,
      z: z.value
    }
  ));
  const point = groups.find(({ x, y, z }) => (!x.value && !isZero(x.value)) || (!y.value && !isZero(y.value)) || (!z.value && !isZero(z.value)));

  if (!point) {
    throw new Error('Please provide correct search params');
  }

  let name, value;

  if (!point.x.value && !isZero(point.x.value)) {
    name = point.x.name;
    value = bilinearInterpolation(points)({ y: point.y.value, z: point.z.value });
  }

  if (!point.y.value && !isZero(point.y.value)) {
    name = point.y.name;
    value = bilinearInterpolation(points)({ x: point.x.value, z: point.z.value });
  }

  if (!point.z.value && !isZero(point.z.value)) {
    name = point.z.name;
    value = bilinearInterpolation(points)({ x: point.x.value, y: point.y.value });
  }
  return [name, value];
}

export const BilinearInterpolation = () => {
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
      console.log(err)
      message.error(err.message);
    }
  }
  const onRandomClick = () => {
    const fields = form.getFieldsValue(BILINEAR_INTERPOLATION_FIELDS);
    const field = sample(['x2', 'y2', 'z22']);

    sortBy(range(11).map(() => random(0, 1000))).forEach((value, i) => {
      if (isEqual(BILINEAR_INTERPOLATION_FIELDS[i], field)) {
        delete fields[BILINEAR_INTERPOLATION_FIELDS[i]];
      } else {
        fields[BILINEAR_INTERPOLATION_FIELDS[i]] = value;
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
      const fields = form.getFieldsValue(BILINEAR_INTERPOLATION_FIELDS);
      const isFields = values(fields).map((i) => i || isZero(i)).length < BILINEAR_INTERPOLATION_FIELDS.length - 1;
      return (!value && !isZero(value)) && isFields ? Promise.reject() : Promise.resolve();
    }
  }];

  return (
    <Form name="linear-interpolation-form" form={form} onFinish={onFinish}>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          Bilinear Interpolation Calculator Example
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6} offset={6}>
          <Item name="x1" hasFeedback rules={rules}>
            <InputNumber placeholder="X1" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="x2" hasFeedback rules={rules}>
            <InputNumber placeholder="X" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="x3" hasFeedback rules={rules}>
            <InputNumber placeholder="X2" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="y1" hasFeedback rules={rules}>
            <InputNumber placeholder="Y1" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="z11" hasFeedback rules={rules}>
            <InputNumber placeholder="Z11" type="number" />
          </Item>
        </Col>
        <Col span={6} offset={6}>
          <Item name="z13" hasFeedback rules={rules}>
            <InputNumber placeholder="Z12" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="y2" hasFeedback rules={rules}>
            <InputNumber placeholder="Y" type="number" />
          </Item>
        </Col>
        <Col span={6} offset={6}>
          <Item name="z22" hasFeedback rules={rules}>
            <InputNumber placeholder="Z" type="number" />
          </Item>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Item name="y3" hasFeedback rules={rules}>
            <InputNumber placeholder="Y2" type="number" />
          </Item>
        </Col>
        <Col span={6}>
          <Item name="z31" hasFeedback rules={rules}>
            <InputNumber placeholder="Z21" type="number" />
          </Item>
        </Col>
        <Col span={6} offset={6}>
          <Item name="z33" hasFeedback rules={rules}>
            <InputNumber placeholder="Z22" type="number" />
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
