import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
// 左侧一级导航的数据
const leftNav = [
  {
    iconType: 'video-camera',
    text: '受控组件和非受控组价',
    hash: 'ComponentType',
    id: '1'
  },
  { iconType: 'video-camera', text: 'form表单用法', hash: 'Install', id: '2' },
  { iconType: 'read', text: '表单的使用', hash: 'Cass', id: '3' },
  { iconType: 'save', text: '边界错误', hash: 'LifeCycle', id: '4' },
  {
    iconType: 'switcher',
    text: 'React中的列表和diff',
    hash: 'PropsContent',
    id: '5'
  },
  {
    iconType: 'video-camera',
    text: 'event事件对象',
    hash: 'Classdiff',
    id: '6'
  },
  { iconType: 'video-camera', text: '调查问卷', hash: 'Questionnaire', id: '7' }
];
export default class Mylayout extends React.Component {
  constructor() {
    super();
    this.state = {
      // 控制展开收起
      collapsed: false
    };
  }
  // 切换的方法
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render(props) {
    /*
    Layout:容器组件，包裹组件
    Sider：侧边栏，放导航的
    Header：头部组件
    Menu：做折叠导航的组件
    Content：内容展示组件【重要】
    */
    const { getstatus } = this.props;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {leftNav.map((item, index) => {
              return (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    getstatus(item.hash);
                  }}
                >
                  <Icon type={item.iconType} />
                  <span>{item.text}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 522
            }}
          >
            {/* 隐式渲染传递进来的组件 */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
