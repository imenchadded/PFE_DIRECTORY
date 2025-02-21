const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    username: {
        type: String , 
        required: true

    },
    phonenumber :{
        type: Number ,
        required: true,
        unique : true
    },

    
    email: {
        type: String ,
        required: true ,
        unique: true
},

region: {
    type: String ,
    required: true

}, 

operator_id : {
    type : Number , 
    require : true

}
}) ; 

 


module.exports = mongoose.model('Customer', customerSchema);

