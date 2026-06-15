const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skillName:{
        type:String,
        required:true,
    },

    level:{
        type:String,
    },
    category:{
        type:String,
    },
});

module.exports = mongoose.model("Skill", skillSchema);
