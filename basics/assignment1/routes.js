const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js server!</h1></body>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='usernam'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<ul>");
    res.write("<li>Matthew</li>");
    res.write("<li>Wettham</li>");
    res.write("</ul>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};
