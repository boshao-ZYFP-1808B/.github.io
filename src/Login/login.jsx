import React, { Component } from 'react';
import './style/index.scss';
export default class Login extends Component {
  constructor() {
    super();
    let user = JSON.parse(sessionStorage.getItem('user')) || ''; //拿到缓存的值
    this.state = {
      // 设置默认值
      username: user.username, //默认拿到的user值
      password: '', //默认拿到的pwd值
      userinfo: user.username,
      pwdinfo: user.password
    };
  }
  //改变input值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  // 验证函数
  yanzheng = () => {
    const { userinfo, pwdinfo } = this.state;
    if (this.state.username !== userinfo) {
      alert('用户名错误');
      return false;
    } else if (this.state.password !== pwdinfo) {
      alert('密码错误');
      return false;
    } else {
      return true;
    }
    // 从state里拿到默认值
  };
  //提交
  onSubmit = () => {
    if (this.yanzheng()) {
      this.props.getstatus('ComponentType');
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="max-zrb-1">
        <form className="ysb-form-002">
          <h1>Login to your account</h1>
          <label>
            <input
              autoComplete="off"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="用户名"
              className="ysb-input-003"
            />
          </label>
          <label>
            <input
              autoComplete="off"
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
              placeholder="密码"
              className="ysb-input-004"
            />
          </label>
          <label>
            <button type="button" onClick={this.onSubmit} className="ysb-login">
              Login...
            </button>
          </label>
        </form>
      </div>
    );
  }
}
