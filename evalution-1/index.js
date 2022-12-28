const http =require('http');
const fs = require('fs');
const dns = require('node:dns');
const cowsay = require('cowsay');
let param = process.argv[2]
const array =["Aman", "Albert", "Varun", "Rajat", "Nrupul"];

const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.setHeader("content-type","text/html")
        res.end('<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>')
    }else if(req.url ==='/writeinfile'){
        fs.writeFile('./employee.txt','Employee names are as follows',(error)=>{
            if(error){
                res.end('Some Error in this file');
                console.log(error)
            }else{
                res.setHeader("content-type","text/html")
                res.end('<h1>Data has been written in the file</h1>')
            }
        })
    }else if(req.url ==='/enternames'){
            array.map((item)=>{
                fs.appendFile('./employee.txt',`\n${item}`,(error)=>{
                   if(error){
                    res.end('Some Error while adding the name');
                      console.log(error)
                   }else{
                    res.setHeader("content-type","text/html")
                    res.end('<h1>All the names added in the file</h1>')
                   }
                })
            })
    }else if(req.url ==='/alldetails'){
        fs.readFile('./employee.txt','utf-8',(error,data)=>{
            if(error){
                res.end('Some Error while reading the file');
               console.log(error) 
            }else{
                res.end(cowsay.say({
                    text:data
                }))
            }
        })
    }else if(req.url ==='/address'){
        dns.lookup(param,(err,address,family)=>{
            res.write("the IP Address is\n")
            res.end(address)
        })
    }else if(req.url ==='/delete'){
        fs.unlink('./employee.txt',(err)=>{
            if(err){
                res.end('Some Error while deleting the file');
               console.log(err)   
            }else{
                res.setHeader("content-type","text/html")
                res.end('<h1>file name is deleted</h1>')  
            }
        })
    }else{
        res.setHeader("content-type","text/html")
        res.end('<h1>Invalid</h1>')  
    }
})

server.listen(2345,()=>{
    console.log("running on port 2345")
})