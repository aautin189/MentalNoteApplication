//import all functions listed in the model file
//and assign them to a variable called note
const users = require('../models/users-model');

class UserControllers{
	
	
	//LOGIN
	postLogin(request,response){
		const {email, password} = request.body;	//unpack that 'request' object
		const data = authenticateUser(email,password);
		response.json(data);	//use that 'response' object to send a string message to verbally confirm this process complete & to close the connection
	}


	
	//NEW ACCOUNT
	postRegister(request,response){
		try{
			const {email,password} = request.body;	//unpack that 'request' object 
			//this method call should also create a notebook instance for this user && save user to local storage
			users.add(email,password);			//invoke the add method inside model file
			response.redirect('/login');		//use that 'response' object to redirect to the login.ejs view
		}
		catch{
			response.redirect('/register');		//else, redirect to the register.ejs view
		}
	}


	//need the user's email address to be able to add or get notes from the user's notebook
	getUserEmail = () => document.getElementById('user-email').value;


}//end class


module.exports = new UserControllers();