import { Form, Menu, Input, Layout, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './css/signup.css';
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
  
  let [info, setInfo] = useState({username: '', password: '', error: ''})
  const handleSubmit = async event => {
    event.preventDefault()
    setInfo(Object.assign({}, info, { error: '' }))
    console.log(info)
    const credentials = info
    console.log(JSON.stringify(credentials))
    const url = 'http://localhost:3001/signup'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain',
      },

      //probably not good to have no-cors
      mode:'no-cors',
        body: JSON.stringify(credentials ),
      })
      if (response.status === 200) {
        const { token } = await response.json()
        await login({ token })
      } else {
        console.log('signup failed.')
        console.log(response.status)
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setInfo(
        Object.assign({}, info, {
          error: response ? response.statusText : error.message,
        })
      )
    }
  }

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
            onChange = {event =>
              setInfo(
                Object.assign({}, info, { username: event.target.value })
              )
              }
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
            onChange = {event =>
              setInfo(
                Object.assign({}, info, { password: event.target.value })
              )
              }
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
            onClick={handleSubmit}>
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
          textAlign: 'center',}}>
        <a style={{color: 'white'}}href=''>Terms of use - </a>
        <a style={{color: 'white'}}href=''>Help - </a>  
        <a style={{color: 'white'}}href=''>Privacy Policy</a>
        </h3>

    </Layout>

  );
}