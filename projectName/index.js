//使用express框架
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
//请求中间件
var http = require('http').Server(app);
var io = require('socket.io')(http);
// eslint-disable-next-line no-undef
const beginnerschema = require('./models/beginnerSchema')
const fs = require('fs')
//试用中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(require('cors')())


const db = require('./db').mongoURL
const router = require('./API/router')

app.use('/api',router)


mongoose.connect(db,{ useNewUrlParser: true ,useFindAndModify:false})
    .then(()=>{
    console.log('数据库连接成功')})
    .catch(err=>{
    console.log('数据库连接失败')})
//引入beginnerapi组件
const beginner = require('./API/beginnerApi')
app.use('/api',beginner)

//mongoose.set('useFindAndModifu',false)

const Blog = mongoose.model('Blog', new mongoose.Schema({
    title:String,
    name:String
}))


app.use(express.static('ss'))

app.post('/blog',async(req,res)=>{
    const dataa = await Blog.create(req.body)
    res.send(dataa) 

})

app.use(express.static('./dist'))



app.get('/blog',async(req,res)=>{
    const blog = await Blog.find()
    console.log('已经请求接口')
    res.json(blog)
})
var ms = {
    name:'king',
    adda:'我的世界',

}



io.on('connection',function(socket) {

const pidusage = require('pidusage')
setInterval(function () {
    pidusage(process.pid, function (err, stats) {
        

      return stats
     
    })
    
  }, 1000)


// setInterval(()=>{
 
 
// },2000)



   
    socket.emit('chart',{r:'tii'})
    //接受msg数据的接口
    socket.on('msg',m=>{
        console.log(m)
        //再将数据发回去
        
        // const ms = beginnerschema.find()
        fs.readdir('/',(err,files)=>{
            if(err) throw err;
            //console.log(files)
            socket.emit('mmg',files)
        })
        console.log(ms)
        socket.emit('mmg',ms)
    })
    // 接收聊天数据，并打印
    socket.on('chat',chats=>{
        console.log('连接成功')
        console.log(chats)
    })
    //接收数据
    socket.on('login', function (j) {                
        console.log(j.username);
        // 发送数据
        socket.emit('relogin', {
          msg: `你好${j.username}传递成功`,
          code: 200
        });  
    });
  });





// app.listen(3000,()=>{
//     const data = new Date()
//     console.log('当前日期为'+' '+ data.toLocaleDateString())
//     console.log('国际时间是'+ data )
// })
const port = 3000
http.listen(port, function(){
    console.log('listening on '+port);
  });


//文件列表的读取

