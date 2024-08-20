const express = require("express");
const app = express();
const PORT = 3000;
//const messageRouter = require('routes/messageRouter')
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//app.use('/messages', messageRouter)
app.use("/", indexRouter);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`),
);
