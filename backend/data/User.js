
//save user's email address here so you can call on it later when you need to find a user's notebook (so you can add and delete notes)
var currentUser;

let user;
let userEmail;
let userPassword;
let userNotebook;	


class User{


	constructor(email, password){
		user = {};
	
		this.user.userEmail = email;
		this.user.userPassword = password;
		this.user.userNotebook = new Notebook(email);
		let serializedUser = JSON.stringify(user);
		localStorage.setItem("${password}", serializedUser);

	}
}

