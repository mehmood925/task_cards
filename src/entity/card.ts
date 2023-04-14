import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({

    title: { type: String, require: true },
    project: { type: String, require: true },
    state: { type: String, require: true },
    assignee: { type: String, require: true },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true }
});

const card = mongoose.model('cards', cardSchema);

export default card