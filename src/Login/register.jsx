import React, { Component } from 'react';
import axios from 'axios';
import './style/index.scss';
import { Button } from 'antd';
const myState = {
  username: '',
  password: '',
  ispassword: '',
  email: ''
};
export default class Register extends Component {
  //重置表单事件
  reSetFrom = () => {
    this.setState(myState);
  };
  //改变state的值
  handChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  constructor() {
    super();
    this.state = myState;
  }
  //渲染函数
  render() {
    const { username, password, ispassword, email } = this.state;
    return (
      <div className="max-zrb ">
        <form
          onReset={this.reSetFrom}
          autoComplete="off"
          className="ysb-form-001"
        >
          <div className="titel-zrb">
            <h1>register to your account</h1>
          </div>
          <label>
            <span className="ysb-span-001"> 用户名：</span>
            <input
              className="ysb-input-001"
              type="text"
              value={username}
              onChange={this.handChange}
              name="username"
              placeholder="请输入您的用户名"
            />
          </label>
          <label>
            <span className="ysb-span-001">密码框：</span>
            <input
              className="ysb-input-002"
              type="password"
              value={password}
              onChange={this.handChange}
              name="password"
              placeholder="请输入您的密码"
            />
          </label>
          <label>
            <span className="ysb-span-001">确认框：</span>
            <input
              className="ysb-input-002"
              type="password"
              value={ispassword}
              onChange={this.handChange}
              name="ispassword"
              placeholder="请确认您的密码"
            />
          </label>
          <label>
            <span className="ysb-span-001">邮箱框：</span>
            <input
              className="ysb-input-002"
              type="text"
              value={email}
              onChange={this.handChange}
              name="email"
              placeholder="请输入您的邮箱"
            />
          </label>
          <label>
            <button type="reset" className="ysb-btn-001">
              重置
            </button>
            <Button
              type="primary"
              onClick={this.register}
              className="ysb-btn-002"
            >
              注册
            </Button>
          </label>
        </form>
      </div>
    );
  }
  register = () => {
    //1.前端验证，验证通过以后
    const { username, password, ispassword, email } = this.state;
    if (!username.trim() || username.length < 6) {
      return alert('用户名不能为空,且长度不小于6位');
    } else if (!password.trim() || !/^(\w){6,20}$/.test(password)) {
      return alert('密码不能为空,且必须是6-20个字母、数字、下划线');
    } else if (!(password === ispassword)) {
      return alert('两次密码不一致，请检查密码');
    } else if (
      !email.trim() ||
      !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)
    ) {
      return alert('邮箱格式不正确');
    }
    //2.调用接口，接口饭hi的数据村到全局里面
    //凡是实际到用户数据信息的，在接口中一定是用post请求方式
    axios
      .get('/api/register.json', { username, password, ispassword, email })
      .then(res => {
        if (res.status === 200) {
          //将账号密码存到本地一份【注意：在真是的项目里，不能这样做，仅适用于测试本地开发】
          sessionStorage.setItem(
            'userRegister',
            JSON.stringify({ username, password, ispassword, email })
          );
          // 3.控制跳转到登陆页面
          this.props.getstatus({ ...res.data, typename: 'Login' });
        } else {
          alert('网络错误，稍后重试');
        }
      });
  };
}
// getItem 是获取
//setItem 是设置
