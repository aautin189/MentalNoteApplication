//Key: timestamp for a note
//Value: Note object


//import file == Note.js


class User{


	constructor(name, email, password){
		var user = {};
		user.name = "${name}";
		user.email = "${email}";
		user.password = "${password}";
		user.notebook = new Notebook(email);
		addUserToLocalStorage(user);

	}


	addUserToLocalStorage(user){
		let serializeUser = JSON.stringify(user);
		localStorage.setItem(${user.email}, serializeUser);
	}
}