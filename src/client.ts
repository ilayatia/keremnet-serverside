import { CommentModel } from "./Models/Comment";
import { PostModel } from "./Models/Post";

const { response } = require("express");

const getPosts = async (url: string) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
};
const postComment = (url: string, data: CommentModel) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};