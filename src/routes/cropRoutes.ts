import express from "express";
import { addCrop, deleteCrop, getMyCrops, updateCrop } from "../controllers/ cropController";
// import { protect } from "../middleware/authMiddleware";
import { protect } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/adminMiddleware";
const router = express.Router();

router.post("/", protect, addCrop);
router.get("/", protect, getMyCrops);

// 2. පොදු ID මත පදනම් වූ ක්‍රියාකාරීත්වයන් (මෙහිදී Controller එක ඇතුළතදී Admin ද කියා පරීක්ෂා කරගන්න)
router.put("/:id", protect, updateCrop);    
router.delete("/:id", protect, deleteCrop); 

// 3. Admin සඳහා පමණක් වන විශේෂ Routes (උදාහරණයක් ලෙස සියලුම දත්ත බැලීමට)
// අවශ්ය නම් පමණක් මෙය භාවිතා කරන්න
router.get("/admin/all", protect, isAdmin, getMyCrops);


export default router;