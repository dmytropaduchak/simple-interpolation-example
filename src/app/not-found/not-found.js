import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';

export const NotFound = () => (
  <Row className="not-found-content" align="middle" justify="center">
    <Col xs={24} md={12}>
      <QueueAnim type="left" leaveReverse delay={100}>
        <Texty key="1" type="alpha" mode="smooth" className="title" delay={100}>
          404
        </Texty>
      </QueueAnim>
    </Col>
    <Col xs={24} md={12}>
    <QueueAnim type="right" leaveReverse delay={100}>
        <Texty key="2" type="alpha" mode="smooth" className="description" delay={100}>
          {"Sorry, the page could not be found"}
        </Texty>
        <Button type="primary" shape="round" ghost><Link key="3" to="/">Go Home</Link></Button>
      </QueueAnim>
    </Col>
  </Row>
);
