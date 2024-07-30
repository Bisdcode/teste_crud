import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router()//rota

router.get("/", getUsers);

router.post("/", addUser);

router.put("/", updateUser);

router.delete("/", deleteUser);


export default router;