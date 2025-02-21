const express = require('express');
const app = express();
app.use(express.json());

const customerRoutes = require('../routes/customerRoute'); // Adjust the path as necessary
const connectDB = require('../config/database');
connectDB();    

// Routes
app.use('/customers', customerRoutes);
   // app.use('/tasks', require('./routes/taskRoutes'));
  //  app.use('/news', require('./routes/newsRoutes'));
    //app.use('/auth', require('./routes/authRoutes'));

// Start server
//    const port = process.env.PORT || 3000;

    const port = 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    app.get("/", (req, res) => {
        res.status(200).json({ message: "Welcome to mobitelIC REST API" });
    });

    app.get("/*", (req, res) => {
        res.status(404).json({ message: 'Route not found' });
    });
