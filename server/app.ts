import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("hello!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
