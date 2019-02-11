# graphql-nodejs-express
Basic CRUD using graphql + nodeJS + express

1. To install dependencies

    npm install
    
2. To run server

    node server.js
    
3. POST request - To create User

Request:

mutation {
  post(id: "123", name: "selvi"){id}
}

Response:

{
  "data": {
    "post": {
      "id": "123"
    }
  }
}

4. GET request - Get all Users - Fields id,name

Request:

{get {
  id
  name
}}

Response:

{
  "data": {
    "get": [
      {
        "id": "123",
        "name": "muthu"
      },
      {
        "id": "123",
        "name": "selvi"
      },
      {
        "id": "345",
        "name": "MS"
      }
    ]
  }
}

5. GET request - GET all Users - Field id

Request:

{get {
  id
}}

Response:
{
  "data": {
    "get": [
      {
        "id": "123"
      },
      {
        "id": "345"
      }
    ]
  }
}

6. UPDATE request - update user

Request:

mutation {
  update(id: "123", name: "muthu",newId:"newid",newName:"MS")
}

Response 1:

{
  "data": {
    "update": "Update failed! Id, Name not available"
  }
}

Response 2:

{
  "data": {
    "update": "Updated user successfully!"
  }
}

7. DELETE request - delete User

Request:

mutation {
  remove(id:"123",name:"muthu")
}

Response 1:

{
  "data": {
    "remove": "Delete failed! Id, Name not available"
  }
}

Response 2:

{
  "data": {
    "remove": "Deleted user successfully!"
  }
}