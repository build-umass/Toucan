import {  Form, Icon, Menu, Input, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import './signup.css'
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
import cookie from 'js-cookie';

  export  default function Login() {

    /*https://codesandbox.io/s/7vlew
      Source code for sign-up page from antd website, 
      should help in setting up login authentication
      API: https://ant.design/components/form/   
    */

    const formItemLayout = {
        labelCol: {
          sm: { span: 8 },
        },
        wrapperCol: {
          sm: { span: 16 },
        },
      };

      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 23,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
            
          },
        },
      };

    return (

      <Layout style={{ minHeight: '100vh' }}>

        <img src="buildIcon.jpg" title="Build Logo" style={{ margin: '15px auto 15px auto', width: '200px', height: '200px', padding: "0px" }}/>
  
        <h1 style={{ 
          fontSize: "40px",   
          color: "#fff",
          fontFamily: "Arvo",
          fontWeight: "bold",
          color: "#222",
          textShadow: 
          "4px 4px 0px #f5f5f5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
          letterSpacing: "0.1em",
          textAlign: "center"}}>
          Build UMass
        </h1>

        <Form
          {...formItemLayout}
          layout= "horizontal"
          className="boxes"
          style={{position: "relative", margin: "auto"}}
        >

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
            ]}
          >
            <Input 
              placeholder="E-mail" 
              style = {{width: '250px' }}
            />
          </Form.Item>

          <Form.Item
              name="password"
              label="Password"
              rules={[
              {
                  required: true,
                  message: 'Please input your password!',
              },
              ]}
              hasFeedback
          >
              <Input.Password 
                placeholder="Password" 
                style={{ width: '250px' }} 
              />
          </Form.Item>

          <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
              {
                  required: true,
                  message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                  validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                  },
              }),
              ]}
          >
              <Input.Password 
                placeholder="Confirm Password" 
                style={{ width: '250px' }} 
              />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
              <Input 
                placeholder="Phone Number" 
                style={{ width: '250px' }} 
              />
          </Form.Item>

          <Form.Item 
            name="agreement" 
            {...tailFormItemLayout}
            className="checkbox"
            >
            <Checkbox> 
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button 
              type="primary" 
              htmlType="submit"
              className="button"
              onClick={()=>cookie.set("session","user",{ expires: 3 })}
              style={{ width: '100px', background: "blue" }}>                     
              Register
            </Button>
          </Form.Item>

        </Form>

      </Layout>

    );
  }
