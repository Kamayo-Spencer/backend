import mongoose from 'mongoose';
import User from './User';

// const { Schema } =mongoose;

mongoose.Promise = global.Promise;


const postSchema = new Schema({
    title: {type: String, required:true},
    link: String,
    text: String,
    createdAt: {type:Date, default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},

    });

    const posts = mongoose.model('posts', postSchema);

export default posts;

