const mongoose = require('mongoose')

const typeSchema = mongoose.Schema(
    {
        libelle: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('type', typeSchema)