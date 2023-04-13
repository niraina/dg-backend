const mongoose = require('mongoose')

const categorieSchema = mongoose.Schema(
    {
        libelle: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('categorie', categorieSchema)