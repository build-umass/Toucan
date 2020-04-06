import MyHeader from '../components/MyHeader';
import { Layout, Breadcrumb} from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { Avatar } from 'antd';
import { withAuthSync } from '../utils/auth'
import { UserOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import { Typography } from 'antd';
import React, {useState, useEffect} from 'react';
import { Button } from 'antd';
import './description.css';
const { Paragraph } = Typography;
const { Content, Footer } = Layout;

//Should ID be editable?  ID: <Paragraph editable={{ onChange: onChangeID }}>{profileInfo.ID}</Paragraph>, 
  export  default function Signup() {
    
    let [profileInfo, changeProfileInfo] = useState({
      email: 'johndoe@umass.edu',
      ID: '12345678',
      phone: '1234567890'
    });
    let [edit, setEdit] = useState(false);
    function onChangeEmail(newEmail) {
      //TODO: Save to database
      changeProfileInfo({...profileInfo, email: newEmail});
    };
    
    const onChangeID = newID => {
      //TODO: Save to database
      changeProfileInfo({...profileInfo, ID: newID});
    };
    
    const onChangePhone = newPhone => {
      //TODO: Save to database
      changeProfileInfo({...profileInfo, phone: newPhone});
    };

    let button = <Button type="primary" onClick={()=> {setEdit(true);}} style= {{display:'relative', marginTop: '10px'}}>
                  Edit User
                 </Button>;

    if(edit) {
      button = <Button type="primary" onClick={()=> {setEdit(false);}} style= {{display:'relative', marginTop: '10px'}}>
                 Finished
               </Button>;
    }

    let descriptions = <Descriptions title="John Doe" style= {{marginTop: 20}}>
                        <Descriptions.Item label="Email address">{profileInfo.email}
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone Number">{profileInfo.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="Student ID">{profileInfo.ID}
                        </Descriptions.Item>
                      </Descriptions>
    if(edit) {
      descriptions = <Descriptions title="John Doe" style= {{marginTop: 10}}>
                        <Descriptions.Item label="Email address" >
                          <Paragraph editable={{ onChange: onChangeEmail }} style= {{marginTop: '10px', width: '200px'}}>{profileInfo.email}</Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone Number">
                         <Paragraph editable={{ onChange: onChangePhone }} style= {{marginTop: '10px', width: '150px'}}>{profileInfo.phone}</Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Student ID">{profileInfo.ID}
                        </Descriptions.Item>
                      </Descriptions>
    }

    return (
        <Layout style={{ minHeight: '100vh', margin: 'auto', textAlgin: 'center' }}>
    
        <Layout>
        <MyHeader pageName = "Profile"/>
        <Layout>
        <SideBar selected={'profile'}/>
        <Layout>
          <Content style={{ margin: 'auto', alignItems: 'center' }}>
            
            <div style={{padding:'3%', textAlign: 'center',  background: '#fff', width: '100%', alignItems: "center", margin: "auto"}}>
            
            <div>
              <Avatar size={200} style = {{margin: 'auto', display: 'inline-block'}}icon={<UserOutlined />}/>
              {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> */}
              <span> {"                              "}</span>
            </div>
            
            {button}
                                                       
            {descriptions}
          
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>
          </Layout>
          </Layout>
        </Layout>
    
      </Layout>
        );
    
    }
