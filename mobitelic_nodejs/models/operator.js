const mongoose = require ('mongoose');


const  operatorSchema  = new mongoose.Schema({

    opeator_id : {

        type : Number,
        require : true, 

    },

    name: {
        type: String,
        opname: ['TELECOME', 'ORANGE ', 'OREEDOO'], // Radio button values
        required: true
    } ,
    
dijit :{
    type : String ,
    required : true ,

}

}); 


const Operator = mongoose.model('Operator', operatorSchema); // Create a model from the schema

export default Operator; // Export the model

