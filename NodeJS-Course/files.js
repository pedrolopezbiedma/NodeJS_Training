// Imports
const fileSystem = require('fs');

// Reading files.
// fileSystem.readFile('./docs/blog1.txt', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(data.toString());
//     }
// })

// console.log('Hey, Im reading the fle');

// Writing files.
// fileSystem.writeFile('./docs/blog1.txt', 'Hello world!', (error, data) => {
//     if (error) {
//         console.log('error', error)
//     }
//     else {
//         console.log(data);
//     }
// })

// Will create a new file
// fileSystem.writeFile('./docs/blog2.txt', 'Hello world!', (error, data) => {
//     if (error) {
//         console.log('error', error)
//     }
//     else {
//         console.log(data);
//     }
// })

// Directories.
// If the directory exists, if deletes it, if not, it creates it.
// if (fileSystem.existsSync('./assets')) {
//     fileSystem.rmdir('./assets', (error, data) => {
//         if (error) {
//             console.log(error)
//         }
//         console.log('Directory removed')
//     })
// } else {
//     fileSystem.mkdir('./assets', (error, data) => {
//         if (error) {
//             console.log(error)
//         }
//         console.log('Directory created')
//     })
// }

// Deleting files.
if (fileSystem.existsSync('./docs/deleteme.txt')) {
    fileSystem.unlink('./docs/deleteme.txt', (error, data) => {
        if (error) {
            console.log(error)
        }
        console.log('File removed')
    })
}