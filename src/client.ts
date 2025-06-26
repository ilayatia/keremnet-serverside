import { CommentModel } from "./Models/Comment";
import { PostModel } from "./Models/Post";

const { response } = require("express");

const getPosts = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
const postComment = async (url: string, data: CommentModel) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json =await response.json();
  return json;
};
getPosts("http://localhost:8080/api/posts").then(response=>console.log(response))
