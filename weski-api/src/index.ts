import express from "express";
import { env } from "process";
import cors from "cors";
import { resortsRouter } from "./routes/resorts-router";
import bodyparser from "body-parser";

const app = express();
const port = env.PORT;

app.use(cors());
app.use(bodyparser.json());

app.get("/isalive", (req, res) => {
  res.send(Date.now().toString());
});

app.use("/resorts", resortsRouter);

app.listen(port, () => {
  console.log(`Asaf's weski assignment listening on port ${port}`);
});
