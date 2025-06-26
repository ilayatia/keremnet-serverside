import { PostModel } from "./Models/Post";

export const data: PostModel[] = [
  {
    id: 1,
    name: "Ilay",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "23/4/2005 12:12",
    likes: 66,
    comments: [
      {
        name: "master shifu",
        text: "i agree",
      },
    ],
  },
  {
    id: 2,
    name: "Foo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "23/4/2005 12:12",
    likes: 66,
    comments: [
      {
        name: "master shifu",
        text: "i agree",
      },
    ],
  },
  {
    id: 3,
    name: "Bar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "23/4/2005 12:12",
    likes: 66,
    comments: [
      {
        name: "master shifu",
        text: "i agree",
      },
    ],
  },
  {
    id: 4,
    name: "Baz",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    date: "23/4/2005 12:12",
    likes: 66,
    comments: [
      {
        name: "master shifu",
        text: "i agree",
      },
    ],
  },
];
