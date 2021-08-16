// import React, { Component } from 'react'
// import './App.css';

import React, { useState, useEffect }  from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '@css/style.css';
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./container/Main";
import notice from "./component/nav_item/notice";
import admin from "./component/nav_item/admin";


function App() {
  return (
    <div className="App">
      {/* 라우터 추가 */}
      <Route exact path="/" component={Main} />
      <Route path="/notice" component={notice} />
      <Route path="/admin" component={admin} />
     </div>
  );
}

export default App;






// export default class App extends Component {
//   state = {
//     testbody : "",
//     data : "",
//   }

//   //insert
//   handleChange =(e)=>{
//     this.setState({
//       [e.target.name] : e.target.value,
//     });
//   }

//   submitId = ()=>{
//     const post ={
//       test : this.state.testbody,
//     };
   
//     fetch("http://localhost:3001/idplz", {
//       method : "post", // 통신방법
//       headers : {
//         "content-type" : "application/json",
//       },
//       body : JSON.stringify(post),
//     })
//     .then((res)=>res.json())//res - 데이터를 받아옴
//   };

//  //select
//   onCall =()=>{
//     fetch("http://localhost:3001/callbody",{
//       method:"post",
//       headers : {
//         "content-type" : "application/json",
//       },
//       body : JSON.stringify(),
//     })
//     .then((res)=>res.json())
//     .then((json)=>{
//       this.setState({
//         data : json.name,//name은 속성명
//       });
//     });
//   };


//   render() {
//     return (
//       <div>
//         <input onChange={this.handleChange} name ="testbody"/>
//         <button onClick = {this.submitId}>Submit</button>
//         <h1>{this.state.testbody}</h1>
//         <br/><br/><br/><br/><br/>
//         <h2>데이터가져오기</h2>
        
//         <button onClick={this.onCall}>가져오기</button>
//         <h3>{this.state.data}</h3>
//       </div>
//     )
//   }
// }






















