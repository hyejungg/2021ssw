import React, { Component } from "react";
import Footer from "../footer";
import NavSideBar from "../nav";
import "../../css/Main.css";

export class Admin extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav">
          <NavSideBar />
        </div>
        <div className="header">
          <div id="title">
            <h1>관리자 페이지</h1>
          </div>
        </div>
        <div className="context">{/* 공지사항 표가 보여질 자리 */}</div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Admin;
