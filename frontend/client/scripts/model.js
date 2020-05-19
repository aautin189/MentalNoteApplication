//the first view to run will be invoked from the backend
// those ejs files
window.onload = loginView;


//user login credentials to authenticate user
async function authenticateUser(){
	email = getUserEmail();
	password = getUserPassword();
	const url = `http://localhost:3000/?user=${email}password=${password}`;
	const response = await fetch(url);
	const data = await response.json();
	if(data){
		noteMenuView();
	}
	else{
		errorMessage();
	}		
		
}

async function newUser(){
	email = getUserEmail();
	password = getUserPassword();
	const url = `http://localhost:3000/register?user=${email}password=${password}`;
	const response = await fetch(url);
	const data = await response.json();
	loginView();

}


//DATA
// is about sending and requesting data
async function saveNote(){
	email = getUserEmail();
	title = getTitle();
	message = getMessage();
	const url = `http://localhost:3000/new?email=${email}title=${title}&message=${message}`;
	const response = await fetch(url);	//calling the server, sending those input values to it
	const data = await response.json();	//format that response using JSON
	noteMenuView();							//go back to the main menu

}

// should return an array of integer values, which represent timestamps of all notes saved to user's notebook
async function getNoteCollection(email){

}


async function getNote(timestamp){
	

}


async function deleteNote(timestamp){

	
}


