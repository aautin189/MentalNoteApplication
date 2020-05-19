//import all functions listed in the model file
//and assign them to a variable called note
const note = require('../models/note.model');		

class Controllers{							
	


	//return note object
		//after it's been created inside the create() function
	newNote(request,response){
		const {date,title,cta1,cta2,message} = request.query;	//unpack all values saved in query object
		const noteInstance = note.create(date,title,cta1,cta2,message);	//invoke note's create method
		response.json({'success': true, 'note': noteInstance});			//save the note object an a success message in the response object
	}


	
	//using note id to locate note object
	//then, sending back that object to the caller
	getNote(request,response){
		const id = request.params.id;		//get id from request parameters
		const note = note.get(id);			//invoke note's get method

		if(note){							//if data exists
			note["success"] = true;			//add 'success' to data
			response.json(note);			//send as JSON data

		}
		else{								//if data DOES NOT exist
			response.json({"success": false});		//send JSON data with no success
		}
	}



	//delete a note from the collection
	deleteNote(request, response){				
		const id = request.params.id;			//get note id from response parameters
		note.deleteNote(id);						//invoke note's delete method
		
	}

}


module.exports = new Controllers();			//export Controller instance as module



