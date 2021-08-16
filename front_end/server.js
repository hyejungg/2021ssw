const express = require("express"); 
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
// const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "123456", //mysql의 password
    database : "clean_db", //사용할 데이터베이스
});
connection.connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//rep는 앞에서 보낸 객체를 받아 body가 앞에서 보낸 데이터
//res는 express에서 데이터를 보낼때에 사용
app.get('/', (req, res) =>{ 
    res.send('는 코딩 중!')
})


app.post("/idplz", (req,res)=>{
    const test = req.body.test;
    // console.log(req.body);
    connection.query("INSERT INTO test (name) value (?)",[test],
    // connection.query("select * from test",
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
});

app.post("/callbody", (req,res)=>{
    connection.query("SELECT * FROM test",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            console.log(rows[0]);
            res.send(rows[0]);
        }
    })
})

// app.post("/data", (req, res) => {
//     connection.query("SELECT * FROM test", function (err, rows, fields) {
//       if (err) {
//         console.log("데이터 가져오기 실패");
//       } else {
//         console.log("데이터 가져오기 성공");
//         console.log(rows[0]);
//         res.send(rows[0]);
//       }
//     });
//   });

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})
 