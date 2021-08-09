import React, { Component } from "react";
import Footer from "../footer";
import NavSideBar from "../nav";
import "../../css/Main.css";
import "../../css/Notice.css";
import { DataGrid } from "@material-ui/data-grid";

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
  { id: 1, title: "Snow", admin: "Jon" },
  { id: 2, title: "Lannister", admin: "Cersei" },
  { id: 3, title: "Lannister", admin: "Jaime" },
  { id: 4, title: "Stark", admin: "Arya" },
  { id: 5, title: "Targaryen", admin: "Daenerys" },
  { id: 6, title: "Melisandre", admin: null },
  { id: 7, title: "Clifford", admin: "Ferrara" },
  { id: 8, title: "Frances", admin: "Rossini" },
  { id: 9, title: "Frances", admin: "Rossini" },
  { id: 10, title: "Roxie", admin: "Harvey" },
  { id: 11, title: "Roxie", admin: "Harvey" },
  { id: 12, title: "Roxie", admin: "Harvey" },
  { id: 13, title: "Roxie", admin: "Harvey" },
  { id: 14, title: "Roxie", admin: "Harvey" },
  { id: 15, title: "Roxie", admin: "Harvey" },
  { id: 16, title: "Roxie", admin: "Harvey" },
];

export class Notice extends Component {
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
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Notice;
