const shortid = require('shortid');

class Users{
	

	constructor(){
		this.users = [];

	}

	add(name,email,password){
		const id = shortid.generate();
		const user = {id:id, name:name, email:email, password:password};
		this.users.push(user);
		console.log(this.users);

	}


	addToLocalStorage(email,password){
		//create new instance of User
		//add it to local storage
		var user = new User(email,password);
		let serializedPassword = JSON.stringify(user.password);
		localStorage.setItem("${email}", serializedPassword );
	}
}


module.exports = new Users();