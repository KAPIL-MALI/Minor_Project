import express from 'express';
import { getProblems, getProblem, createProblem, updateProblem, deleteProblem, getCategories } from '../controllers/problemController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProblems);
router.get('/categories', getCategories);
router.get('/:slug', getProblem);
router.post('/', protect, adminOnly, createProblem);
router.put('/:id', protect, adminOnly, updateProblem);
router.delete('/:id', protect, adminOnly, deleteProblem);

export default router;
