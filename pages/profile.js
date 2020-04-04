import MyHeader from '../components/MyHeader';
import { Layout, Breadcrumb} from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { Avatar } from 'antd';
import { withAuthSync } from '../utils/auth'
import { UserOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import { Typography } from 'antd';
import React, {useState} from 'react';
import { Button } from 'antd';
const { Paragraph } = Typography;
const { Content, Footer } = Layout;




function  Profile(props){


let [profileInfo, changeProfileInfo] = useState(
  {email: 'johndoe@umass.edu',
  ID: '12345678',
  phone: '1234567890'
});

function onChangeEmail(newEmail) {
  //TODO: Save to database
  changeProfileInfo({...profileInfo, email: newEmail});
};


const onChangeID = newID => {
  //TODO: Save to database
  changeProfileInfo({...profileInfo, ID: newID});
};

const onChangePhno = newPhno => {
  //TODO: Save to database
  changeProfileInfo({...profileInfo, phno: newPhno});
  
};
       return(
        <Layout style={{ minHeight: '100vh' }}>
    
        <Layout>
        <MyHeader pageName = "Profile"/>
        <Layout>
        <SideBar selected={'profile'}/>
        <Layout>
          <Content style={{ margin: 'auto' }}>
            
            <div style={{padding:'3%', background: '#fff', width: '100%',    }}>
            
            <Avatar size={200} style = {{}}icon={<UserOutlined />}/>
            {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
            <span> {"                              "}</span>


            <Button type="primary" onClick={()=> changeProfileInfo({ 
              email: <Paragraph editable={{ onChange: onChangeEmail }}>{profileInfo.email}</Paragraph>, 
              ID: <Paragraph editable={{ onChange: onChangeID }}>{profileInfo.ID}</Paragraph>, 
              phno: <Paragraph editable={{ onChange: onChangePhno }}>{profileInfo.phno}</Paragraph>})} 
              style= {{marginLeft: '80%'}}>Edit User</Button>
                                                                   
            <Descriptions title="John Doe" style= {{marginLeft: 60, marginTop: 10, fontSize: 35}}>
              <Descriptions.Item label="Email address">{profileInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label="Student ID">{profileInfo.ID}
              </Descriptions.Item>
              <Descriptions.Item label="Phone Number">{profileInfo.phno}
              </Descriptions.Item>
            </Descriptions>
          
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
          </Layout>
          </Layout>
        </Layout>
    
      </Layout>
        );
    
}
export default withAuthSync(Profile);
