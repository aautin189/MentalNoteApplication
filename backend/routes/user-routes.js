//The Router:
//manages the app's endpoints


var express = require('express');
var router = express.Router();
const controller = require('../controllers/user-controllers');



//GET HTTP REQUESTS
//GET these views
//the client is requesting these urls
router.get('/', controller.getIndex);
router.get('/login', controller.getLogin);
router.get('/register', controller.getRegister);


//POST HTTP REQUESTS
//POST from these views
//the frontend is trying to login OR trying to create new user
router.post('/login', controller.postLogin);
router.post('/register', controller.postRegister);

module.exports = router;