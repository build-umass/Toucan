import { Form, Menu, Input, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './css/signup.css';
import cookie from 'js-cookie';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function Signup() {

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

    <Layout className='container' style={{ minHeight: '100vh' }}>

      <h1 
        className='titleSignup'>
        BUILD UMass
      </h1>

      <div 
        className='innerContainerSignup'
      >
        
      <h1 
        className='signupMessage'>
        Sign Up
      </h1>

      <Form 
        {...formItemLayout}
        layout='horizontal'
        className='boxesSignup'
      >

        <Form.Item
          name='email'
          label='E-mail'
          className='formItemSignup'
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
            placeholder='E-mail'
            className='inputBoxSignup'
          />
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          className='formItemSignup'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder='Password'
            className='inputBoxSignup'
          />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          className='formItemSignup'
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
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
        >
          <Input.Password
            placeholder='Confirm Password'
            className='inputBoxSignup'
          />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Phone Number'
          className='formItemSignup'
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input
            placeholder='Phone Number'
            className='inputBoxSignup'
          />
        </Form.Item>

        <Form.Item
          name='agreement'
          {...tailFormItemLayout}
          className='checkboxSignup'
        >
          <Checkbox style={{ fontSize: '1em' }}>
            I have read the <a href='' >agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type='primary'
            htmlType='submit'
            className='buttonSignup'
            onClick={() => cookie.set('session', 'user', { expires: 3 })}>
            Register
            </Button>
        </Form.Item>

      </Form>

      </div>

      <h3 
        style={{
          marginTop: '10px',
          fontSize: '13px',
          fontFamily: 'Montserrat, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'lighter',
          zIndex: 2,
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 0 black'}}>
        <a style={{color: 'white'}}href=''>Terms of use - </a>
        <a style={{color: 'white'}}href=''>Help - </a>  
        <a style={{color: 'white'}}href=''>Privacy Policy</a>
        </h3>

    </Layout>

  );
}