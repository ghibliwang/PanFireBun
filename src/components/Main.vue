<template>
  <div >
    <h1>Socket.io-client</h1>
     <div>
        <p>聊天室</p>
        <p>聊天内容</p>
        <div>
            <el-input style="width:300px;" v-model="conterner"></el-input>
        </div>
        <el-button style="width:300px" @click="submitit">点击发送</el-button>
        

    </div>
    
    <el-row>
      <el-col :span="12">
        <el-input v-model="tree.name" type="text" placeholder="请输入内容"  id='text' ></el-input>
        <el-button @click="mag">点击提交</el-button>
      </el-col>
     
    </el-row>

    <div>
          <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </div>

    <div>
      <router-view></router-view>
    </div>
    <p v-for="item in time">{{item}}</p>
    
  </div>
</template>

<style scoped >




 h1 { 
  margin: 0 auto;
  box-shadow: 0 2px 2px rgba(31, 32, 31, 0.4);
  padding: 10px;
  }



</style> 




<script>
export default {
  data(){
    return {
      tree:{name:''},
     
      value:'',
      time:[],
      conterner:[]
  
    }
    
  },
  methods:{
    submitit(){
                const data = this.conterner
                this.$socket.emit('chat',data)
    },

    mag(){
      

       const dattt = document.getElementById('text').value
       this.tree.name = dattt
       console.log('接口成功')
       this.$socket.emit('msg',dattt)
       this.sockets.subscribe('mmg',datta=>{
        // console.log(datta)
         this.time= datta
       })
    }
    

  
  },
   
  
  created() {
  //发送信息给服务端
  this.$socket.emit('login',{
  username: 'username',
  password: 'password',
  姓名: 'king'
});
//发送给服务端msg



//接收服务端的信息
this.sockets.subscribe('relogin', (data) => {
  console.log(data)
})
},

}
</script>

