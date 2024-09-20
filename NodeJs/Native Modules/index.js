const fs = require('fs');
// create a file
fs.writeFile('message.txt', 'Sample data', (err) => {
    if (err) throw err
    console.log('The file has been saved!')
});

// if no encoding, raw buffer will be returned
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
});