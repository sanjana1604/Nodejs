const http=require('http');

const server=http.createServer((req, res) => {
  const url=req.url;
  const method=req.method;
  if(url === '/'){
    res.write('<html>');
    res.write('<head>Title of page</head>');
    res.write('<body><form action="/create-users" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/create-users' && method === "POST"){
    const body=[];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end',() => {
      const parsedBody= Buffer.concat(body).toString();
      const message= parsedBody.split('=')[1];
      console.log(message);
      res.statusCode=302;
      res.setHeader('Location','/users');
      return res.end();
    });
  }

  if(url === '/users' ){
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li><li>user4</li>');
    res.write('</html>');
    return res.end();
  }


});

server.listen(3000);