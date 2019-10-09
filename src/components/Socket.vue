<template>
    <div>
       <div class="header">文件管理系统</div>
       <div class="conterin">
           <div id="iu">
          <el-containr>
               <div class="nv">侧边栏
                <keep-aliv>
                    <router-view name="socketvue"></router-view>
                </keep-aliv>
            </div>
            <div class="main">main
                <keep-alive>
                     <router-view name="socketlna"></router-view>
                </keep-alive>
             </div>
          </el-containr>
       </div>
       </div>
       
     
       


        
        

    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },

    }
</script>

<style >
.conterin{
    width: 1080px;
    margin: 0 auto;
}
.header{
    /* display: inline; */
    height: 2.5rem;
    background-color: #e6e6e6;
    text-align: center;
    position: sticky;
    top: 0;
    margin: auto;
    line-height: 2.5rem;
    clear: both; 
    
    

    
    /* line-height: 2.5rem; */

}
.nv{
    height: 100vh;
    width: 20%;
    max-width: 25%;
    background-color: rgb(180, 173, 173);
    float: left; 
    /* position: sticky; 
    position: fixed; */
    
}
.main{
    height: 100Vh;
    width:80%;
    background-color: azure;
    float: left;
    /* clear: both; */
   
   
}
#iu{
    margin: 0 auto;
}

</style>