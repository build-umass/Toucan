import { Layout, Menu, } from 'antd';
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

    return (
      <Layout style={{ minHeight: '100vh' }}>
          <p>hello world</p>
      </Layout>

    );
  }

