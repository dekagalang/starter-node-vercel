import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
