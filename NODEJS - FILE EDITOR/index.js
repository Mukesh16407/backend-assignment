const fs = require('fs');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

if (operation === 'read') {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  }else if (operation === 'append') {
    fs.appendFile(content,file, 'utf-8', err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Successfully appended ${content} to ${file}`);
    });
  }else if (operation === 'delete') {
    fs.unlink(file, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Successfully deleted ${file}`);
    });
  }else if (operation === 'create') {
    fs.writeFile(file, '', 'utf-8', err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Successfully created ${file}`);
    });
  }else if (operation === 'rename') {
    const newFile = process.argv[4];
    fs.rename(file, newFile, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Successfully renamed ${file} to ${newFile}`);
    });
  } else if (operation === 'list') {
    fs.readdir(file, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(files);
    });
  } else {
    console.error(`Invalid operation: ${operation}`);
  }