import React, { Component } from 'react'

import { Menu, Icon, Switch } from 'antd';
//引入样式
import './index.css'

const { SubMenu } = Menu;
export default class Index extends Component {
    constructor(){
        super();
        this.state ={
            mode: 'inline',
            theme: 'light',
            color:[
                {c:'#FF6A6A',id:1},
                {c:'#FAFAD2',id:2},
                {c:'#FF7F00',id:3},
                {c:'#00E5EE',id:4},
                {c:'#66CDAA',id:5},
                {c:'#FFD700',id:6},
                {c:'#A020F0',id:6},
                {c:'#32CD32',id:6},
                {c:'#00008B',id:6},
                {c:'#CDC1C5',id:6},
                {c:'#FFD700',id:6}
            ]
        }
    }
    //更换模式
    changeMode = value => {
        this.setState({
          mode: value ? 'vertical' : 'inline',
        });
      };
    //更换主体
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
     //改变头部字体颜色
      changeColor=()=>{
       this.forceUpdate()
       setTimeout(() => {
         this.changeColor()
      }, 500);
      }
      //提示信息
      joinOur=()=>{
        alert('优秀的程序员啊，欢迎加入我们的超级小分队，')
      }
      // 切换的方法
      toggle =()=>{

      }
      //子传父
      togglele=()=>{

      }
     
    
      colorss=()=> Math.round(Math.random()*10)
     
      render() {
const {onchangeconsts}=this.props

        return (
          <div>
            <ul className='name'>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>欢</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>迎</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>来</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>到</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>我</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>们</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>小</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>分</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>队</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>之</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>家</li>
            </ul>
            <span className='span' onClick={(event=>{this.changeColor();this.joinOur()})}>点击有惊喜哦</span>
            <br/>
            <br/>
            <div>
            <Switch onChange={this.changeMode} /> 更换模式
            <span className="ant-divider" style={{ margin: '0 1em' }} />
            <Switch onChange={this.changeTheme} /> 更换主体
            </div>
            <br />

            {/* 导航部分 */}
            <Menu 
              style={{ width: 256 , height : 1500}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode={this.state.mode}
              theme={this.state.theme}
            >
           
              <SubMenu 
                key="sub1"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>react</span>
                  </span>
                }
              >
                <Menu.Item key="3" onClick={()=>onchangeconsts('Class')}>react初级</Menu.Item>
                <Menu.Item key="4" onClick={()=>onchangeconsts('type')}><div >react中级</div></Menu.Item>
                <Menu.Item key="5" onClick={()=>onchangeconsts('senior')}>react高级</Menu.Item>
              </SubMenu>
              <Menu.Item key="1" onClick={()=>onchangeconsts('question')}>
                <Icon type="mail" />
                 问卷调查
              </Menu.Item>
            </Menu>

            <div>
                {/* 内容部分 */}
                {this.props.children}
            </div>
          
          </div>
        );
      }
    }