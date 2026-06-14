import express from 'express';
import { getUserProfile, updateProfile, getLeaderboard, getStats } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateProfile);
router.get('/leaderboard', getLeaderboard);
router.get('/stats', getStats);

export default router;
