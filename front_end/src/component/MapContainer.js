// import { InfoSharp } from "@material-ui/icons";
import React, { Component, useEffect } from "react";
const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.591673, 127.021269),
      level: 3,
    };

    //지도 생성
    const map = new kakao.maps.Map(container, options);
    // const ps = new kakao.maps.services.Places(map);
  

    // 마커 정보
    var positions = [
      {
        loc_name: "성신여대입구역",
        address:"성북구 동소문로 지하 102",
        latlng: new kakao.maps.LatLng(37.592915, 127.016576), //무조건 소수점 6자리 이상 넘어가지 않기 넘으면 안나옴
        result: "하"
      },
      {
        loc_name: "커피나무",
        address:"서울특별시 성북구 동선동 보문로30길 79",
        latlng: new kakao.maps.LatLng(37.591063, 127.019717), 
        result: "하"
      },
      {
        loc_name: "카페 온 더 플랜",
        address:"서울특별시 성북구 동선동 동소문로22길 39-4",
        latlng: new kakao.maps.LatLng(37.591422, 127.018468),
        result: "중"
      },
    ]
    // selectedMarker = null; 

    // var resultDiv;

    for (var i = 0, len = positions.length; i < len; i++) {
      addMarker(positions[i]);
      
    }
  

    // 마커를 생성하고 지도 위에 표시하고, 마커에 click 이벤트를 등록하는 함수입니다
    function addMarker(position) {  
      var marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng
      });

      

      kakao.maps.event.addListener(marker, 'click', function() {
        console.log(position.loc_name);
        console.log(position.address);
        console.log(position.result);

        // var message = '클릭한 위치는 ' + position.loc_name + ' 입니다 ';
        // resultDiv = document.getElementById('result'); 
        // console.log(resultDiv);
        // resultDiv.innerHTML = message;
      });

    }




  }, []);

 

  

  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "31em",
      }}>
    </div>
  );
};

export default MapContainer;


