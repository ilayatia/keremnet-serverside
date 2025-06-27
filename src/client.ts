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
const addPostToserver = async (url: string, data: PostToPostToServer) => {
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
//  getPosts("http://localhost:8080/api/posts").then(out=>console.log(out))
// addPostToserver("http://localhost:8080/api/addpost",{date:"12/13/24",likes:35,name:"goo",text:"adsfds"}).then(out=>console.log(out))
 //getPosts("http://localhost:8080/api/posts").then(out=>console.log(out))
