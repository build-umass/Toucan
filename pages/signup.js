import { Form, Menu, Input, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './css/signup.css';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
import cookie from 'js-cookie';

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

        <h1 className='title' style={{
          marginTop: '10px',
          marginBottom: '0px',
          fontSize: '60px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          opacity: 1,
          zIndex: 2,
          textShadow: '2px 0 black'}}>
          Build UMass
        </h1>

      <div className ='innerContainer'>
        
      <h1 style={{
        marginTop: '25px',
        marginBottom: '5px',
        fontSize: '25px',
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        opacity: 1,
        zIndex: 2,}}>
        Sign Up
      </h1>

      <Form
        {...formItemLayout}
        layout='horizontal'
        className='boxes'
        style={{ position: 'relative', margin: 'auto', marginTop: '2.5%' }}
      >

        <Form.Item
          name='email'
          label='E-mail'
          className='formItem'
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
            style={{ width: '270px', border: '1px solid black', boxShadow: 'inset 0 0 2px black' }}
          />
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          className='formItem'
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
            style={{ width: '270px', border: '1px solid black', boxShadow: 'inset 0 0 2px black' }}
          />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          className='formItem'
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
            style={{ width: '270px', border: '1px solid black', boxShadow: 'inset 0 0 2px black' }}
          />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Phone Number'
          className='formItem'
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input
            placeholder='Phone Number'
            style={{ width: '270px', border: '1px solid black', boxShadow: 'inset 0 0 2px black' }}
          />
        </Form.Item>

        <Form.Item
          name='agreement'
          {...tailFormItemLayout}
          className='checkbox'
        >
          <Checkbox style={{ fontSize: '1em' }}>
            I have read the <a href='' >agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type='primary'
            htmlType='submit'
            className='button'
            onClick={() => cookie.set('session', 'user', { expires: 3 })}
            style={{ width: '270px', color: 'white', fontSize: '1em', fontWeight: 'bold', borderRadius: '2%', boxShadow: 'inset 0 0 3px black'}}>
            Register
            </Button>
        </Form.Item>

      </Form>

      </div>

      <h3 style={{
          marginTop: '10px',
          fontSize: '13px',
          fontFamily: 'Montserrat, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'lighter',
          zIndex: 2,
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 0 black'}}>
          <a style={{color: 'white'}}href="url">Terms of use - </a>
          <a style={{color: 'white'}}href="url">Help - </a>  
          <a style={{color: 'white'}}href="url">Privacy Policy</a>
        </h3>

    </Layout>

  );
}
