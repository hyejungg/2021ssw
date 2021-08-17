// // import React from "react";
// // import "../css/Modal.css";
// // import { makeStyles } from "@material-ui/core/styles";
// // import TextField from "@material-ui/core/TextField";
// // import FormLabel from "@material-ui/core/FormLabel";
// // import FormControl from "@material-ui/core/FormControl";
// // import FormGroup from "@material-ui/core/FormGroup";
// // import FormControlLabel from "@material-ui/core/FormControlLabel";
// // import FormHelperText from "@material-ui/core/FormHelperText";
// // import Checkbox from "@material-ui/core/Checkbox";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     marginLeft: "15px",
// //     marginRight: "15px",
// //   },
// //   button: {
// //     color: "#81bef7",
// //   },
// // }));

// // const Modal = (props) => {
// //   // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
// //   const { open, close, header } = props;

// //   //모달 내 입력 폼 관련 변수 정의
// //   const classes = useStyles();
// //   const [state, setState] = React.useState({
// //     camera: false,
// //     safe: false,
// //     public_toilet: false,
// //   });
// //   const { camera, safe, public_toilet } = state;

// //   const handleChange = (event) => {
// //     setState({ ...state, [event.target.name]: event.target.checked });
// //   };

// //   return (
// //     // 모달이 열릴때 openModal 클래스가 생성된다.
// //     <div className={open ? "openModal modal" : "modal"}>
// //       {open ? (
// //         <section>
// //           <header>
// //             {header}
// //             <button className="close" onClick={close}>
// //               {" "}
// //               &times;{" "}
// //             </button>
// //           </header>
// //           <main>
// //             {props.children} {/* Main.js에 연결 */}
// //             <form className={classes.root}>
// //               <FormControl>
// //                 <span>
// //                   <TextField 이름 id="name" label="이름" placeholder="김수정" />{" "}
// //                   <TextField
// //                     비밀번호
// //                     id="pw"
// //                     label="비밀번호"
// //                     type="password"
// //                   />
// //                 </span>
// //                 <br />
// //                 <FormHelperText>
// //                   이용해 본 경험을 바탕으로 선택해주세요.
// //                 </FormHelperText>
// //                 <FormGroup>
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={camera}
// //                         onChange={handleChange}
// //                         name="camera"
// //                       />
// //                     }
// //                     label="몰래카메라가 있었나요?"
// //                   />
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={safe}
// //                         onChange={handleChange}
// //                         name="safe"
// //                       />
// //                     }
// //                     label="안심화장실 스티커가 붙어 있었나요?"
// //                   />
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={public_toilet}
// //                         onChange={handleChange}
// //                         name="public_toilet"
// //                       />
// //                     }
// //                     label="공용화장실이었나요?"
// //                   />
// //                 </FormGroup>
// //                 <TextField
// //                   id="context"
// //                   label="후기"
// //                   placeholder="짧은 이용 후기를 한 줄로 작성해주세요!"
// //                   fullWidth
// //                   margin="normal"
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                 />
// //               </FormControl>
// //             </form>
// //           </main>
// //           <footer>
// //             <button className="send" onClick={close}>
// //               {" "}
// //               등록{" "}
// //             </button>{" "}
// //             {/* close버튼은 지우기 위에 X버튼 있으니까 */}
// //             {/* <button className="close" onClick={close}>
// //               {" "}
// //               close{" "}
// //             </button> */}
// //           </footer>
// //         </section>
// //       ) : null}
// //     </div>
// //   );
// // };

// // export default Modal;



// import React, { Component, useState, useEffect } from "react";
// import data from '../data.json'
// import imgRed from "./info_item/redbutton.png";
// import imgYel from "./info_item/yellowbutton.png";
// import imgBlue from "./info_item/bluebutton.png";
// import imgWhite from "./info_item/white.PNG";

// const { kakao } = window;

// //마커 정보 꾸미는 스타일
// const style={
//   loc : {
//       // color:"#00f",
//       marginTop:'20px',
//       marginBottom:'10px',
//       marginLeft:'20px',
//       textAlign : 'left'
//   },
//   addr : {
//       color:"#000",
//       marginBottom:'10px',
//       marginLeft:'20px',
//       textAlign : 'left'
//   },
//   cont : {
//       verticalAlign: "false"
//   },
//   resultColor : {
//       marginLeft:'20px',
//       float:"left"
//   },
//   resultText : {
//       float:"left",
//       marginTop : "5px",
//       marginBottom:'10px',
//       marginLeft:'20px'
      
//   }
// }


// const MapContainer = () => {

//   //마커 정보 출력할 state선언
//   const [state,setState] = useState([])
//   const [name, setName] = useState([])
//   const [add, setAdd] = useState([])
//   const [result, setResult] = useState([])
//   const [toilet_data, setToilet] = useState([])
//   // const [position, setPosition] = useState({
//   //   loc_name: "",
//   //   address:"",
//   //   latitude: "",
//   //   longtitude: "",
//   //   result: ""
//   // },)

//   let position = new JSON();

//   //데이터 호출
//   function callToiletInfo(){
//     fetch("http://localhost:3001/toilet_info",{
//         method:"get",
//         headers : {
//           "content-type" : "application/json",
//         },
//         body : JSON.stringify(),
//       })
//       .then((res)=>res.json())
//       .then((json)=>{
//         console.log(json);
//         position = json;
//       });
//   }


//   useEffect(() => {
//     const container = document.getElementById("myMap");
//     const options = {
//       center: new kakao.maps.LatLng(37.591673, 127.021269),
//       level: 3,
//     };

//     //지도 생성
//     const map = new kakao.maps.Map(container, options);
  
//     //데이터 가져와 마커 생성
//     // let positions = json
//     for (var i = 0, len = position.length; i < len; i++) {
//       addMarker(position[i]);
//     }
    
//     // 마커를 지도 위에 표시 
//     function addMarker(position) {  
//       var marker = new kakao.maps.Marker({
//           map: map,
//           position: new kakao.maps.LatLng(position.latitude, position.longtitude)
//       });

      
//       //클릭시 마커 정보를 state에 전달
//       kakao.maps.event.addListener(marker, 'click', function() {
//         setName(position.loc_name);
//         setAdd(position.address);
//         setResult(position.result);
//       });
//     }
//   }, []);

  
//  //위험도에 따른 색상
//  function color(result){ 
//    if(result === '상') return imgBlue
//    else if(result === '중') return imgYel
//    else if(result === '하') return imgRed
//    else return imgWhite
//  }
  

//   return (
//     <div>
//       {callToiletInfo()}
//     <div
//       id="myMap"
//       style={{
//         width: "100%",
//         height: "31em",
//       }}>
//     </div>
//       <div
//          style={{
//           width: "70%",
//           height: "110px",
//           float:'left'
//         }}>
//         <h2 style={style.loc}>{name}</h2>
//         <h4 style={style.addr}>{add}</h4>  
//         <img src={color(result)} style={style.resultColor}/>
//         <h4 style={style.resultText}>{result}</h4>
//       </div>
//     </div>
//   );
// };

// export default MapContainer;





// import React, {useState, useEffect} from "react";
// // import "../css/Modal.css";
// // import { makeStyles } from "@material-ui/core/styles";
// // import TextField from "@material-ui/core/TextField";
// // import FormLabel from "@material-ui/core/FormLabel";
// // import FormControl from "@material-ui/core/FormControl";
// // import FormGroup from "@material-ui/core/FormGroup";
// // import FormControlLabel from "@material-ui/core/FormControlLabel";
// // import FormHelperText from "@material-ui/core/FormHelperText";
// // import Checkbox from "@material-ui/core/Checkbox";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     marginLeft: "15px",
// //     marginRight: "15px",
// //   },
// //   button: {
// //     color: "#81bef7",
// //   },
// // }));


// // const Modal = (props) => {

// //   // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
// //   const { open, close, header, onSave, changeInput, resetForm, _inputData } = props;

// //   const [camera, setCamera] = useState(false);
// //   const [safe_check, setSafe_check] = useState(false);
// //   const [public_toilet, setPublic_toilet] = useState(false);
// //   const [name, setName] = useState("");
// //   const [pw, setPw] = useState("");
// //   const [context, setContext] = useState("");
// //   const [risk_data, setRisk] = useState([]);

// //   const saveBtnClick = (e) => {
// //     console.log(e);
// //     e.preventDefault();
// //     const _inputData = {
// //         camera: camera,
// //         safe_check: safe_check,
// //         public_toilet: public_toilet,
// //         name: name,
// //         pw: pw,
// //         context: context,
// //         risk_data: risk_data
// //     }
// //     onSave(_inputData);
// //     resetForm();
// //   }

// //모달 내 입력 폼 관련 변수 정의
// const classes = useStyles();
// const [state, setState] = React.useState({
//   name:"",
//   pw:"",
//   context:"",
//   camera: false,
//   safe: false,
//   public_toilet: false,
// });
// const { camera, safe, public_toilet } = state;

// const handleChange = (e) => {
//   setState({ ...state, 
//     [e.target.name]: e.target.checked,
//     [e.target.name] : e.target.value, });
// };

// //   //모달 내 입력 폼 관련 변수 정의
// //   const classes = useStyles();
// //   // const [state, setState] = React.useState({
// //   //   camera: false,
// //   //   safe_check: false,
// //   //   public_toilet: false
// //   // });

// //   //insert
// //   // const handleClick = (e)=>{
// //   //   this.setName({
// //   //     [e.target.name] : e.target.value,
// //   //   });
// //   //   this.setPw({
// //   //     [e.target.name] : e.target.value,
// //   //   });
// //   //   this.setContext({
// //   //     [e.target.name] : e.target.value,
// //   //   });
// //   // }

// //   // const submitId = ()=>{
// //   //   const post ={
// //   //     camera : this.state.camera,
// //   //     safe_check : this.state.safe_check,
// //   //     public_toilet : this.state.public_toilet,
// //   //     name : this.state.name,
// //   //     pw : this.state.pw,
// //   //     context : this.state.context
// //   //   };
  
// //   function callRisk(){
// //     fetch("http://localhost:3001/risk",{
// //         method:"get",
// //         headers : {
// //           "content-type" : "application/json",
// //         },
// //         body : JSON.stringify(),
// //       })
// //       .then((res)=>res.json())
// //       .then((json)=>{
// //         console.log(json);
// //         // position = json;
// //       });
// //   }


// //   // const handleChange = (e) => {
// //   //   this.setCamera({
// //   //     [e.target.name] : e.target.checked,
// //   //   });
// //   //   this.setSafe_check({
// //   //     [e.target.name] : e.target.checked,
// //   //   });
// //   //   this.setPublic_toilet({
// //   //     [e.target.name] : e.target.checked,
// //   //   });
// //   //   // setState({ ...state, [e.target.name]: e.target.checked });
// //   // };

// //   return (
// //     // 모달이 열릴때 openModal 클래스가 생성된다.
// //     <div className={open ? "openModal modal" : "modal"}>
// //       {open ? (
// //         <section>
// //           <header>
// //             {header}
// //             <button className="close" onClick={close}>
// //               {" "}
// //               &times;{" "}
// //             </button>
// //           </header>
// //           <main>
// //             {props.children} {/* Main.js에 연결 */}
// //             <form className={classes.root}>
// //               <FormControl>
// //                 <span>
// //                   <TextField id="name" name="name" value={name} label="이름" placeholder="김수정" onChange={({ target: { value } }) => setName(value)} />{" "}
// //                   <TextField
// //                     // 비밀번호
// //                     id="pw"
// //                     name="pw"
// //                     value={pw}
// //                     label="비밀번호"
// //                     type="password"
// //                     onChange={({ target: { value } }) => setPw(value)}
// //                   />
// //                 </span>
// //                 <br />
// //                 <FormHelperText>
// //                   이용해 본 경험을 바탕으로 선택해주세요.
// //                 </FormHelperText>
// //                 <FormGroup>
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={camera}
// //                         onChange={({ target: { checked } }) => setCamera(checked)}
// //                         name="camera"
// //                         value={camera}
// //                       />
// //                     }
// //                     label="몰래카메라가 있었나요?"
// //                   />
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={safe_check}
// //                         onChange={({ target: { checked } }) => setSafe_check(checked)}
// //                         name="safe_check"
// //                         value={safe_check}
// //                       />
// //                     }
// //                     label="안심화장실 스티커가 붙어 있었나요?"
// //                   />
// //                   <FormControlLabel
// //                     control={
// //                       <Checkbox
// //                         checked={public_toilet}
// //                         onChange={({ target: { checked } }) => setPublic_toilet(checked)}
// //                         name="public_toilet"
// //                         value={public_toilet}
// //                       />
// //                     }
// //                     label="공용화장실이었나요?"
// //                   />
// //                 </FormGroup>
// //                 <TextField
// //                   id="context"
// //                   name="context"
// //                   value={context}
// //                   label="후기"
// //                   placeholder="짧은 이용 후기를 한 줄로 작성해주세요!"
// //                   fullWidth
// //                   margin="normal"
// //                   onChange={({ target: { value } }) => setContext(value)}
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                 />
// //               </FormControl>
// //             </form>
// //           </main>
// //           <footer>
// //             <button className="send" onClick={callLisk()} type="submit">
// //               {" "}
// //               등록{" "}
// //             </button>{" "}
// //             {/* close버튼은 지우기 위에 X버튼 있으니까 */}
// //             {/* <button className="close" onClick={close}>
// //               {" "}
// //               close{" "}
// //             </button> */}
// //           </footer>
// //         </section>
// //       ) : null}
// //     </div>
// //   );
// // };

// // export default Modal;