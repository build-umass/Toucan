import { Layout, Menu} from 'antd';
import React, {useState} from 'react';
const {Header } = Layout;
import Background from '../public/Randomized-Pattern.svg'


export default function MyHeader(props){
  return(
      <div className = "Title" style = {{backgroundImage: `url(${Background})`, backgroundSize:'cover', display: 'flex', justifyContent:'center', alignItems:'center', width:'100%'}}> 
        <h1 style = {{fontFamily: 'Montserrat, sans-serif', fontSize: 40, color:'white',margin:'2%'}}color= "white"><strong>{props.pageName}</strong></h1>
      </div>
  );
}