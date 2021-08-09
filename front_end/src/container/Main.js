import React, { Component } from "react";
import Footer from "../component/footer";
import NavSideBar from "../component/nav";
import MapContainer from "../component/MapContainer";
import Info from "../component/info";
import Modal from "../component/Modal";
import "../css/Main.css";

export class Main extends Component {
  state = {
    modalOpen: false,
  };
  openModal = () => {
    this.setState({ modalOpen: true });
    // console.log("ddd");
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    const bstyle = {
      float: "left",
      height: "50px",
      width: "400px",
      border: "1px solid #81bef7",
      backgroundColor: "#81bef7",
      left: "73%",
      position: "absolute",
      marginTop: "60px",
    };
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
        <div
          style={{
            width: "70%",
            height: "110px",
          }}
          className="Info"
        >
          {/* 마커 클릭시 정보창 */}
          <button style={bstyle} onClick={this.openModal}>
            <h3>후기&nbsp;작성하기</h3>
          </button>
          <Modal
            open={this.state.modalOpen}
            close={this.closeModal}
            title="팝업창"
          >
            <main> {this.props.children} </main>
          </Modal>
          <Info />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
