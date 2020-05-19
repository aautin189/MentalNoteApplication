
let userNotebookID;


class Notebook{

	constructor(email){
		
		//creating empty array for future and instantiating it with it's notebook ID (email)
		this.userNotebook = [];	//create an empty array for the user to store his note objects
		this.userNotebook.userNotebookID = email;
		
	}


	getNoteFromNotebook(){

	}

	//adding a note to the user's notebook
	addNoteToNotebook(){
		// call the currentUser variable 
		let serializedNotebook = JSON.stringify(userNotebook);
		localStorage.setItem("${email}", serializedNotebook);
		
	}

	deleteNoteFromNotebook(){
		// call the currentUser variable 
		let serializedNotebook = JSON.stringify(userNotebook);
		localStorage.removeItem("${email}", serializedNotebook);

	}

}