import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import { GithubOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Button, notification } from 'antd';
import { Home } from './home/home';
import { Forbidden } from './forbidden/forbidden';
import { NotFound } from './not-found/not-found';
import { NotMatch } from './not-match/not-match';

import 'antd/dist/antd.css';
import 'react-github-button/assets/style.css';


const { Header, Content, Footer } = Layout;
const { PUBLIC_URL } = process.env;

export const App = () => {
  notification.open({
    duration: 0,
    placement: 'bottomLeft',
    message: 'Github Help',
    description: (
      <Fragment>
        I need your support, please click the button to HELP
        <Button style={{ marginTop: '12px' }} type="default" shape="round" target="_blank" href="https://github.com/dmytropaduchak/simple-interpolation">Github</Button>
      </Fragment>
    )
  });

  notification.open({
    duration: 0,
    placement: 'bottomLeft',
    message: 'Find out how you can help.',
    description: (
      <Fragment>
        Simple Interpolation stands in solidarity with the Ukrainian people against the Russian invasion.
        <Button style={{ marginTop: '12px' }} type="default" shape="round" target="_blank" href="https://war.ukraine.ua/support-ukraine/">HELP UKRAINE</Button>
      </Fragment>
    )
  });
  return (
    <Layout>
      <Header>
        <Row>
          <Col span={24}>
            <Button type="default" shape="round" target="_blank" ghost href="https://github.com/dmytropaduchak/simple-interpolation">Github</Button>
          </Col>
        </Row>
      </Header>
      <Content>
        <BrowserRouter basename={PUBLIC_URL}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/403" component={Forbidden} />
            <Route path="/404" component={NotFound} />
            <Route component={NotMatch} />
          </Switch>
        </BrowserRouter>
      </Content>
      <Footer>
        <Row>
          <Col xs={24} md={12}>
            <QueueAnim type="left" leaveReverse delay={100}>
              <Button href="https://dmytropaduchak.github.io/simple-interpolation-example/" type="link">{`Copyright © ${(new Date()).getFullYear()} Simple Interpolation`}</Button>
            </QueueAnim>
          </Col>
          <Col xs={24} md={12}>
            <QueueAnim type="right" leaveReverse delay={100}>
              <Button href="https://github.com/dmytropaduchak" type="link" target="_blank" icon={<GithubOutlined />}>Dmytro Paduchak</Button>
            </QueueAnim>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
