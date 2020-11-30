const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    description: String,
    location: String,
    pay:{type:String,
        enum:['guest','employer'],
        default:'guest'
    }},{
    timestamps : true
});

module.exports = mongoose.model('jobs',jobSchema);