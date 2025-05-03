const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engin", "ejs");

app.use(require("./routes/home.js"));
app.use(require("./routes/about.js"));
app.use(require("./routes/post.js"));
app.use(require("./routes/contact.js"));

app.listen(port);