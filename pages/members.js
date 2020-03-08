import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer } = Layout;


import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'

export default function Members() {
    return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={3}/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Members</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Members page.</div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );

}