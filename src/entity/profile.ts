import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    createdAt: { type: String, require: true },
    updatedAt: { type: String, require: true }
});

const profile = mongoose.model('profiles', profileSchema);

export default profile; 