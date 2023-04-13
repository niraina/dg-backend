const mongoose = require('mongoose')

const departementSchema = mongoose.Schema(
    {
        code: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        localisation: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('departement', departementSchema)