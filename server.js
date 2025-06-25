const express = require("express");
const app = express();
const port = 8080;

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
const photos = {
  photos: ["zebra.jpg", "keremnet.png"],
};
app.get("/api/photos", (req, res) => {
  res.json(photos.photos);
});
app.get("/api/post/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.posts.find((post) => post.id == id)
  if (post === undefined){
    res.status(404).send("post not found")
  }
  else{
    res.json(post);
  }
});
app.get('/api/posts',(req,res) =>{
  res.json(posts)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
