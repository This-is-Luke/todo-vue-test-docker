const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/todos", (req, res) => {
  res.json([
    { id: 1, text: "Learn Vue", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Build ToDo App", completed: false },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
