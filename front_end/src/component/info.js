import React, {Component} from "react";
import imgRed from "./info_item/redbutton.png";

class Info extends Component{
    render(){
        const style={
            loc : {
                // color:"#00f",
                marginTop:'20px',
                marginBottom:'10px',
                marginLeft:'20px',
                textAlign : 'left'
            },
            addr : {
                color:"#000",
                marginBottom:'10px',
                marginLeft:'20px',
                textAlign : 'left'
            },
            cont : {
                verticalAlign: "false"
            },
            resultColor : {
                marginLeft:'20px',
                float:"left"
            },
            resultText : {
                float:"left",
                marginTop : "5px",
                marginBottom:'10px',
                marginLeft:'20px'
                
            }
            // button : {
            //     float:"left",
            //     height : "50px",
            //     width: "400px",
            //     border: "1px solid #81bef7",
            //     backgroundColor: "#81bef7",
            //     left:"73%",
            //     position: "absolute"
            // }

            
        }
        
        return(
            <div style={{
                width: "100%",
                height: "110px",
              }}>
                    <h2 style={style.loc}>성신여대입구역&nbsp;지하철</h2>
                    <h4 style={style.addr}>주소</h4>  
                    <img src={imgRed} style={style.resultColor}/>
                    <h4 style={style.resultText}>위험해요</h4>
                    {/* <button style={style.button}><h3>후기&nbsp;작성하기</h3></button>          */}
            </div>
        );
    }
}

export default Info;




