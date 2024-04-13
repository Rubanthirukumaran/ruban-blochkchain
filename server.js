const express = require("express");
const path = require("path");

const app = express();

// Serve index.html when root URL is accessed
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve burgers.html when /burgers URL is accessed
app.get("/burgers", (req, res) => {
    res.sendFile(path.join(__dirname, "burgers.html"));
});

// Serve static files (e.g., images) from the same directory
app.use(express.static(__dirname));

// Start the server
const server = app.listen(5000, () => {
    const portNumber = server.address().port;
    console.log(`Server is running on http://localhost:${portNumber}`);
});


// const express = require("express");
// const path = require("path");

// const app = express();

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));

// })

// // serving the index.html file 

// const server = app.listen(5000);
// const portNumber = server.address().port;
// console.log(`port: ${portNumber}`);
// // can see the port number in terminal - you can dictate the port number