import { Form, Input, Checkbox, Button, Layout,} from 'antd';
import '../node_modules/antd/dist/antd.css'
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import { login } from '../utils/auth'
<<<<<<< HEAD
import Background from '../public/Randomized-Pattern.svg'
const { Content } = Layout;

=======
import './login.css';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;
>>>>>>> 59f304d4bd98922481c66178c892b8bfc6c27fef


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
      /*TODO:
        Create login page. Use ant design components as much as possible.
        Don't worry about routing or setting up actual working login, just make it look good.
        I might work on your branch too, to add functionality to the login, so make sure you push to github whenever you add anything,
        and pull from 'origin enoch' before starting again. That way we will both have the same copy. Let me know if you have any questions.
        Your page will be hosted at localhost:3000/login
    */

    /*https://codesandbox.io/s/zkgqo
      Template code for login page from antd website, 
      should help in setting up login authentication
      API: https://ant.design/components/form/       
    */

    return (
      <Layout className = 'container'>
  
        <h1 style={{
          marginTop: '10%',
          fontSize: '60px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          opacity: 1,
          zIndex: 1,
          textShadow: '2px 0 black'}}>
          Build UMass
        </h1>

        <Form
          name='normal_login'
          style={{ margin: 'auto', marginTop: '5px' }}
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
              style={{ width: '350px', border: '1px solid black' }}
            />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input.Password 
              placeholder='Password' 
              prefix={<LockOutlined />}
              style={{ width: '350px', border: '1px solid black' }}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item 
              name='remember'
            >
              <Checkbox 
                style={{float: 'left', color: 'white' }}>
                Remember me
              </Checkbox>
              <a href=''
                  style = {{float: 'right', color: 'white' }}>
                  Forgot password
              </a>
            </Form.Item>
            <Button 
              onClick={handleSubmit}
<<<<<<< HEAD
              type="primary" 
              htmlType="submit" 
              style={{ width: '100px', marginLeft: "35%", }}>
=======
              type='primary' 
              htmlType='submit' 
              style={{ width: '100px', marginLeft: '100px', background: 'white', color: 'black', border: '1px solid black'}}>
>>>>>>> 59f304d4bd98922481c66178c892b8bfc6c27fef
              Log in
            </Button>
          </Form.Item>

        </Form>
        </Content>
      </Layout>
        );
}

