import express from "express";
import { chatWithAI, getAIAdvice } from "../controllers/aiController"; // getAiAdvice එකත් import කරගන්න
import { protect } from "../middleware/authMiddleware"; // ආරක්ෂිත route එකක් නම් මේක ඕනේ

const router = express.Router();

// AI Chat එක සඳහා (ඔයා මේක දැනටමත් හදලා තියෙනවා)
router.post("/chat", protect, chatWithAI);

// AI Advice එක සඳහා (මෙන්න මේක තමයි අඩු වෙලා තිබුණේ)
router.get("/advice", protect, getAIAdvice); 

export default router;