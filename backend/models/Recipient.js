import mongoose from 'mongoose';

const recipientSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
});

export default mongoose.model('Recipient', recipientSchema);
