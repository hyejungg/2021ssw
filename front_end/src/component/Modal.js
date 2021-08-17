import React from "react";
import "../css/Modal.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

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
              <FormControl>
                <span>
                  <TextField 이름 id="name" label="이름" placeholder="김수정" />{" "}
                  <TextField
                    비밀번호
                    id="pw"
                    label="비밀번호"
                    type="password"
                  />
                </span>
                <br />
                <FormHelperText>
                  이용해 본 경험을 바탕으로 선택해주세요.
                </FormHelperText>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={camera}
                        onChange={handleChange}
                        name="camera"
                      />
                    }
                    label="몰래카메라가 있었나요?"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={safe}
                        onChange={handleChange}
                        name="safe"
                      />
                    }
                    label="안심화장실 스티커가 붙어 있었나요?"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={public_toilet}
                        onChange={handleChange}
                        name="public_toilet"
                      />
                    }
                    label="공용화장실이었나요?"
                  />
                </FormGroup>
                <TextField
                  id="context"
                  label="후기"
                  placeholder="짧은 이용 후기를 한 줄로 작성해주세요!"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </form>
          </main>
          <footer>
            <button className="send" onClick={close}>
              {" "}
              등록{" "}
            </button>{" "}
            {/* close버튼은 지우기 위에 X버튼 있으니까 */}
            {/* <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;