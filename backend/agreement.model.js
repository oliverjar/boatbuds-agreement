
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Agreement = new Schema({
    agreement_firstname: {
        type: String
    },
    agreement_lastname: {
        type: String
    },
    agreement_type: {
        type: String
    },
    agreement_url: {
        type: String
    },
    agreement_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Agreement', Agreement);