import express from "express";

const app = express();
const PORT: number | string = process.env.PORT ?? 8001;

app.get("/", (req, res) => {
  res.send("Hello world");

  console.log("Get request");
});

app.listen(PORT, () => {
  console.log(`Server is running at port:`, PORT);
});
