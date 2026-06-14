import express from 'express';
import { runCode, submitCode, getSubmissions, getAllSubmissions } from '../controllers/submissionController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/run', protect, runCode);
router.post('/submit', protect, submitCode);
router.get('/problem/:problemId', protect, getSubmissions);
router.get('/my', protect, getAllSubmissions);

export default router;
