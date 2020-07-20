import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("olá mundo");
});

app.listen(3333, () => {
  console.log("Server is running");
});
