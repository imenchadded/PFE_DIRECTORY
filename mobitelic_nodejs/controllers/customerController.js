const  Customer =  require ('../models/customer');

// Create a new news 
exports.createCustomer = async (req, res) => {
    try {
        const { username, phone, region, email } = req.body;
        const newCustomer = new Customer({ username, phone, region, email }); // Initialize newCustomer with the correct fields
        const savedCustomer = await newCustomer.save();
        res.json(savedCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all news
exports.getAllCustomer = async (req, res) => {
    try {
        const Customer = await Customer.find();
        res.json(Customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get news by ID
exports.getCustomerById = async (req, res) => {
    try {
        const newsItem = await Customer.findById(req.params.id);
        if (!newsItem) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(newsItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update news details
exports.updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete news
exports.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer= await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
