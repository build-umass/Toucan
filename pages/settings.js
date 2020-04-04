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
        <MyHeader pageName="Settings"/>
        <Layout>
        <SideBar selected={'settings'} />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Settings page.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
          </Layout>
          </Layout>
        </Layout>
    
      </Layout>
        );

}
export default withAuthSync(Settings);