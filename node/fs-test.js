'use strict';
var fs=require('fs');
fs.readFile('./text','utf-8',function(error,data){

    if(error){
        console.log('error:'+error);
    }else{
        console.log('data:'+data);
    }
});


fs.stat('./text',function(error,stat){
    if(error){
        console.log('error:'+error);
    }else{
        console.log(`is File:${stat.isFile()}`);
        console.log(`is isDirectory:${stat.isDirectory()}`);
        if(stat.isFile()){
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});


// 打开一个流:
var rs = fs.createReadStream('./text', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

var rsFile = fs.createReadStream('./text');
var wsFile = fs.createWriteStream('copied');

rsFile.pipe(wsFile);