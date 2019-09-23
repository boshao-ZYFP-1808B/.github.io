import React, { Component } from 'react';
import Register from './register';
import Login from './login';
import Mylayout from '../components/Layout';

//受控组件和非受控组价
import ComponentType from '../components/componentType';
//条件渲染
import Install from '../components/Install';
//表单的使用
import Cass from '../components/Cass-Z';
//边界错误
import LifeCycle from '../components/LifeCycle-Z';
//React中的列表和diff
import PropsContent from '../components/PropsContent-Z';
//event事件对象
import Classdiff from '../components/Classdiff/Classdiff';
//调查问卷
import Questionnaire from '../components/Questionnaire/';
class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || 'Register'
    };
    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  //获取返回组件的状态
  getstatus = data => {
    window.location.hash = data;
  };
  render() {
    let Dom = '';
    switch (this.state.isCom) {
      case 'Register':
        Dom = <Register getstatus={this.getstatus} />;
        break;
      case 'Login':
        Dom = <Login getstatus={this.getstatus} />;
        break;
      case 'ComponentType':
        Dom = <ComponentType />;
        break;
      case 'Install':
        Dom = <Install />;
        break;
      case 'Cass':
        Dom = <Cass />;
        break;
      case 'LifeCycle':
        Dom = <LifeCycle />;
        break;
      case 'Classdiff':
        Dom = <Classdiff />;
        break;
      case 'PropsContent':
        Dom = <PropsContent />;
        break;
      case 'Questionnaire':
        Dom = <Questionnaire />;
        break;
    }
    return (
      <React.Fragment>
        {this.state.isCom == 'Register' ? (
          <Register getstatus={this.getstatus} />
        ) : this.state.isCom == 'Login' ? (
          <Login getstatus={this.getstatus} />
        ) : (
          <Mylayout getstatus={this.getstatus}>{Dom}</Mylayout>
        )}
      </React.Fragment>
    );
  }
}
export default Index;
