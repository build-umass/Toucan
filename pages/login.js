import { Form, Icon, Input, Checkbox, Button, Layout, Menu, } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
import "antd/dist/antd.css";



  export  default function Login() {
      /*TODO:
        Create login page. Use ant design components as much as possible.
        Don't worry about routing or setting up actual working login, just make it look good.
        I might work on your branch too, to add functionality to the login, so make sure you push to github whenever you add anything,
        and pull from 'origin enoch' before starting again. That way we will both have the same copy. Let me know if you have any questions.
        Your page will be hosted at localhost:3000/login
    */

    return (
      <Layout style={{ minHeight: '100vh' }}>
            <Form
              name="normal_login"
              style={{ margin: 'auto', marginTop: '20px' }}
            >

              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                <Input 
                  placeholder="Username" 
                  prefix={<Icon type="user" style={{ fontSize: 15 }} />}
                  style={{ width: '300px' }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                <Input 
                  type="password"
                  placeholder="Password" 
                  prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
                  style={{ width: '300px' }}
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox style = {{float: 'left'}}>Remember me</Checkbox>
                  <a className="login-form-forgot" style = {{float: 'right'}}href="">
                    Forgot password
                  </a>
                </Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  style={{ width: '100px', marginLeft: "100px", background: "blue" }}>
                  Log in
                </Button>
              </Form.Item>

          </Form>
      </Layout>

    );
  }

