const fs = require('fs');
const path = __dirname + '/file.json'

// Synchronous
const content = fs.readFileSync(path, 'utf-8');
console.log(content);

// Asynchronous
fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content);
    console.log(`${config.db.host}: ${config.db.port}`);
});

const config = require('./file.json');
console.log(config.db);

// Reading folder
fs.readdir(__dirname, (err, files) => {
    console.log('Folder content:');
    console.log(files);
});