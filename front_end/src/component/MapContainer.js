import React, { useState, useEffect } from "react";
import imgRed from "./info_item/redbutton.png";
import imgYel from "./info_item/yellowbutton.png";
import imgBlue from "./info_item/bluebutton.png";


import axios from "axios";

const { kakao } = window;

//마커 정보 꾸미는 스타일
const style = {
  loc: {
    // color:"#00f",
    marginTop: "20px",
    marginBottom: "10px",
    marginLeft: "20px",
    textAlign: "left",
  },
  addr: {
    color: "#000",
    marginBottom: "10px",
    marginLeft: "20px",
    textAlign: "left",
  },
  cont: {
    verticalAlign: "false",
  },
  resultColor: {
    marginLeft: "20px",
    float: "left",
  },
  resultText: {
    float: "left",
    marginTop: "5px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
};

const MapContainer = () => {
  //마커 정보 출력할 state선언
  const [name, setName] = useState([]);
  const [add, setAdd] = useState([]);
  const [result, setResult] = useState([]);
  const [toilet_data, setToilet] = useState([]);
  const [url, setUrl] = useState(`http://localhost:3001/toilet_info`);

  //데이터 호출
  useEffect(() => {
    /**
     * 비동기 통신 코드
     */
    const callDataApi = async () => {
      try {
        const resData = await axios.get(url);
        setToilet(resData.data);
      } catch (e) {
        console.log(e);
      }
    };
    callDataApi();
  }, []); //2번째 인자 []는 무한호출 방지

  useEffect(() => {
    console.log(toilet_data);
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.591673, 127.021269),
      level: 3,
    };

    //지도 생성
    const map = new kakao.maps.Map(container, options);

    //데이터 가져와 마커 생성
    if (toilet_data.length > 0) {
      for (var i = 0; i < toilet_data.length; i++) {
        addMarker(toilet_data[i]);
      }
    } else {
      console.log(
        "마커를 표시할 수 없어요! 데이터를 못가져왔거든요!ㅋ ㅋ ㅋ ㅋ ㅋ "
      );
    }

    // 마커를 지도 위에 표시
    function addMarker(position) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(position.latitude, position.longtitude),
      });

      //클릭시 마커 정보를 state에 전달
      kakao.maps.event.addListener(marker, "click", function () {
        setName(position.loc_name);
        setAdd(position.address);
        setResult(position.result);
      });
    }
  }, [toilet_data]);
  
  //위험도에 따른 색상
  function color(result) {
    if (result === 3) return imgBlue;
    else if (result === 2) return imgYel;
    else if (result === 1) return imgRed;
    else return;
  }

  //위험도 표시
  function resultText(result) {
    if (result === 3) return "상";
    else if (result === 2) return "중";
    else if (result === 1) return "하";
    else return;
  }

  return (
    <div>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "31em",
        }}
      ></div>
      <div
        style={{
          width: "70%",
          height: "110px",
          float: "left",
        }}
      >
        <h2 style={style.loc}>{name}</h2>
        <h4 style={style.addr}>{add}</h4>
        <img src={color(result)} style={style.resultColor} />
        <h4 style={style.resultText}>{resultText(result)}</h4>
      </div>
    </div>
  );
};

export default MapContainer;
