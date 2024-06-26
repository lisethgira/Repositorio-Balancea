const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    type: {
        type: String,
        default: 'expense',
        enum: {
            values: ['expense','income'],
        },
    },
    categoryName: {
        type: String,
        required: [true, "El nombre de la categoría es requerido."],
        unique: true,
    },
    color:{
        type: String,
    }
}, {timestamps: true, versionKey: false})

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;