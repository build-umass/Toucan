import { Layout, Menu} from 'antd';
import React, {useState} from 'react';
const {Header } = Layout;


export default function MyHeader(props){
  return(
    <Header style = {{display: 'flex', background:'rgb(200,33,4)', alignItems:'center', justifyContent:'center'}} className="header" theme = "light" width = '100%'>
      <div className = "Title" style = {{display: 'flex', justifyContent:'center', alignItems:'center', width:'100%'}}> 
        <h1 style = {{fontFamily: 'Montserrat, sans-serif', fontSize: 40, color:'white',margin:'2%'}}color= "white">{props.pageName}</h1>
      </div>
    </Header>
  );
}