import dotenv  from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;
// console.log(process.env.MONGO_CLIENT);

// middlewares
app.use(morgan("dev")); // logs all the incoming req information
// app.use(helmet()) // setting default security headers to protect some attacks
app.use(cors()) // allow cross origin resources
app.use(express.json()); // convert income data in the req.body

const __dirname = path.resolve();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/client/build")))

// MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// routers
import userRouter from "./src/routers/userRouter.js";
import transRouter from "./src/routers/transRouter.js";
import { isAuth } from "./src/middleware/authMiddleware.js";


app.use("/api/v1/user", userRouter);
app.use("/api/v1/Transaction", isAuth, transRouter);


app.get("/dashboard", (req, res) => {
  res.redirect("/")
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"))
});


// catch when router is not found
app.use("*", (req, res,next) => {
  const error = {
    messsage: "404 page not found!",
    code:200,
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  // console.log(error);
  // const code = error.code || 500;
  res.json({
    status: "error",
    message: error.message,
  });
});
 
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`you server is ready at http://localhost:${PORT}`);
});