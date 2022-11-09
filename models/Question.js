const mongoose = require('mongoose');
const Schema=  mongoose.Schema
const QuestionSchema = new Schema({
        question: String,
        optionA: String,
        optionB: String,
        optionC: String,
        optionD: String,
        correctAnswer: String,
        course:String
})

module.exports = mongoose.model('Question', QuestionSchema)