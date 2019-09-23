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
    <Panel header="状态提升" key="1" style={customPanelStyle}>
      <p>定义 ：通常多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
实现父子间的通信
可以实现父传子 和 子传父
</p>
    </Panel>
    <Panel header="懒加载" key="2" style={customPanelStyle}>
      <p>lazy方法里有一个回调函数，回调函数返回import引入的组件
    懒加载 --- 按需加载，当使用该组件的时候才能加载，从而节省了性能的开销 但过多使用会增多http请求</p>
      <p style={{color:'red'}}>注意：使用lazy必须配合Suspense组件.在Suspense组件上必须加fallback属性，该属性接收的值就是一个加载的动画或者提示之类的。</p>
    </Panel>
    <Panel header="组合模式" key="3" style={customPanelStyle}>
      <p>1:在react中设计模式就是组合，所以组合模式才是react的核心思想</p>
      <p>2:组合模式有三种   插槽,传参,组件内直接使用</p>
    </Panel>
    <Panel header="Ref及Ref转发" key="4" style={customPanelStyle}>
     <p>Ref定义:可以附加到任何组件上的 属性，可以直接访问 DOM 元素或组件实例</p>
     <p>ref 转发定义:就是转发父组件中的 ref 对象到子组件里，用来获取子组件中的 dom 元素
     切记一个原则:如果在自定义组件上使用 ref 属性，那么该子组件必须是由 forwardRef 生成的，否则报错</p>
     <p style={{color:'red'}}>适合使用refs的情况:①管理焦点②文本选择或媒体播放③触发强制动画④集成第三方 DOM 库</p>
    </Panel>
    <Panel header="上下文对象" key="5" style={customPanelStyle}>
     <p>使用场景：当我们 dom 层级很多时，数据是一级一级从父级向下传递 props 得到的，每个组件都要写 props</p>
     <p>使用 Context 之前的考虑：</p>
     <p>Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。</p>
     <p style={{color:'red'}}>-好处是：直观好查找</p>
      <p style={{color:'red'}}>- 缺点：耦合高，不利于维护，中间有一层忘了写 props 就会导致下面的层级丢失数据</p>  
     <h1>上下文对象API</h1>
        <p>- React.createContext:创建上下文对象</p>  
        <p>- Context.Provider:上下文数据提供者组件</p>  
        <p>- Context.Consumer: 上下文组件渲染组件</p>  
        <p> - Class.contextType:订阅者</p>     
      <p>context语法：
1.  创建上下文对象：createContext()
2.  在根容器组件引入创建后的上下文对象</p>
<p>Consumer 组件工作原理：
     一直向上找，直到找到 Provider 组件才停止(中间如果有组件不写也可以找，直到找到为止)</p>
    </Panel>
    <Panel header="Portals的使用" key="6" style={customPanelStyle}>
    <p>Portals 来自于 ReactDOM.createPortal()</p>
    <p>接收两个参数： 第一个参数是节点/组件，第二个参数是容器</p>
    <p>使用场景：
比如当前组件固定宽高并且溢出隐藏，而在当前组件中需要弹出一个宽高大于当前组件的子组件,那么就使用该方法将子组件插入到其他的容器里</p>
<p style={{color:'red'}}>注意:该方法必须只能是在 render/return 里写。</p>
<p>插入容器组件时需要注意生命周期的执行原理：
</p>
<p>   1如果是插入到html页面上已有的元素容器里,则直接获取dom元素对象</p>
    <p> 2如果是插入到react组件里需要注意生命周期,可以用state接收容器组件的dom对象,在挂载成功的函数内进行获取,保证容器组件真正的渲染到页面上
     </p>
    </Panel>
  </Collapse>
      </div>
    )
  }
}
