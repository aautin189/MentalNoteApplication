//IMPORTING
const express = require('express');				//import module: express
const path = require('path');					//import module: path
const bodyParser = require('body-parser');		//import module: body parser
const session = require('express-session');		//** from authentication


const port = process.env.PORT || 3000;				//set port
const app = express();								//create express app


function localhostHandler(request,response,next){
	response.header('Access-Control-Allow-Origin', '*');
	next();
}


const routes = require('./routes/routes');		//export router as module
//const userRoutes = require('./')

		


//** from authentication
function setupApp(){
	app.set('view-engine', 'ejs');
	app.use( bodyParser.urlencoded( {extended:false}));
	const sessionConfig = { secret:'secret-word', resave:false, saveUninitialized:true };
	app.use( session(sessionConfig) );
	
	app.use(bodyParser.json());							//use body parser to read json
	app.use(bodyParser.urlencoded({extended:false}));	//use body parser to read url

	app.use(localhostHandler);
	
	app.use('/', routes);
							
}

setupApp();	//** from authentication

app.listen(port,() => console.log(`listening on...${port}`));			//app listen on port


