import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SideBar from '../components/SideBar.js';
import MyHeader from '../components/MyHeader.js';

const { Content, Footer } = Layout;
const { SubMenu } = Menu;


  export  default function Index() {


    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build UMass</Footer>
        </Layout>

      </Layout>

    );
  }

