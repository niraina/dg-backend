const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        reference: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        categorie: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        qunatiter: {
            type: Number,
            required: true
        },
        departement: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('product', productSchema)