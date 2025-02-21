const express  =  require ('express');
const router =  express.Router();
const customerController =  require( '../controllers/customerController' );



const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

//const { createCustomer } = require('./controllers/customerController'); // Adjust the path as necessary
//function(req, res){ 

router.post ('/createCustomer',customerController.createCustomer);

//router.post ('/login', customerController.loginCustomer);

//router.get('/:id' , customerController.getCustomerById);
//rrouter.get('/' , customerController.getCustomers);
//rrouter.put('/:id' , customerController.updateCustomer);
//rrouter.delete('/:id' , customerController.deleteCustomer);

module.exports = router;

