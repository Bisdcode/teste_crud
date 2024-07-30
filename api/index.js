import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()); //para evitar alguns conflitos por rodar localmente

app.use("/", userRoutes);

app.listen(8800);