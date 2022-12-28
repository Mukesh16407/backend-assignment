const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server =http.createServer((req,res)=>{

    // get the current directory
    const directory = path.join(__dirname);

    // get the requested file or directory
  let filePath = path.join(directory, req.url);

  // check if the requested path is a directory
  let isDirectory = fs.statSync(filePath).isDirectory();

  if (isDirectory) {
    // if it's a directory, get a list of its contents
    fs.readdir(filePath, (err, files) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end(`Error getting the list of files in ${req.url}`);
          return;
        }
        // render the list of files as an HTML page
        res.setHeader("content-type","text/html")
        res.write('<h1>Directory Listing</h1>');
        res.write('<ul>');
        files.forEach(file => {
        res.write(`<li><a href="${req.url}/${file}">${file}</a></li>`);
      });
      res.write('</ul>');
      res.end();
    })
  }else{
     // if it's a file, read and send it
     fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end(`Error reading file ${req.url}`);
          return;
        }
        res.end(data);
      });
  }
})

server.listen(port,()=>{
    console.log(`running on port ${port}`)
})