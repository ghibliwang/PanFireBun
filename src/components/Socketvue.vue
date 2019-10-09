<template>
    <div>
    
        <!-- <h1>socketvue</h1> -->
        <ul>
        <li>样式一</li>
        <li>样式二</li>
        <li>样式三</li>
        <li>样式四</li>
        <li>样式五</li>
        </ul>
    </div>
</template>

<script>
    export default {

        created(){
           
        },
        mounted:function(){
             console.log('ok')
        },
        created(){

        }
        
    }
</script>

<style  scoped>
ul li{
    list-style-type: none;
    /* display: inline; */
    height: 2rem;
    left: 2rem;
    background-color: antiquewhite;
    /* text-align: center; */
    /* padding: auto; */

    /* width: 20px; */


    line-height: 2rem;


}
ul li:hover{
    background-color: aquamarine;
}
h1{
    background-color: rgb(215, 224, 220);
    transition: all 400ms;
    width: 200px
}
h1:hover{
    background-color: rgb(204, 211, 211);
    color: rgb(107, 102, 102);
}


</style>