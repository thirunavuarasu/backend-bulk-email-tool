import express from 'express';
import { createTemplate, getTemplates, deleteTemplate } from '../controllers/templateController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTemplate);
router.get('/', authMiddleware, getTemplates);
router.delete('/:id', authMiddleware, deleteTemplate);

export default router;
