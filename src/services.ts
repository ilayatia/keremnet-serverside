import { Request, Response } from "express";
import { PostModel } from "./Models/Post";
import {data} from './data'


const posts:PostModel[] = data

export const getPostById = (req:Request, res:Response):void => {
  const id:number = parseInt(req.params.id)
  const post:PostModel | undefined = posts.find((post) => post.id == id);
  if (post === undefined) {
    res.status(404).send({message:"Post not found."});
  } else {
    res.json(post);
  }
}

export const getAllPosts =(req:Request, res:Response):void => {
  res.json(posts);}

export const postComment =(req:Request, res:Response):void => {
  const id:number = parseInt(req.params.id);
  const text:string = req.body.text;
  const name:string = req.body.name;

  if (
    text === null ||
    name === null ||
    typeof text !== "string" ||
    typeof name !== "string"
  ) {
    res.status(400).send({ message: "Bad request error" });
  } else {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == id) {
        posts[i].comments.push({ name: name, text: text });
        res.status(200).send({ message: "Success" });
        return ;
      }
    }
    res.status(404).send({ message: "Id not valid." });
  }
}