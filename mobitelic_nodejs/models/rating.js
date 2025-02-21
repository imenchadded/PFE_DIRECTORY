const mongoose = require('mongoose');

// Define the schema for problems
const ratingSchema = new mongoose.Schema({
    problems_id: {
        type: Number, // Use Number instead of number
        required: true, // Consider making this required if it should always be present
        unique: true // If each problem should have a unique ID
    },
    problemsname: {
        type: String, // Change to String to hold a single selected value
        enum: ['Network', 'Debit Connexion', 'Price Service', 'Network Coverage', 'Reachability', 'Other'], // Possible values
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 0, // Optional: Set a minimum value for stars
        max: 5  // Optional: Set a maximum value for stars
    },
    commentaire: {
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: false // Optional: Specify if this should be required
    }
});

// Create the model
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;