import express from 'express';
import { addRecette, updateRecette, deleteRecette, getAllRecettes, getRecetteById } from '../controllers/RecetteController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/', addRecette);
router.get('/', getAllRecettes);
router.get('/:id', getRecetteById);
router.put('/:id', updateRecette);
router.delete('/:id', deleteRecette);

export default router;

