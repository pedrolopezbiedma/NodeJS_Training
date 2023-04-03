
setTimeout(() => {
    console.log('Yo paso de esto ya');
    clearInterval(intervalId);
}, 3000);


const intervalId = setInterval(() => {
    console.log('Sigo aguantando')
}, 1000);

console.log('Directory name is', __dirname);
console.log('File name is', __filename);
