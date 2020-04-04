import { Layout, Menu, } from 'antd'; //add icon
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
                <Menu.Item onClick = {()=> Router.push('/settings')} key="1">
                {/* <Icon type="setting" /> */}
                <span>Settings</span>
                </Menu.Item>
            
            <Menu.Item onClick = {()=> Router.push('/profile')} key="2">
              {/* <Icon type="user" /> */}
              <span>Profile</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              onClick={()=>Router.push('/members')}
              title={
                <span>
                  {/* <Icon type="team" /> */}
                  <span>Members</span>
                </span>
              }
              
            >
              <Menu.Item key="3" onClick = {()=>{console.log('outshmea')}}>Edit Members</Menu.Item>
              <Menu.Item key="4">View Members</Menu.Item>
            </SubMenu>
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
              <Menu.Item key="6">Create Form</Menu.Item>
              <Menu.Item key="8">Deploy Forms</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
);
}