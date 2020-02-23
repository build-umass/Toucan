import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Content, Footer } = Layout;


export default function FormBuilder(){
    return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={4}/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Form builder</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Form builder page.</div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );
    
}