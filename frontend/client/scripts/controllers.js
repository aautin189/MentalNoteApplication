
//-------------------- BUTTONS -----------------------//

//Function: takes variable number of button IDs & sets their event listeners
const addController = function(...buttonIDs){
	const callbacks = getCallbacks();
	for(let id of buttonIDs){
		const button = document.getElementById(id);
		 button.addEventListener('click', callbacks[id]);

	}
}


//Function: maps callbacks (responding methods) to button IDs
const getCallbacks = function(){
	const callbacks = {};
	callbacks['save-button'] = saveNote;	//needs to trigger the sendNoteToDB() function when user clicks on "save-button"
	callbacks['view-note-button'] = retrieveNote;
	callbacks['delete-note-button'] = deleteNote;
	callbacks['view-all-notes'] = viewTimeline;

	return callbacks;
}


//-------------------- USER INPUTS -----------------------//


//Function: get the user's input in title textbox
const getNoteTitle = () => document.getElementById('note-title').value;

//Function: get the user's input in message textbox
const getNoteMessage = () => document.getElementById('note-message').value;





