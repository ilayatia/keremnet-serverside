import { CommentModel } from "./Models/Comment";

const { response } = require("express");

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
};

const postComment = async (url: string, data: CommentModel) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log(json);
};

postComment("http://localhost:8080/api/comment/1", { text: "30", name: "30" });
fetchData("http://localhost:8080/api/posts");
