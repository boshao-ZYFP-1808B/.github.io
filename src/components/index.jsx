import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const data = [
  {
    id: 1,
    label: ' subnav 1',
    children: [
      { id: 10, title: '123' },
      { id: 20, title: '123' },
      { id: 30, title: '123' },
      { id: 40, title: '123' }
    ]
  },
  {
    id: 2,
    label: ' subnav 1',
    children: [
      { id: 10, title: '123' },
      { id: 20, title: '123' },
      { id: 30, title: '123' },
      { id: 40, title: '123' }
    ]
  },
  {
    id: 3,
    label: ' subnav 1',
    children: [
      { id: 10, title: '123' },
      { id: 20, title: '123' },
      { id: 30, title: '123' },
      { id: 40, title: '123' }
    ]
  }
];
export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            {data}
          </Sider>
        </Layout>
      </Layout>
    );
  }
}
