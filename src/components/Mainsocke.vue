<template>
    <div>
        <p>聊天室</p>
        <p>聊天内容</p>
        <div>
            <el-input style="width:300px;" v-model="conterner"></el-input>
        </div>
        <el-button style="width:300px" @click="submitit">点击发送</el-button>
        
        <div id="myChart" style="width: 600px;height:400px;"></div>

    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                conterner:[],
                option:{
                     title: {text: 'ECharts 测试项目'},
                     tooltip: {},
                     legend: {data:['销量']},
                     xAxis: { data: ["测试","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},
                     yAxis: {},
                     series: [{name: '销量',type: 'bar', data: [5, 20, 63, 10, 10, 20]}]}
            }
        },
        mounted(){
            this.drawLine()
        },
        methods:{
                drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                 myChart.setOption(this.option);
                },
            submitit(){
                // this.socket.subscribe('chart',data=>{
                //     console.log(data)
                // })
                const data = this.conterner
                this.$socket.emit('chat',data)

                

                    } },
            created() {
                console.log('ok1')
                this.sockets.subscribe('chart',data=>{
                    console.log('ok2')
                    console.log(data)
                }),
                console.log('ok3')
            // let echarts = require('echarts')
            
            // var myChart = echarts.init(document.getElementById('main'));
            // myChart.setOption(this.option);
            // console.log('成功使用echarts')

        },

        
    }
</script>

<style  scoped>

</style>