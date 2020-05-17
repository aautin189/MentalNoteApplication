var express = require('express');							//import module: express
var router = express.Router();								//initialize Router


const {createNote,getNote,deleteNote} = require('../controllers/note.controllers');	//importing functions from controllers.js



router.get('/new', createNote);
router.get('/:id', getNote);								
router.get('/:id/delete', deleteNote);
						
															


module.exports = router;									//export router as module