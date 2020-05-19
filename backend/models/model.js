var emailKey;
var users;

class UsersCollection{


	constructor(){
		users = [];	//create an empty array to store user objects

	}
	
	//add new user to the Users{} object @ index == email
	createNewUser(email,password){
		const notebook = [];
		emailKey = email;
		const user = {email:emailKey, password:password, notebook:notebook};	//creating a user object in short-term memory
		users[email] = user;
	}

	createNewNote(email,title,message){
		emailKey = email;
		var timestamp = Date.now();
		var note = {id:timestamp, title:title, message:message};
		var user = users[emailKey];
		user.notebook[timestamp] = note;
	}


	getListOfNoteIDs(email){
		emailKey = email;
		var user = users[emailKey];
		var notebook = user.notebook;
		var notebookKeys = Object.keys(notebook)
		return notebookKeys;	//should return an array of all key values for each note in storage
	}

	getNote(email, timestamp){
		emailKey = email;
		
		
	}

	deleteNote(email, timestamp){

		//access note using the key (id) provided
		//ask local storage to delete that note object from the collection
	}


}


module.exports = new UsersCollection();