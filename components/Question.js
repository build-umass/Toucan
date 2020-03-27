import {  Form, Input} from 'antd';
import '../node_modules/antd/dist/antd.css'
import React from 'react';
const { TextArea } = Input;

export default function Question(props){

  const formItemLayout = {
    labelCol: {
      sm: { span: 7 },
    },
    wrapperCol: {
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 23,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
        
      },
    },
  };

  let name = "Question " + props.name; 

  return(
    <Form
    {...formItemLayout}
    layout= "horizontal"
    className="boxes"
    style={{position: "relative", margin: "auto"}}
  >

    <Form.Item
      name = {name}  
      label= {name} 
    >
      <Input 
        placeholder="Write Question Here" 
      />
    </Form.Item>

    <Form.Item
        name="Answer"
        label="Answer"
    >
        <TextArea placeholder="Empty Text Box for Clients to Answer"  rows={4}  />
    </Form.Item>

  </Form>

  );
}