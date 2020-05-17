//OUTSIDE APP
//these views will render from within the backend server






//INSIDE APP
//VIEW 1: should offer two options: new note & notes collection
const mainMenuView = function(){
	const view = document.getElementById('view');
	const html =

	`<section id=mainMenuView>
		<h1>Welcome, User!</h1>
		<button id="gotoNewNote" type="submit">New Note</button> 
		<button id="gotoNotebook" type="submit">Notebook</button> 
	</section>`
	view.innerHTML = html;
}

//VIEW 2a: new note form for user input
const newNoteView = function(){

	const view = document.getElementById('view');
	const html = 		

	`<section id=newNoteView>
		<a href=''>Home</a>
		<a href=''>Notebook</a>
		<h1>Add Note</h1>
		<form id=newNoteForm>       
			<h2 class="mental-note-header">Mental Note</h2>

			<br>
	
			<input id="note-title" type="text" placeholder="Title" required=""/>
			<input id="note-message" type="text" placeholder="Enter note" required=""/>
			<button id="submitNote" type="submit">Save Note</button>   
		</form>
	</section>`
	view.innerHTML = html;
  	
}



//VIEW 2b: View all notes from database (Timeline view)
const notebookView = function(){
	const view = document.getElementById('view');
	const html = 		

	`<section id=notebookView>
		<a href=''>Home</a>
		<h1>Notebook</h1>
		<p>(note date should populate here)</p>
		<button id="viewNote" type="submit">View Note</button> 
		
	</section>`
	view.innerHTML = html;

}

//VIEW 3: View note from database
const noteView = function(){
	const view = document.getElementById('view');
	const html = 		

	`<section id=noteView>
		<a href=''>Home</a>
		<a href=''>Notebook</a>
		<h1>View Note</h1>
		<p>1. (populate title)</p>
		<p>2. (populate date)</p>
		<p>3. (populate message)</p>
		<button id="deleteNote" type="submit">Delete Note</button>

	</section>`
	view.innerHTML = html;
	
}

