const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");

const URL = "mongodb://localhost/takhleeq";

const userRouter = require("./routes/userRoutes");
const classRouter = require("./routes/classRoutes");
const subjectRouter = require("./routes/subjectRoutes");
const chapterRouter = require("./routes/chapterRoutes");
const topicRouter = require("./routes/topicRoutes");
const questionRouter = require("./routes/questionRoutes");



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// console.log("Database url", URL);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});


app.use(express.json());
app.use("/user", userRouter);
app.use("/class", classRouter);
app.use("/subject", subjectRouter);
app.use("/chapter", chapterRouter);
app.use("/topic", topicRouter);
app.use("/question", questionRouter);



app.all("*", (req, res) => {
    res.status(404).send("<h1>404! Page not found</h1>");
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
