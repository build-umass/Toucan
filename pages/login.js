import { Form, Input, Checkbox, Button, Layout} from 'antd';
import '../node_modules/antd/dist/antd.css'
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import { login } from '../utils/auth'
import './css/login.css';

export  default function Login() {

  const [userData, setUserData] = useState({ username: '', error: '' })

  const handleSubmit = async event => {
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))

    const username = userData.username
    const url = '/api/login'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      })
      if (response.status === 200) {
        const { token } = await response.json()
        await login({ token })
      } else {
        console.log('Login failed.')
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
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      )
    }
  }

  /*https://codesandbox.io/s/zkgqo
      Template code for login page from antd website, 
      should help in setting up login authentication
      API: https://ant.design/components/form/       
    */

    return (

      <Layout className = 'container'>
        
        <h1 
          className='titleLogin'>
          BUILD UMass
        </h1>

        <div 
          className ='innerContainerLogin'
        >
        
        <h1 
          className ='loginMessage'>
          Log In to Your Account
        </h1>

        <Form
          name='normal_login'
          className='boxesLogin'
        >

          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
            >
            <Input 
              onChange = {event =>
              setUserData(
                Object.assign({}, userData, { username: event.target.value })
              )
              }
              placeholder='Username' 
              prefix={<UserOutlined />}
              className="inputBoxLogin"
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input.Password 
              placeholder='Password' 
              prefix={<LockOutlined />}
              className="inputBoxLogin"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item 
              name='remember'
            >
              <Checkbox 
                className="rememberMeLogin">
                Remember me
              </Checkbox>
              <a href=''
                 className='forgotPassLogin'>
                  Forgot password
              </a>
            </Form.Item>
            <Button 
              onClick={handleSubmit}
              type='primary' 
              htmlType='submit' 
              className='loginButton'>
              Log in
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