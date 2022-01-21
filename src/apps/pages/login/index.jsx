import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Affix,message } from "antd";
import "./index.less";
import pic_login_side from '../../../assets/image/login-side.png';
import pic_feedBack from '../../../assets/image/feedBack.png';

import { useNavigate} from 'react-router-dom';
import {_post} from '../../server/http';

function Login() {
let navigate = useNavigate()

  const onFinish = (values) => {

    _post('api/login',values).then(res=>{
      localStorage.setItem('token', res.data.token)
        navigate('/home')
    }).catch(error=>{
      message.error(error.message)
    })
    return 

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login_outer">
      <div className="login_warp">
        <div>
          <img src={pic_login_side} alt="登录" />
        </div>
        <div className="form_warp">
          <h2>欢迎登录</h2>
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
             label="账号"
              name="account"
              rules={[
                {
                  required: true,
                  message: "请输入!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
            label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 4,
                span:20,
              }}
            >
              <Button type="primary" htmlType="submit"  style={{width: '100%',borderRadius: '20px'}}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <footer className="footer">杭州绿洁环境科技股份有限公司</footer>

      <Affix offsetBottom={20} className="affix">
        <a
          target="_blank"
          href="https://support.qq.com/product/185218"
          rel="noreferrer"
        >
          <img
            style={{ width: "40px" }}
            src={pic_feedBack}
            alt="反馈"
          ></img>
        </a>
      </Affix>
    </div>
  );
}

export default Login;
