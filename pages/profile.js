import MyHeader from '../components/MyHeader';
import { Layout, Breadcrumb} from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { Avatar } from 'antd';
import { withAuthSync } from '../utils/auth'
import { UserOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import { Typography } from 'antd';
import React from 'react';
import { Button } from 'antd';
const { Paragraph } = Typography;
const { Content, Footer } = Layout;


const  Profile = props =>{


let nostate = {
  email: "johndoe@umass.edu",
  ID: "10000000",
  phno: "1000000000"
};


const onChangeEmail = email => {
  console.log('Content change:', email);
  nostate.email =  email ;
};

const onChangeID = ID => {
  console.log('Content change:', ID);
  nostate.ID= ID;
};

const onChangePhno = phno => {
  console.log('Content change:', phno);
  nostate.phno = phno;
};
       return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={2}/>
          <Content style={{ margin: '0 30px' }}>
            <Breadcrumb style={{ margin: '30px 0' }}>
              <Breadcrumb.Item style={{ fontSize: 25}}>Profile Page</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 500, width: '100%' }}>
            
            <Avatar size={200} icon={<UserOutlined />}/>
            {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
            <span> {"                              "}</span>
            <Button type="primary" onClick={()=> nostate = ({ 
              email: <Paragraph editable={{ onChange: this.onChangeEmail }}>{nostate.email}</Paragraph>, 
              ID: <Paragraph editable={{ onChange: this.onChangeID }}>{nostate.ID}</Paragraph>, 
              phno: <Paragraph editable={{ onChange: this.onChangePhno }}>{nostate.phno}</Paragraph>})} 
              style= {{marginLeft: 1000}}>Edit User</Button>
            <Descriptions title="John Doe" style= {{marginLeft: 60, marginTop: 10, fontSize: 35}}>
              <Descriptions.Item label="Email address">{nostate.email}
              </Descriptions.Item>
              <Descriptions.Item label="Student ID">{nostate.ID}
              </Descriptions.Item>
              <Descriptions.Item label="Phone Number">{nostate.phno}
              </Descriptions.Item>
            </Descriptions>
          
            </div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
        </Layout>
    
      </Layout>
        );
    
}
export default withAuthSync(Profile);
