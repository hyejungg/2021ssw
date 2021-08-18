import React, { Component } from "react";
import Footer from "../footer";
import NavSideBar from "../nav";
import "../../css/Main.css";
import "../../css/Notice.css";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";

const columns = [
  { field: "id", headerName: "no", width: 70 },
  {
    field: "loc",
    headerName: "위치",
    width: 150,
    editable: true,
  },
  {
    field: "camera",
    headerName: "초소형카메라",
    width: 250,
    editable: true,
  },
  {
    field: "safe",
    headerName: "안심 화장실",
    width: 250,
    editable: true,
  },
  {
    field: "public",
    headerName: "남녀공용화장실",
    width: 250,
    editable: true,
  },
  {
    field: "title",
    headerName: "후기",
    width: 450,
    editable: true,
  },
  {
    field: "admin",
    headerName: "작성자",
    width: 130,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    loc: "성신여대",
    camera: "x",
    safe: "o",
    public: "x",
    title: "너무 깨끗해요 주기적으로 검사도 합니다.",
    admin: "jiueon",
  },
  {
    id: 2,
    loc: "밥풀",
    camera: "x",
    safe: "x",
    public: "o",
    title: "청결하지 않아요",
    admin: "ad4408",
  },
  {
    id: 3,
    loc: "구월",
    camera: "x",
    safe: "o",
    public: "x",
    title: "매우 깨끗해요 또 가고싶어요",
    admin: "hy",
  },
  {
    id: 4,
    loc: "설빙",
    camera: "x",
    safe: "o",
    public: "x",
    title: "사용할만 해요",
    admin: "sewn",
  },
  ,
  {
    id: 5,
    loc: "탐앤탐스",
    camera: "x",
    safe: "x",
    public: "x",
    title: "청결하지 않고, 불친절해요.",
    admin: "ad4408",
  },
  {
    id: 6,
    loc: "롯데리아",
    camera: "x",
    safe: "o",
    public: "x",
    title: "종종 이용합니다. 괜찮아요",
    admin: "hy",
  },
  {
    id: 7,
    loc: "역전 할머니 맥주",
    camera: "x",
    safe: "x",
    public: "x",
    title: "화장실 문이 조금 불편해요ㅠ",
    admin: "sewn",
  },
];

export class Admin extends Component {
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
            <h1>후기 관리 페이지</h1>
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
                // checkboxSelection
                // disableSelectionOnClick
            />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Admin;
