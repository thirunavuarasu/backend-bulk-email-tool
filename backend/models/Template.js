import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
});

export default mongoose.model('Template', templateSchema);
