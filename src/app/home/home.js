import React, { useState } from 'react';
import { Row, Col, Tabs } from 'antd';
import { PropTypes } from 'prop-types'; 
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

import { LinearInterpolation } from './components/linear-interpolation/linear-interpolation';
import { BilinearInterpolation } from './components/bilinear-interpolation/bilinear-interpolation';

const AVAILABLE_INTERPOLATIONS = {
  LINEAR: '#linear',
  BILINEAR: '#bilinear'
};

const { TabPane } = Tabs;
const { LINEAR, BILINEAR } = AVAILABLE_INTERPOLATIONS;

export const Home = ({ location }) => {
  const defaultKey = location && location.hash || LINEAR;
  const [defaultActiveKey, setDefaultActiveKey] = useState(defaultKey);

  const onChange = (activeKey) => {
    setDefaultActiveKey(activeKey);
    window.location.hash = activeKey;
  } 

  return (
    <Row className="home-content" align="middle" justify="center">
      <Col xs={24} md={8}>
        <QueueAnim type="left" leaveReverse delay={100}>
          <Texty key="1" type="alpha" mode="smooth" className="title" delay={100}>
            Simple Interpolation 
          </Texty>
          <Texty key="2" type="alpha" mode="smooth" className="description" delay={100}>
            {"A simple interpolation module that construct new data points within the range of a discrete set of known data points"}
          </Texty>
        </QueueAnim>
      </Col>
      <Col xs={24} md={16}>
        <Tabs defaultActiveKey={defaultActiveKey} onChange={onChange}>
          <TabPane tab="Linear Interpolation" key={LINEAR}>
            <LinearInterpolation />
          </TabPane>
          <TabPane tab="Bilinear Interpolation" key={BILINEAR}>
            <BilinearInterpolation />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
}

Home.propTypes = {
  location: PropTypes.shape({ hash: PropTypes.string }),
};
