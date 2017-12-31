// No third party module required: https is part of the Node.js API
const https = require("https");
const url =
  "https://jsonplaceholder.typicode.com/posts";
https.get(url, res => {
  res.setEncoding("utf8");
  var body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
   
   /* for (var i = 0; i < body.length; i++) {
    	console.log("TITLE"+(i+1)+":"+body[i].title);

    	console.log("BODY"+(i+1)+":"+body[i].body);

    } */

  
    
  });
});