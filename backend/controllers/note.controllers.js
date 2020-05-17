

const note = require('../models/note.model');		//import module: note model

class Controllers{							//class: Controllers
	


	//return note id to the client
	newNote(request,response){
		const {date,title,cta1,cta2,message} = request.query;	//destructive all variables from Query
		const id = note.create(date,title,cta1,cta2,message);	//invoke note's create method
		response.json({'success': true, 'noteID': id});			//send note ID to client
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



