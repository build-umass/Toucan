import { Layout, Menu, } from 'antd'; //add icon
import React, {useState} from 'react';
import Router from 'next/router';
import './componentcss/sidebar.css';
const {Sider } = Layout;
const { SubMenu } = Menu;




export default function SideBar(props){
    return(
    <Sider theme = "light" >
          <div className="logo" />
          <Menu defaultSelectedKeys={[props.selected]} mode="inline">
                <Menu.Item onClick = {()=> Router.push('/settings')} key="settings">

                {/* <Icon type="setting" /> */}

                <span>Settings</span>
                </Menu.Item> 
            

            <Menu.Item onClick = {()=> Router.push('/profile')} key="profile">
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item onClick = {()=> Router.push('/members')} key="members">
              <span>Members</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              onClick = {()=> Router.push('/formBuilder')}
              title={
                <span>
                  {/* <Icon type="form" /> */}
                  <span>Form Builder</span>
                </span>
              }
            >
              <Menu.Item key="formbuilder">Create Form</Menu.Item>
              <Menu.Item key="5">Deploy Forms</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
);
}