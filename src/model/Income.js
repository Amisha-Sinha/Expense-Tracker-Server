// to define data schema that will be used.


const mongoose= require("mongoose");
//Data Schema

const incomeSchema = mongoose.Schema(
    {
        title: {
            required: [true, "Title is required."],
            type: String,
        },
        description: {
            required: [true, "Description is required."],
            type: String,
        },
        type: {
            type: String,
            default: "income",
        },
        amount: {
            required: [true, "Amount is required."],
            type: Number,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, //Must be MongoDB ID
            ref: "User",
            required: [true, "User ID is required."],
        }
    },
    {
        timestamps: true,
    }
);

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;