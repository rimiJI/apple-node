const express = require('express')
const app = express()

app.listen(8080,()=>{
    console.log('http://localhost:8080 에서 서버 실행 중')
})

// app.get('/',(요청,응답)=>{
//     응답.send('반가워!')
// })

app.get('/main',(요청,응답)=>{
    응답.send('메인화면 입니다.')
})

app.get('/shop',function(요청,응답){
    응답.send('쇼핑페이지입니다~')
})

//html 유저에게 파일 전송
app.get('/',(요청,응답)=>{
    응답.sendFile(__dirname + '/index.html')
})