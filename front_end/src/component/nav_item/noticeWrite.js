import React from "react";
import "../../css/noticeWrite.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


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
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
  
    //모달 내 입력 폼 관련 변수 정의
    const classes = useStyles();
    const [state, setState] = React.useState({
      camera: false,
      safe: false,
      public_toilet: false,
    });
    const { camera, safe, public_toilet } = state;
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
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
                <FormControl fullWidth>
                    <TextField 제목 id="title" label="제목" />{" "}
                    <br />
                    <TextareaAutosize   
                        aria-label="내용" 
                        minRows={10} 
                        placeholder="공지사항을 작성해주세요" 
                    />
                </FormControl>
              </form>
            </main>
            <footer>
              <button className="send" onClick={close}>
                {" "}
                등록{" "}
              </button>{" "}
            </footer>
          </section>
        ) : null}
      </div>
    );
  };
  
  export default Modal;
