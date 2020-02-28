import MyHeader from '../components/MyHeader';
import { Layout, Breadcrumb} from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
const { Content, Footer } = Layout;
import {useState} from 'react';
import Logo from '../components/Logo.js'
export default function about(){
  let [count, updateCount] = useState(0);

  return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={2}/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>profile</Breadcrumb.Item>
            </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>count: {count}</div>
          <button onClick = {() => {updateCount(count=count+1)}}> count++</button>
          <Logo></Logo>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );
    
}