import MyHeader from '../components/MyHeader';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'

const { Content, Footer } = Layout;


export default function about(){
    return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader itemOne = "Profile"/>
        <Layout>
        <SideBar selected={2}/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>About Us</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>About us page.</div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );
    
}