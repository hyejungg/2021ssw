import React, { Component } from "react";
import Footer from "../component/footer";
import NavSideBar from "../component/nav";
import MapContainer from "../component/MapContainer";
import "../css/Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav">
          <NavSideBar />
        </div>
        <div className="header">
          <div id="title">
            <h1>안심 화장실 지도</h1>
          </div>
        </div>
        <div className="context">
          {/* 지도가 올라갈 자리 */}
          <MapContainer />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
