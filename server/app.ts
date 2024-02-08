import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ msg: "東京、今日の天気は晴れ。降水確率は10%です。" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
