//NOTE:::: inside these methods, need to use JSON to pass these data values to the client
//instead of having it render from inside this controllers file

class UserControllers{
	

	getIndex(request,response){
		console.log(request.session.id);
		response.render('index.ejs', {name: 'data'});	//send to Note client instead
	}

	getLogin(request,response){
		console.log(request.session.id);
		response.render('login.ejs');	//send to Note client instead
	}

	getRegister(request,response){
		console.log(request.session.id);
		response.render('register.ejs');	//send to Note client instead
	}


	//whenever user tries to login
	postLogin(request,response){
		const {email, password} = request.body;
		console.log(email,password);
		response.send('success');	//send to Note client instead
	}


	//whenever user tries to create new account
	postRegister(request,response){
		try{
			const {name,email,password} = request.body;
			users.add(name,email,password);
			response.redirect('/login');
		}
		catch{
			response.redirect('/register');
		}
	}


}//end class

const users = require('../models/users-model');
module.exports = new UserControllers();