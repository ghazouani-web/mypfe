const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const logger = require("./middlewares/logger");
const authRouter = require("./routes/authRouter");
const articleRouter = require("./routes/articleRouter");
const entrepriseRouter = require("./routes/entrepriseRouter");

 // middlewares
 app.use(express.json());
 app.use("/api/auth",logger);
//  connect the db 
connectDB();
app.use("/api/auth",authRouter)
app.use("/api",articleRouter)
app.use("/api",entrepriseRouter)

// start the server
const port = process.env.port || 5000;
app.listen(port, (err) => err ? console.error(err) : console.log(
    `the server is running on port${port}`
));