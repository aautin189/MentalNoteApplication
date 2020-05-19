//The Router:
//manages the app's endpoints


var express = require('express');
var router = express.Router();
const {getLogin,getRegister,postLogin,postRegister} = require('../controllers/user-controllers');
const {newNote,getNote,deleteNote} = require('../controllers/note.controllers');	//importing functions from controllers.js


//ROUTES = note related
//directed to a function in controllers
router.get('/new', newNote);			//at this location, invoke the newNote() process
router.get('/:id', getNote);			//at this location, invoke the getNote() process						
router.get('/:id/delete', deleteNote);	//at this location, invoke the deleteNote() process


//ROUTES = user related
//directed to a function in controllers
router.get('/', postLogin);		
router.get('/register', postRegister);	


module.exports = router;