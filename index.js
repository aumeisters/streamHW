const { createReadStream: r } = require('fs'); 
const { createWriteStream: w } = require('fs'); 
const rdStr = r(`./1.txt`, { highWaterMark: 1 });
let buf = '';
rdStr.on('data', d => buf += +d + 1);
rdStr.on('end', () => {
    let res = String(buf);
    const wrStr = w(`./1.txt`);
    wrStr.write(res);
});

