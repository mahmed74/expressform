import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 8000 || process.env.PORT;
import path from "path";

const __dirname = path.resolve(path.dirname(""));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/register", (req, res) => {
  res.send(req.body);
  //   res.sendFile(path.join(__dirname, "/users.html"));

  res.status(200);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
