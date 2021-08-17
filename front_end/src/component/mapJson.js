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
  

//   useEffect(() => {
//     const container = document.getElementById("myMap");
//     const options = {
//       center: new kakao.maps.LatLng(37.591673, 127.021269),
//       level: 3,
//     };

//     //지도 생성
//     const map = new kakao.maps.Map(container, options);
  
//     //데이터 가져와 마커 생성
//     let positions = data.positions
//     console.log(positions)
//     setState(positions)
//     var latlng = [];
//     for (var i = 0, len = positions.length; i < len; i++) {
//       addMarker(positions[i]);
//       console.log(positions[i])
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