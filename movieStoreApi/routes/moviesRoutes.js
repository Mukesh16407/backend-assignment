const express = require('express');
const router = express.Router();

const MovieModel = require('../model/movieModel')



router.post('/addnewmovie' , async(req , res)=>{

   const {title,imageurl,rating,description} =req.body;
 
   if(!title || !imageurl || !rating || !description ){
    return res.send({
      success: false,
      message: "Please fill all Data",
    });
  }

  try{
    const movie = await MovieModel.findOne({ title: title });

    if(movie){
        return res.send({
            success: false,
            message: "Movie already exists",
          });
    }else{
         const newMovie = new MovieModel({
            title,imageurl,rating,description
           });
           await newMovie.save();

           res.send({
            success: true,
            message: "Movie added Successfully",
            data:newMovie
          });

    }
   

  }catch(error){
    res.send({
        success: false,
        message: error.message,
      });
  }
   

})

router.get('/getallmovie',async(req,res)=>{

    try{
        const moviedata = await MovieModel.find();
        
        res.send({
          success:true,
          message: "User details fetched successfully",
          data: moviedata,
        })
    }catch(error){
      res.send({
        success: false,
        message: error.message,
      });
    }
  
  })

  router.get('/getmovie/:id', async(req,res)=>{

    try{
      
       const {id} = req.params;
       const IndividualMovie =await MovieModel.findById({_id:id});
       res.send({
        success:true,
        message: "Get Individual Movie Data",
        data: IndividualMovie,
      })
      
       
    }catch(error){
      res.send({
        success: false,
        message: error.message,
      });
    }
  });

  router.patch('/update/:id', async(req,res)=>{
    try{
      const {id} = req.params;
  
      const updatedMovie =await MovieModel.findByIdAndUpdate(id,req.body,{
        new:true
      });
      res.send({
        success:true,
        message: "Get Updated Data",
        data: updatedMovie
      })
  
    }catch(error){
      res.send({
        success: false,
        message: error.message,
      });
    }
  });
  router.delete('/deletemovie/:id',async(req,res)=>{

    try{
      const {id} = req.params;
      const deleteMovie = await MovieModel.findByIdAndDelete({_id:id})
  
      res.send({
        message: " deleted successfully",
        success: true,
      });
    }catch(error){
      res.send({
        error: error.message,
        success: false,
      });
    }
  })
  
module.exports = router;