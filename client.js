const { response } = require("express");

fetch("http://localhost:8080/api/posts").then((response)=>response.json()).then((json)=>console.log(json))

fetch('http://localhost:8080/api/comment/10', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({ text: "30", name: "30" })
})
.then(response => response.json())
.then(json => console.log(json))