import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'

const { Content, Footer } = Layout;

export default function settings(){
    return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={1} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Settings page.</div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );

}