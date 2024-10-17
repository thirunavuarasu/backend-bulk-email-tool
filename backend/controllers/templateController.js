import Template from '../models/template.js';

export const createTemplate = async (req, res) => {
    const { name, subject, body } = req.body;

    try {
        const newTemplate = new Template({ name, subject, body });
        await newTemplate.save();
        res.status(201).json({ success: true, message: 'Template created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create template', error });
    }
};

export const getTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.status(200).json({ success: true, templates });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve templates', error });
    }
};

export const deleteTemplate = async (req, res) => {
    const { id } = req.params;

    try {
        await Template.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Template deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete template', error });
    }
};
