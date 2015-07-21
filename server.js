var Twitter = require('twitter');
var express = require('express');
var app = express();


var client = new Twitter({
  consumer_key: 'mtEsDDynLBPI0bk0QvOjvn39n',
  consumer_secret: 't5aFQ755S4CVv4c2cUcrP7ZegOmtAW3oxnvOSl7EmXXZfU0KXP',
  access_token_key: '3247461185-ArvrlKE3ZCInVfsgFjp0rWpYBHrNXHLGwPZUhb1',
  access_token_secret: 'Rt4pieKZUv6zsmoUnVLmWQm5pgm0sWnVctf95uyJ0lM52'
});


client.stream('statuses/filter', {track: 'maortoubianibm'},  function(stream){

	var msg = '';

	stream.on('data', function(tweet) {

	   		msg = randomMsg();
	   		console.log(msg);

	   		client.post('statuses/update', { in_reply_to_status_id: tweet.id_str, status: 'Hi @' + tweet.user.screen_name + msg }, function (err, data, res) {});

	});

 	stream.on('error', function(error) {
	    	console.log(error);
	});


 });


 function randomMsg () {

		var randomNumber = Math.floor((Math.random() * 3) + 0)

		var msg1 = ' thank you for mentioning me in your Tweet';
		var msg2 = ' thanks!';
		var msg3 = ' thank you :)';

		msgArray = [msg1,msg2,msg3];

		return msgArray[randomNumber];
 }



app.listen(process.env.PORT || 3000);
console.log("web service is listening on port 3000");




//---------------------------------------------tweet-----------------------------------------
// client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response){
//   if (!error) {
//     console.log(tweet);
//   }
// });