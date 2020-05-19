

const addController = function(...buttonIDs){
	const callbacks = getCallbacks();
	for(let id of buttonIDs){
		const button = document.getElementById(id);
		 button.addEventListener('click', callbacks[id]);
	}
}


const getCallbacks = function(){
	const callbacks = {};
	// @ login page
	callbacks['login-button'] = authenticateUser;
	callbacks['goto-register-view-button'] = registerView;
	
	// @ register page
	callbacks['register-button'] = newUser;
	callbacks['goto-login-view-button'] = loginView;
	
	// @ new note page
	callbacks['notebook-view-button'] = notesListView;
	callbacks['submit-note-button'] = saveNote;

	// @ notebook page
	callbacks['view-note-button'] = getNote;
	
	// @ view note page
	callbacks['delete-note-button'] = deleteNote;
	
	return callbacks;
}



//-------------------- USER INPUTS -----------------------//


//Function: get the user's input in title textbox
const getNoteTitle = () => document.getElementById('note-title').value;

//Function: get the user's input in message textbox
const getNoteMessage = () => document.getElementById('note-message').value;

const getUserEmail = () => document.getElementById('user-email').value;

const getUserPassword = () => document.getElementById('user-password').value;





