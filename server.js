var express = require('express');
var graphqlHTTP = require('express-graphql');
var schema = require('./schema.graphql'); 


let users = [{"id":"123","name":"muthu"}]

// The root provides a resolver function for each API endpoint
var root = {
    post: (id,name) => addUser(id,name),
	get:() => getAllUsers(),
	update: (id,name,newId, newName) => updateUser(id,name,newId, newName),
	remove: (id,name) => removeUser(id,name)
};

var addUser = function({id,name}){
  const user = {
    id: id,
    name: name
  }
  users.push(user)
  return user;
    
}

var getAllUsers = function() {
    return users;
  }
  
var updateUser = function({id,name,newId, newName}){
 let flag = false;
  for(var i=0;i< users.length;i++){
	  if((users[i].id == id) &&(users[i].name == name)  ){
		flag = true;
		users[i].id  = newId;
		users[i].name= newName;	
		break;
	  }
  }
  if(flag){
	  return "Updated user successfully!";
  }else{
	  return "Update failed! Id, Name not available"; 
  }
         
}

var removeUser = function({id,name}){
  let flag = false;
  for(var i=0;i< users.length;i++){
	  console.log(users[i].id,users[i].name);
	  if((users[i].id == id) &&(users[i].name == name)  ){
		flag = true;	
		delete users[i];
		break;
	  }
  }
  if(flag){
	  return "Deleted user successfully!";
  }else{
	  return "Delete failed! Id, Name not available"; 
  }

}


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');