import MyHeader from '../components/MyHeader';
import { Layout, Breadcrumb, AutoComplete } from 'antd';
import SideBar from '../components/SideBar';
import '../node_modules/antd/dist/antd.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Descriptions } from 'antd';
import { Typography } from 'antd';
import React, { useState } from 'react';
import './css/profile.css';
const { Paragraph } = Typography;
const { Content, Footer } = Layout;

export default function Profile() {

  let [profileInfo, changeProfileInfo] = useState({
    email: 'johndoe@umass.edu',
    ID: '12345678',
    phone: '1234567890'
  });
  
  function onChangeEmail(newEmail) {
    //TODO: Save to database
    changeProfileInfo({ ...profileInfo, email: newEmail });
  };

  const onChangeID = newID => {
    //TODO: Save to database
    changeProfileInfo({ ...profileInfo, ID: newID });
  };

  const onChangePhone = newPhone => {
    //TODO: Save to database
    changeProfileInfo({ ...profileInfo, phone: newPhone });
  };

  return (
    
    <Layout style={{ minHeight: '100vh', margin: 'none', textAlgin: 'center' }}>

      <Layout>

        <MyHeader pageName='Profile' />

        <Layout>

          <SideBar selected={'profile'} />

          <Layout>

            <Content 
              className = 'profile' 
              style={{ 
                width: '70%', 
                margin: 'auto', 
                alignItems: 'center', 
                background: '#fff' }}>

              <div 
                style={{ 
                  width: '100%',
                  height: '90%', 
                  margin: 'auto',                    
                  padding: '3%', 
                  textAlign: 'center', 
                  background: '#fff', 
                  alignItems: 'center',  }}>

                <div>
                  <Avatar 
                    size={200} 
                    style={{ 
                      margin: 'auto', 
                      display: 'inline-block' }} 
                      icon={<UserOutlined />} />
                  {/* <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' /> */}
                  <span> {'                              '}</span>

                </div>

                <Descriptions 
                  title='John Doe' 
                  bordered column = {1} 
                  style={{ 
                    marginTop: 20, 
                    marginBottom: 20, 
                    width: '100%' }}>

                  <Descriptions.Item label='Email address' >
                    <Paragraph 
                      className = 'editable' 
                      editable={{ onChange: onChangeEmail }} 
                      style={{ 
                        paddingLeft: '20px', 
                        margin: 'auto', 
                        height: '32px', 
                        width: '250px'}}>
                      {profileInfo.email}
                    </Paragraph>
                  </Descriptions.Item>

                  <Descriptions.Item label='Phone Number'>
                    <Paragraph 
                      className = 'editable' 
                      editable={{ onChange: onChangePhone }} 
                      style={{ 
                        paddingLeft: '20px', 
                        margin: 'auto', 
                        height: '32px', 
                        width: '250px'}}>
                      {profileInfo.phone}
                    </Paragraph>
                  </Descriptions.Item>

                  <Descriptions.Item 
                    label='Student ID' 
                    style={{ 
                      paddingLeft: '30px', 
                      paddingTop: '10px'}}>
                    {profileInfo.ID}
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