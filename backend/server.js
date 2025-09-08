import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log("Server started at port : ", 3000);
})