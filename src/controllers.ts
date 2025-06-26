import { NextFunction, Request, Response } from "express";
import { getAllPosts, getPostById, postComment } from "./services";

const express = require("express");
const app = express();
var cors = require('cors')
const port: number = 8080;

app.use(cors())

app.use(express.json());

app.get("/api/post/:id", getPostById);

app.get("/api/posts", getAllPosts);

app.post("/api/comment/:id", postComment);

app.listen(port, () => {
  console.log("server is up and listening at port " + port);
});
