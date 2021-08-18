import React, { Component, useState, useEffect } from "react";
import Footer from "../footer";
import NavSideBar from "../nav";
import "../../css/Main.css";
import "../../css/Notice.css";
import { DataGrid } from "@material-ui/data-grid";
import Button from '@material-ui/core/Button';
import Modal from "./noticeLogin";

const columns = [
  { field: "id", headerName: "No", width: 100 },
  {
    field: "title",
    headerName: "제목",
    width: 1000,
    editable: true,
  },
  {
    field: "admin",
    headerName: "작성자",
    width: 160,
    editable: true,
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.getValue(params.id, "firstName") || ""} ${
  //         params.getValue(params.id, "lastName") || ""
  //       }`,
  //   },
];

const rows = [
  { id: 1, title: "안심 화장실 지도가 오픈했어요!", admin: "서현" },
  { id: 2, title: "안심 화장실 지도 이용가이드 안내", admin: "혜정" },
  { id: 3, title: "마커 기능 사용법", admin: "지연" },
  { id: 4, title: "다녀온 장소의 생생한 후기를 남겨보세요", admin: "서현" },
];


export class Notice extends Component {
 
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
    return (
      <div className="main">
        <div className="nav">
          <NavSideBar />
        </div>
        <div className="header">
          <div id="title">
            <h1>공지사항</h1>
          </div>
        </div>
        <div className="context">
          {/* 공지사항 표가 보여질 자리 */}
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              className="table"
              rows={rows}
              columns={columns}
              pageSize={7}
              //선택 가능하도록 할거면 밑에 옵션 풀어주면 됨
              //   checkboxSelection
              //   disableSelectionOnClick
            />
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={this.openModal}>
          작성하기
        </Button>
        <Modal
            open={this.state.modalOpen}
            close={this.closeModal}
            title="팝업창">
            <main> {this.props.children} </main>
          </Modal>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Notice;
