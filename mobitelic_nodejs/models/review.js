
const mongoose = require ('mongoose');

const  reviewSchema = new mongoose.Schema({

    customer_id : {
        type : Number,
        required : true
        },

        operato_id : {
            type : Number ,
            required : true
        }, 

        problems_id : {
        type : Number ,
        required : true
        },
        

        stars :{
            type : Number ,
            required : true
        }
 


});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
