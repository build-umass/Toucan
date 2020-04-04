import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { withAuthSync } from '../utils/auth';

const { Content, Footer } = Layout;

const Settings = (props) =>{
    return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader pageName="Setttings"/>
        <Layout>
        <SideBar selected={'settings'} />
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
export default withAuthSync(Settings);