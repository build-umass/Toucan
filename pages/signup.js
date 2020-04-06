import {  Form, Menu, Input, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import './signup.css';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
import cookie from 'js-cookie';

  export  default function Signup() {

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

      <Layout className = 'container' style={{ minHeight: '100vh' }}>
  
        <h1 style={{
          marginTop: '5%',
          marginBottom:'2.5%',
          fontSize: '60px',   
          fontFamily: 'Arial, Times, Times New Roman, Arvo',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 0 black',
          opacity: 1,
          zIndex: 1,}}>
          Build UMass
        </h1>

        <Form
          {...formItemLayout}
          layout= 'horizontal'
          className='boxes'
          style={{position: 'relative', margin: 'auto', marginTop: '0%'}}
        >

          <Form.Item
            name='email'
            label='E-mail'
            style={{color: 'white', fontSize: '5px'}}
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
              style = {{width: '350px', border: '1px solid black' }}
            />
          </Form.Item>

          <Form.Item
              name='password'
              label='Password'
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
                style={{ width: '350px', border: '1px solid black' }} 
              />
          </Form.Item>

          <Form.Item
              name='confirm'
              label='Confirm Password'
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
                placeholder='Confirm Password' 
                style={{ width: '350px', border: '1px solid black'}}
              />
          </Form.Item>

          <Form.Item
            name='phone'
            label='Phone Number'
            rules={[{ required: true, message: 'Please input your phone number!' }]}
            style={{color: 'white' }}
          >
              <Input 
                placeholder='Phone Number' 
                style={{ width: '350px', border: '1px solid black'}} 
              />
          </Form.Item>

          <Form.Item 
            name='agreement' 
            {...tailFormItemLayout}
            className='checkbox'
            >
            <Checkbox style={{color: 'white', fontSize: '1em'}}> 
              I have read the <a href='' style={{color: 'cyan'}}>agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button 
              type='primary' 
              htmlType='submit'
              className='button'
              onClick={()=>cookie.set('session','user',{ expires: 3 })}
              style={{ width: '100px', background: 'white', color: 'black', border: '1px solid black' }}>                     
              Register
            </Button>
          </Form.Item>

        </Form>

      </Layout>

    );
  }
