import { Layout, Menu, Icon } from 'antd';
import React, {useState} from 'react';
import Router from 'next/router';

const {Sider } = Layout;
const { SubMenu } = Menu;




export default function SideBar(props){

    const [collapsed,setCollapsed] = useState(false)
    function  onCollapse (collapsed){
      console.log(collapsed);
      setCollapsed(collapsed);
    };

    return(
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[props.selected]} mode="inline">
                <Menu.Item onClick = {()=> Router.push('/settings')} key="settings">
                <Icon type="setting"/>
                <span>Settings</span>
                </Menu.Item> 
            
            <Menu.Item onClick = {()=> Router.push('/profile')} key="profile">
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item onClick = {()=> Router.push('/members')} key="members">
              <Icon type="team" />
              <span>Members</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              onClick = {()=> Router.push('/formBuilder')}
              title={
                <span>
                  <Icon type="form" />
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