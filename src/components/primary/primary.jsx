import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import tupian from '../img/图片.jpg';
export default class Classdiff extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <h2>
          如果你是刚刚接触react不用担心，点击下面的按钮，让我们初步认识一下react吧！
        </h2>
        <div style={{ marginTop: '20px' }}>
          <Button type="primary" onClick={this.showModal}>
            react初级笔记
          </Button>
          <Modal
            title="note"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1>无状态组件</h1>
            <p>引入react依赖:import React from 'react'</p>
            <p>创建无状态组件:export default ()=>{}</p>
            <p>
              {' '}
              props:在react里面叫属性
              父组件传递给子组件上所有的属性都会在props里拿到props类型是对象
            </p>
            <hr />
            <h1>class组件</h1>
            <p>class组件:容器组件,功能组件</p>
            <p>
              详解:class关键字声明、组件名称、extends继承谁、
              React.Component基础类
            </p>
            <p> class说明:在class里的继承必须是class,只有class才能继承class</p>
            <p>
              在class组件中dom元素必须是在render方法中渲染的和无状态组件有直接的区别
            </p>
            <hr />
            <h1>jsx语法</h1>
            <p>
              jsx看上去很像html标签的语法,但他的底层还是js
              React会将jsx语法转换为React.createElement去执行,所以jsx被称作React.createElement的语法糖
            </p>
            <p>使用驼峰式命名来定义属性的名称,而不使用html属性名称的命名约定</p>
            <p>
              {' '}
              例如html中的tabindex属性变成了jsx的tabIndex而class属性则变成className这是因为class是JavaScript中的保留字,haiyoulabel的for属性用htmlFor
              自定义属性必须小写
            </p>
            <hr />
            <h1>生命周期及state</h1>
            <p>生命周期的三个阶段</p>
            <p>
              1.1:挂载阶段 constructor[初始挂载] render[渲染呈现]
              componentDidMount[挂载完成]
            </p>
            <p>1.2:更新阶段 render[渲染]/componentDidUpdate[更新完成]</p>
            <p>1.3卸载阶段 componentWillUnmount [准备卸载]</p>
            <hr />
            <p>state状态</p>
            <p> 2.1 定义:组件自由的状态 ,用来存数据的,他可以被组件自己修改</p>
            <p> 2.2修改state使用this.setState方法,该方法接受一个对象</p>
            <p> setState会在内部将新的值和state旧的值进行合并</p>
            <p> 2.3 state一旦被修改就会触发组件更新阶段</p>
            <hr />
            <h1>setState</h1>
            <p>1.setState不会立刻改变React的组件中state的值</p>
            <p>2.setState通过触发一次组件的更新来引发重绘</p>
            <p>3.多次setState函数调用产生的效果会合并</p>
            <hr />
            <h1>事件绑定</h1>
            <p>1.在dom事件里用bind绑定：this.handleForceUpdate.bind(this)</p>
            <p>缺点：每次点击的时都需要绑定，对this的开销是很浪费的。</p>
            <p>优点：直观</p>
            <p>构造函数中绑定事件</p>
            <p>缺点:代码多</p>
            <p>优点:比上一个好点</p>
            <p>
              推荐使用箭头函数
              因为箭头函数自身没有this.需要向最近的作用域去找this.基于该特性，我们省去了显示绑定this.
            </p>
          </Modal>
          <div>
            <img src={tupian} style={{ marginLeft: '190px' }} />
          </div>
        </div>
      </div>
    );
  }
}
