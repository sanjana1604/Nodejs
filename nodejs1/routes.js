const fs= require('fs');
  
const requestHandler = (req, res) =>{
  const url= req.url;
  const method = req.method;
  
  if(url ==='/' ){
    
    
    res.write('<html>');
    res.write('<head>Enter Message!! </head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();      
  }
  if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () =>{
      const parsedBody =Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      //we are not assigning the body to something and using push because the body is const type.
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
      });
    });
        
  }
  
  //process.exit();
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head>First Page </head>');
  res.write('<body>Hey You!!</body>');
  res.write('</html>');
  res.end();
  
}

module.exports = requestHandler;