import React, {useState, useEffect} from 'react';
import MyHeader from '../components/MyHeader';
import SideBar from '../components/SideBar';
import Question from '../components/Question';
import '../node_modules/antd/dist/antd.css'
import { Layout, Breadcrumb, Button} from 'antd';
const { Content, Footer } = Layout;

const defaultFormItemLayout = {
  labelCol: {
    xs: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 12 }
  }
};

export default function FormBuilder(){

  const [numQuestions, setNumQuestions] = useState(1);
  const [questionsArr, setQuestionsArr] = useState([]);

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

  function handleClick(event) {
    const {name} = event.target;
    let num = numQuestions;
    let questions = questionsArr;
    if(name === "add"){
      setNumQuestions(++num);
      questions.push(<Question key = {generateKey(numQuestions)} name = {numQuestions}/>);
      questions = questions.map(x => x); //for some reason this is needed to the array of components can be read
      setQuestionsArr(questions);
    } else if (name === "delete") {
      if(num != 1) {
        setNumQuestions(--num);
        questions.pop();
        questions = questions.map(x => x);
        setQuestionsArr(questions);
      }
    }
  }
  
  return(

        <Layout style={{ minHeight: '100vh' }}>
        <Layout>
        <MyHeader/>
        <Layout>
        <SideBar selected={4}/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Form builder</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 20, background: '#fff', minHeight: 360, fontSize: "2em"}}>
              {questionsArr}
              <div style={{ display: "flex", justifyContent: "center"}}>
                <Button name = "add" type = "primary" onClick = {handleClick} style = {{fontWeight: "900", right: "5%", width: "10em", height: "5em" }}>Add</Button>
                <Button name = "delete" type = "primary" onClick = {handleClick} style = {{fontWeight: "900", left: "5%", width: "10em", height: "5em"}}>Delete</Button>
              </div>
            </div>
          </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Build Umass</Footer>

        </Layout>
    
      </Layout>
        );  
};