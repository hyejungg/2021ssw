import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./container/Main";
import notice from "./component/nav_item/notice";
import admin from "./component/nav_item/admin";

function App() {
  return (
    <div className="App">
      {/* 라우터 추가 */}
      <Route exact path="/" component={Main} />
      <Route path="/notice" component={notice} />
      <Route path="/admin" component={admin} />
    </div>
  );
}

export default App;
