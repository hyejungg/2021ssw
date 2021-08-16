import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    testbody : "",
    data : "",
  }


  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      test : this.state.testbody,
    };
   
    fetch("http://localhost:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())//res - 데이터를 받아옴
    .then((json)=>{
      this.setState({
        testbody : json.text,
      });
    });
  };


  onCall =()=>{
    fetch("http://localhost:3001/callbody",{
      method:"post",
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        data : json.name,//name은 속성명
      });
    });
  };


  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="testbody"/>
        <button onClick = {this.submitId}>Submit</button>
        <h1>{this.state.testbody}</h1>
        <br/><br/><br/><br/><br/>
        <h2>데이터가져오기</h2>
        
        <button onClick={this.onCall}>가져오기</button>
        <h3>{this.state.data}</h3>
      </div>
    )
  }
}




// import React, { useState, useEffect }  from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '@css/style.css';
 
// import BoardList from '@components/BoardList';
// import BoardNew from '@components/BoardNew';
// import BoardContent from '@components/BoardContent';
// import Footer from '@components/Footer';
// import axios from 'axios';


 
// function App () {
 
//   //const [test, setTest] = useState('')
 
//  // render 후 바로 실행
//   useEffect(() => {
//     axios.get('/api/test')
//       .then(res => console.log(res))
//   })
 
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Switch>
//             <Route path='/' component={BoardList} exact />
//             <Route path='/BoardNew' component={BoardNew} exact />
//             <Route path='/BoardContent' component={BoardContent} exact />
//           </Switch>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   )
// }
 
// export default App;



















