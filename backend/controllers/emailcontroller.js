import nodemailer from 'nodemailer';
import { Email } from '../models/Email.js'; // Use curly braces for named export


const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendBulkEmails = async (req, res) => {
    try {
        const emails = await Email.find({ status: 'pending' });

        for (const email of emails) {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email.address,
                subject: 'Your Subject',
                text: 'Email Body',
            };

            await transporter.sendMail(mailOptions);
            email.status = 'sent';
            email.sentDate = new Date();
            await email.save();
        }

        res.status(200).json({ success: true, message: 'Bulk emails sent!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send emails', error });
    }
};
