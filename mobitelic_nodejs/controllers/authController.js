const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/auth');
const validator = require("email-validator");

// User signup
// exports.signup = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if the email is already in use
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email is already registered' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//         });

//         // Save the user to the database
//         const savedUser = await newUser.save();

//         // Generate and return a JWT token
//         const token = jwt.sign({ user: savedUser._id }, config.secret, {
//             expiresIn: '1h',
//         });

//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials, user not found.' });
        }

        const validateEmail = validator.validate(email);
        if (!validateEmail) {
            return res.status(401).json({ message: 'Invalid credentials, Invalid Email.' });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials, incorrect password.' });
        }

        // Generate and return a JWT token
        const token = jwt.sign({ user: user._id }, config.secret, { expiresIn: '1min' });
        // You can access the expiration time in the decoded token
        const decodedToken = jwt.decode(token);
        const expiresIn = decodedToken.exp - decodedToken.iat;
        res.json({ token: token, expiresIn: expiresIn });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
