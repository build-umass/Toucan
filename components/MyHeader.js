import { Layout, Menu} from 'antd';
import React, {useState} from 'react';
import Logo from './Logo.js';
const {Header } = Layout;

export default function MyHeader(){
  return(
    
    <Header className="header">
      <div className="logo" />
      
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
  <Menu.Item key ="4"><Logo/></Menu.Item>
      </Menu>
      
    </Header>
  );
}