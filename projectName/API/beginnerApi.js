// 学习笔记
// 首先对接口的试用无不过增删该查
// 第一步引入express
// 第二部使用router
// 第三部 使用mongoose的模型
// 第四部进行接口的编写

const express = require('express')
const router = express.Router()
//引入mongonse的模型
const beginnerschema = require('./../models/beginnerSchema')


//获取接口全部数据
router.get('/beginner', async (req,res)=>{

    const dat = await beginnerschema.find()
    res.send(dat)
})
//查询单个数据
router.get('/beginner/:id' , async (req,res)=>{
     const data = await beginnerschema.findById(req.params.id)
     res.send(data)
})

//增加数据并返回所有数据，后期的后应该是限制返回数据的亮，以后在想吧哈
router.post('/beginner', async (req,res)=>{

    const dat =  beginnerschema.create(req.body)
    const datA = await beginnerschema.find()
    res.send(datA)
})

//修改单个数据接口并返回当前的数据
router.put('/beginner/:id',async(req,res)=>{
    
    const data = await beginnerschema.findByIdAndUpdate(req.params.id,req.body)
    await data.save()
    const newdat= await beginnerschema.findById(req.params.id)
    res.send(newdat)
})
//删除单个数据接口
router.delete('/beginner/:id',async (req,res)=>{
    await beginnerschema.findByIdAndDelete(req.params.id)
    const data = await beginnerschema.find()
    res.send(data)
})




//将路由的数据进行导出，先是将schema的数据进行引入
//然后进行数据的导出
//关于导出数据这个还需要进行系统化的学习。go

module.exports =  router


// 包含：
//     get
//     post
//     put
//     delete

// get：查询一个接口
//      查询多个接口
//      还有限制接口的返回数据
//      这个主要是为了分页

// post：增加数据接口


// put：主要是修改数据

// delet：进行数据的删除
