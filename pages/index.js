import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../node_modules/antd/dist/antd.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SideBar from '../components/SideBar.js';
import MyHeader from '../components/MyHeader.js';
import { withAuthSync } from '../utils/auth';

const { Content, Footer } = Layout;
const { SubMenu } = Menu;


const Index = () => {


  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Layout>


        <Content style={{ margin: '0 0px' }}>

        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Build UMass</Footer>
    </Layout>


  );
}

export default Index;