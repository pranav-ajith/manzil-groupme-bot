var express = require('express')
var request = require('request');

var app = express()


function sendMessage(){
    request.post(
        "https://api.groupme.com/v3/bots/post",
        { json: {
                      "text"    : "Hello world",
                      "bot_id"  : "f9d955e3b9969ccb0922ca5e82"
                }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }

    );
}

//receive message handler
app.post('/receive', function(req, res) {
    res.json({"hey": "hi"});
})

sendMessage();

//setInterval(sendMessage, 86400000);//send every day 


app.listen(3000)