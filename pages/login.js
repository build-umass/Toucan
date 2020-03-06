import { Form, Icon, Input, Checkbox, Button, Layout, Menu, } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
const { Content, Footer } = Layout;
const { SubMenu } = Menu;

export  default function Login() {

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
      <Layout style={{ minHeight: '100vh' }}>

        <img src="buildIcon.jpg" title="Build Logo" style={{ margin: '15px auto 15px auto', width: '200px', height: '200px', padding: "0px" }}/>
  
        <h1 style={{
          margin: "10px, auto, 10px, auto", 
          fontSize: "60px",   
          color: "#fff",
          fontFamily: "Arvo",
          fontWeight: "bold",
          color: "#222",
          textShadow: 
          "4px 4px 0px #f5f5f5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
          letterSpacing: "0.1em",
          letterSpacing: "0.1em",
          textAlign: "center"}}>
          Build UMass
        </h1>

        <Form
          name="normal_login"
          style={{ margin: 'auto', marginTop: '5px' }}
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
            <Input.Password 
              placeholder="Password" 
              prefix={<Icon type="lock" style={{ fontSize: 15 }} />}
              style={{ width: '300px' }}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item 
              name="remember"
            >
              <Checkbox 
                style={{float: 'left'}}>
                Remember me
              </Checkbox>
              <a href=""
                  style = {{float: 'right'}}href="">
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

