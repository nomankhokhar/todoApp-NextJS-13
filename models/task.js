import mongoose from "mongoose";

const schema = new  mongoose.Schema({
    title: {
        name: String,
        require: true,
    },
    description: {
        name: String,
        require: true,
    },
    isCompleted : {
        type : Boolean,
        default: false
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref : "User"
    },
    createdAt : {
        type : Date,
        default: Date.now,
    }
});

mongoose.models = {};

export const Task = mongoose.model("Task", schema);