/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

 const fs = require('fs');
 const path = require('path');
  
 const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
     highWaterMark: 15
 });
  
 readableStream.on('readable', () => {
     try {
        //  process.stdout.write(`[${readableStream.read()}]`);
         writableStream.write(readableStream.read()+"\n");
     } catch(error) {
         // catch the error when the chunk cannot be read.
     }
 });
  
 readableStream.on('end', () => {
     console.log('Done read');
 });

 const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));