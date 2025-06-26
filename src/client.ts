import { CommentModel } from "./Models/Comment";


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