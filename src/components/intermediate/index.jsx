import React, { Component } from 'react'
import { Collapse, Icon } from 'antd';
const { Panel } = Collapse;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
export default class index extends Component {
  render() {
    return (
    <div>
    <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
  >
    <Panel header="表单的使用" key="1" style={customPanelStyle}>
    <p>1:表单里的元素 
      <span style={{color:'red'}}>1:input</span>
      <span style={{color:'red'}}>2:textarea</span>
      <span style={{color:'red'}}>3:select&&option</span>
      <span style={{color:'red'}}>4:button</span>
      <span style={{color:'red'}}>5:label</span>
      </p>
      <p>2.合理地使用表单元素：使用label去包裹input及其它表单的元素</p>
      <p>3.在from表单里button按钮类型必须指定，否则会触发表单的默认事件</p>
      <p>4:具体使用:</p>
      <p> ④.①：使用input的时候需要添加name属性，该属性是react内置的，添加其它自定义属性无效：name的值一定是和该input绑定的value变量名一致</p>
      <p>  ④.②：修改值的时候，使用元素的name属性去做键名</p>
    </Panel>
    <Panel header="事件对象" key="2" style={customPanelStyle}>
      <p> event：事件对象--- react中叫做合成的事件对象【react封装的事件对象】</p>
      <p>event事件对象包含的通用属性:</p>
      <p> 1、event.target:被触发的具体的元素.这个是不确定的,</p>
      <p> 2、event.currentTarget:事件被绑定到的具体元素,</p>
      <p> 3、event.nativeEvent:原生事件对象,</p>
      <p> 4、event.preventDefault() 清除默认事件,</p>
      <p> 5、event.stopPropagation() 清除冒泡    清除冒泡写在要清除的子级上,因为冒泡是从内向外的(从子向父) </p>
      <p>event.persist()将event对象的属性值强制保留</p>
      <p>解决的问题:event对象在异步方法里丢失属性值的问题</p>
    </Panel>
    <Panel header="受控组件和非受控组件" key="3" style={customPanelStyle}>
      <p>受控组件: 如果一个 input 表单元素的值是有 React 控制，就会成为受控组件。</p>
      <p>非受控组件:非受控意味着我可以不需要设置它的state属性，而通过ref来操作真实的DOM。</p>
    </Panel>
    <Panel header="条件渲染的几种方式" key="4" style={customPanelStyle}>
   <p>  1、if 
   2、switch
   3、||
   4、&&
   5、！
   6、 三目运算符</p>
   <p>三目写法和&&的对比</p>
   <p>1.三目还是if的执行逻辑.及只要有一个条件成立，则后面的不再判断</p>
   <p>缺点:三目的语法不利于阅读，代码过长，还必须有一个没用的else</p>
   <p>2.&&. 在代码阅读起来直观，但是，每一行都会进行比较，造成了不必要的浪费</p>
    </Panel>
    <Panel header="边界错误" key="5" style={customPanelStyle}>
    <p>定义:使用私有钩子函数，捕获子组件的错误，并且优雅的使用备用ui来替代错误提示。
   凡是导致页面无法渲染的错误</p>
   <p style={{color:'red'}}>错误边界无法捕获以下场景中产生的错误：</p>
   <p style={{color:'red'}}>1.接口错误 </p>
   <p style={{color:'red'}}>2.事件里的错误</p>
   <p style={{color:'red'}}>3.服务端错误</p>
   <p style={{color:'red'}}>4.非子组件的错误</p>
   <p style={{fontWeight:'blod'}}>使用:在本地开发环境中,还是会有错误提示的，但是打包代码上线后，给用户展示的就不会再有错误提示了。</p>
    </Panel>
    <Panel header="列表和diff" key="6" style={customPanelStyle}>
 <p>1、key 概念利用 diff 算法</p>
 <p>2、元素的 key 只有在它和它的兄弟节点对比时才有意义。</p>
 <p>  3、 上下文对象是 this(一个空间的作用域)</p>
 <p> key:为的是给diff算法进行优化，降低js执行次数，优化渲染。
 key必须在数组上下文环境的兄弟元素之间添加，并且每一个key都是唯一的【不能重复】
 key:在循环体或数组环境中.万不得已时使用index【下标】.一般在项目开发中，我们使用id</p>
 <p>diff算法：计算虚拟dom的算法:</p>
 <p>  其执行原理是: 同级对比,层层匹配，发现不一致时直接用新的替换旧的</p>
 <p style={{color:'red'}}>注意:</p>
 <p style={{color:'red'}}> 1、最好不用index下标 因为index是可变的不确定的当数据增加或删除时 一旦发生改变 索引会重新排列 重新渲染 没有起到diff算法优化性能的作用</p>
 <p style={{color:'red'}}>2、key不要用时间戳 和 随机数 因为它在每次都在改变每次都要重新排列</p> 

    </Panel>
  </Collapse>
      </div>
    )
  }
}
