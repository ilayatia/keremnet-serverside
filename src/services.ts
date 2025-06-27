import { Request, Response } from "express";
import { PostModel } from "./Models/Post";
import { data } from "./data";

const posts: PostModel[] = data;

export const getPostById = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  const post: PostModel | undefined = posts.find((post) => post.id == id);
  if (post === undefined) {
    res.status(404).send({ message: "Post not found." });
  } else {
    res.status(200).json([post]);
  }
};

export const getAllPosts = (req: Request, res: Response): void => {
  res.status(200).json(posts);
};

export const postComment = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  const text: string = req.body.text;
  const name: string = req.body.name;

  if (
    text === null ||
    name === null ||
    typeof text !== "string" ||
    typeof name !== "string"
  ) {
    res.status(400).send({ message: "Bad request error" });
  } else {
    posts.forEach((post) => {
      if (post.id == id) {
        post.comments.push({ name: name, text: text });
        res.status(200).send(post);
        return;
      }
    });
    res.status(404).send({ message: "Id not valid." });
  }
};

export const addPost =
  (req: Request, res: Response): void => {
    const date:string = req.body.date;
    const likes:number = parseInt(req.body.likes)
    const name:string =req.body.name
    const text:string =req.body.text

    if (
      text === null ||
      name === null ||
      typeof text !== "string" ||
      typeof name !== "string" ||
      likes === null ||
      date === null ||
      typeof likes !== "number" ||
      typeof date !== "string"
    )
      res.status(400).send({ message: "Bad request error" });
    else {
      posts.push({ name: name, text: text ,comments:[],date:date,id:posts.length+1,likes:likes });
      res.status(200).send({ msg: "Success" });
      return;
    }
  };
