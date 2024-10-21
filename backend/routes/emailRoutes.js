import express from 'express';
import { sendBulkEmails } from '../controllers/emailcontroller.js';
import { authMiddleware } from '../middleware/authmiddleware.js';

const router = express.Router();

router.post('/send-bulk', authMiddleware, sendBulkEmails);

export default router;
