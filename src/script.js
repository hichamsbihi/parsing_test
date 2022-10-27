var fs = require('fs');
var Lazy = require('lazy.js/experimental/lazy.json.js');


const args = process.argv;
const fileName = args[2];
const required_id =  args[3];

// read by 1 mb
const readableStream = fs.createReadStream(fileName, 'utf8', { highWaterMark: 1024 * 1024 }); // mega par mega

    readableStream.on('error', function (error) {
        console.log(error: ${error.message});
    })
    let is_found = false;

    readableStream.on('data', (chunk) => {
    try{
        if(is_found) return;
        var sequence = Lazy.parseJSON(chunk);
        sequence.each(function(data) {
            if(data.id.toString() === required_id){
                console.log("name");
                console.log(data.name);
                is_found = true;
            }
        });

    }
        catch(err){
            console.log("err");
            console.log(err.message);

            return;
        }
    })