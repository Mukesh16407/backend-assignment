const express = require('express');

const Todo = require('../models/todo.model');

const router = express.Router();

//POST METHOD

router.post('/create',async(req,res)=>{

    const todoTask =new Todo({content:req.body.content});
   
    try{
        await todoTask.save();
        res.send({
            success: true,
            message: "Content added Successfully",
            data:todoTask
          });
    }catch(error){
        res.send({
            success: false,
            message: error.message,
          });
    }
})

router.get('/', async(req,res)=>{

  const todos = await Todo.find();

  try{
    res.send({
        success:true,
        message: "Todos details fetched successfully",
        data: todos,
      })

  }catch(error){
    res.send({
        success: false,
        message: error.message,
      });
  }
})

router.patch('/edit/:todoId', async(req,res)=>{
    try{
      const {todoId} = req.params;
  
      const updatedTodos =await Todo.findByIdAndUpdate(todoId,req.body,{
        new:true
      });
      res.send({
        success:true,
        message: "Get Updated Data",
        data: updatedTodos
      })
  
    }catch(error){
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  router.delete('/delete/:todoId',async(req,res)=>{

    try{
      const {todoId} = req.params;
      const deletetodo = await Todo.findByIdAndDelete({_id:todoId})
  
      res.send({
        message: " deleted successfully",
        success: true,
        data:deletetodo
      });
    }catch(error){
      res.send({
        error: error.message,
        success: false,
      });
    }
  })

module.exports = router
