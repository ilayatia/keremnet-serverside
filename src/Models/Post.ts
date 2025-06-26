import { CommentModel } from "./Comment";

export interface PostModel{
    id:number,
    name:string,
    text:string,
    date:string,
    likes:number,
    comments:CommentModel[]
}