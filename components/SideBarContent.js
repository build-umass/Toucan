import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

  
import { Layout, Menu, } from 'antd'; //add icon
import {useState} from 'react';
import Router from 'next/router';
import './componentcss/sidebar.css';
const {Sider } = Layout;
const { SubMenu } = Menu;

const duration = 1000
const sidebarStyle = {
  transition: `width ${duration}ms`
}
const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '200px' },
  exiting: { width: '200px' },
  exited: { width: 0 }
}
const linkStyle = {
  transition: `opacity ${duration}ms`
}
const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}
export default class SidebarContent extends Component {
  renderLinks = () => {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div style={{
          ...linkStyle,
          ...linkTransitionStyles[state]
        }}>
          <Sider theme = "light" >
          <Menu defaultSelectedKeys={[this.props.selected]} mode="inline">
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
        </div>
      )}
    </Transition>
  }
  
  render() {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div className="sidebar" style={{
          ...sidebarStyle,
          ...sidebarTransitionStyles[state]
        }}>
          {this.renderLinks()}
        </div>
      )}
    </Transition>
  }
}