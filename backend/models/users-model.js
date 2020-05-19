
class Users{
	

	constructor(){
		this.users = [];	//short term, create an empty array

	}
	
	//add new user to the Users{} object @ index == email
	add(name,email,password){
		
		const user = {id:id, email:email, password:password};	//creating a user object in short-term memory
		
		this.users.push(user);	//taking this users array and pushing a user object onto it
		this.users.localStorage.setItem("${email}",password);	//taking this users array and

	}

}



module.exports = new Users();
