const fileSystem = require('fs');

const readStream = fileSystem.createReadStream('./docs/streams1.txt', { encoding: 'utf8' })
const writeStream = fileSystem.createWriteStream('./docs/streams2.txt')

// readStream.on('data', (chunk) => {
//     console.log('----- CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\n----- CHUNK -----\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream)