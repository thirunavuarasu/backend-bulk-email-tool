import Recipient from '../models/recipient.js';

export const addRecipient = async (req, res) => {
    const { email, name } = req.body;

    try {
        const newRecipient = new Recipient({ email, name });
        await newRecipient.save();
        res.status(201).json({ success: true, message: 'Recipient added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add recipient', error });
    }
};

export const getRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find();
        res.status(200).json({ success: true, recipients });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve recipients', error });
    }
};

export const deleteRecipient = async (req, res) => {
    const { id } = req.params;

    try {
        await Recipient.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Recipient deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete recipient', error });
    }
};
