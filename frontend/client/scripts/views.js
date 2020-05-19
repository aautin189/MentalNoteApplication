
//User login page
const loginView = function(){

	const view = document.getElementById('view');
	const html = 		
	`<section>
		<h1>Mental Note App</h1>
		
		<h2>User Login: </h2>

		<br>

		<input id='user-email' type=text placeholder='email'>
		<input id='user-password' type=text placeholder= 'password'>
		<button id='login-button'>Login</button>   
		
		<p>or</p>
		<button id='goto-register-view-button'>New User?</button> 
	</section>`;
	view.innerHTML = html;
	addController('login-button','goto-register-view-button');
  	
}

// Access denied 
// add this html to the login page anytime authentication is denied
const errorMessage = function(){
	const view = document.getElementById('view');
	const html =
	`<h1>Error. Try again. </h1>`;
	view.innerHTML += html;
}



//Register new user
const registerView = function(){

	const view = document.getElementById('view');
	const html = 		

	`<section>
		<h1>Mental Note App</h1>
		<h2>Create new user account:</h2>      
	
		<br>
		<input id='email' type=text placeholder='email'>
		<input id='password' type=text placeholder='password'>
		<button id='register-button'>Register</button>   
		<br>
		<p>or</p>
		
		<button id='goto-login-view-button'>User Login</button> 
	</section>`;
	view.innerHTML = html;
	addController('register-button','goto-login-view-button');
  	
}


//Empty note template
const newNoteForm = function(){

	const view = document.getElementById('view');
	const html = 		

	`<section>
		
		<button id='notebook-view-button'>Go To Notebook</button>
		<h1>Add Note</h1>
		       
		<h2>Mental Note</h2>

		<br>

		<input id='note-title' type=text placeholder='Title'>
		<input id='note-message' type=text placeholder='Enter Note'>
		<button id='submit-note-button'>Save Note</button>   
		
	</section>`;
	view.innerHTML = html;
	addController('submit-note-button', 'notebook-view-button');
  	
}



// backend sends a sorted array of timestamps, one for each note in user's notebook
//this function will just print out those timestamps(formatted to date) with a button
//below it that when clicked will request to view that specific note
const notesListView = function(notesArray){
	const view = document.getElementById('view');
	const html = 		

		`<section id=notebookView>
			<button id='goto-home-view'>Home</button>
			<h1>Notebook</h1>
		</section>`;
	
	view.innerHTML = html;
	var id;
	
	for(id in notesArray){	
		var date = new Date(id);
		var addedHTML = 
			`<p>${date}</p>
			<button id='view-note-button' type="submit">View Note</button>`;
		view.innerHTML += addedHTML;
	}
	addController('view-note-button');

}

//VIEW 3: View note from database
const viewNote = function(timestamp){
	let note = getNote(timestamp);
	const view = document.getElementById('view');
	const html = 		

	`<section id=noteView>
		<a href=''>Home</a>
		<a href=''>Notebook</a>
		<h1>View Note</h1>
		<p>1. (populate title)</p>
		<p>2. (populate date)</p>
		<p>3. (populate message)</p>
		<button id="delete-note-button" type="submit">Delete Note</button>

	</section>`;
	view.innerHTML = html;
	addController('delete-note-button');	
}

