const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

const posts = {
  posts: [
    {
      id: 1,
      name: "Ilay",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      date: "23/4/2005 12:12",
      likes: 66,
      comments: [
        {
          name: "master shifu",
          text: "i agree",
        },
      ],
    },
  ],
};

app.get("/api/post/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.posts.find((post) => post.id == id);
  if (post === undefined) {
    res.status(404).send({message:"Post not found."});
  } else {
    res.json(post);
  }
});

app.get("/api/posts", (req, res) => {
  res.json(posts.posts);
});

app.post("/api/comment/:id", (req, res) => {
  const id = req.params.id;
  const text = req.body.text;
  const name = req.body.name;

  if (
    text === null ||
    name === null ||
    typeof text !== "string" ||
    typeof name !== "string"
  ) {
    res.status(400).send({ message: "Bad request error" });
  } else {
    for (let i = 0; i < posts.posts.length; i++) {
      if (posts.posts[i].id == id) {
        posts.posts[i].comments.push({ name: name, text: text });
        res.status(200).send({ message: "Success" });
        return;
      }
    }
    res.status(404).send({ message: "Id not valid." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
