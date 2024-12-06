import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { getMessages } from "../controller/MessageController.js";

const messagesRoutes = Router();

messagesRoutes.post("/get-messages", verifyToken, getMessages);

export default messagesRoutes;
