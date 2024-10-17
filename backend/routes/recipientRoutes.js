import express from 'express';
import { addRecipient, getRecipients, deleteRecipient } from '../controllers/recipientController.js';
import { authMiddleware } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, addRecipient);
router.get('/', authMiddleware, getRecipients);
router.delete('/:id', authMiddleware, deleteRecipient);

export default router;
