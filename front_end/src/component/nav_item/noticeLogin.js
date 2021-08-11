import React, { useState} from "react";
import "../../css/noticeLogin.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import data from "./admin.json"

// let admin = data.admin;
// let email, pw;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "15px",
    marginRight: "15px",
  },
  button: {
    color: "#81bef7",
  },
}));

const Modal = (props) => {
//   // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  //모달 내 입력 폼 관련 변수 정의

  // const [email, setEmail] = React.useState('Composed TextField');
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const classes = useStyles();
  // const [email, setEmail] = useState([])
  // const [pw, setPw] = useState([])
  

  // function login(email, pw){
  //     for(var i = 0; i < admin.length; i++){
  //       if(email === admin[i].email && pw === admin[i].password){
  //         console.log("로그인 성공")
  //         window.confirm("로그인 정보가 일치합니다.")
  //       }       
  //     }
  //     console.log(email)
      // window.confirm(email)
 
    
  //  }


//       window.confirm(e.target.email)
      

  return (
      
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>
            {props.children} {/* Main.js에 연결 */}
            <form className={classes.root}>
              <FormControl>
                <span>
                <FormHelperText>
                  관리자만 공지사항을 쓸 수 있습니다. 관리자 로그인 팝업창입니다. 
                </FormHelperText>
                  <TextField 이메일 id="email"  label="이메일" />{" "} 
                  <TextField 비밀번호 id="pw"  label="비밀번호" type="password"/>
                </span>               
              </FormControl>
            </form>
          </main>
          <footer>
            <button className="send" > 
             {/* onClick={login(email,pw)} */}
              {" "}
              로그인{" "}
            </button>{" "}
            
          </footer>
          
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
