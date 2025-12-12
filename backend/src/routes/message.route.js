import express from "express";
import { getAllContacts, getChatPartners, getMessagesWithUserId, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjectProtection } from "../middleware/arcjet.middleware.js";
const router = express.Router();

router.use(arcjectProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesWithUserId);
router.post("/send/:id", sendMessage);

export default router;