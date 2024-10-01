# API Node.JS

## API

#### /register
* `POST` : Create new User 
  + Parameters
    + user (string, required) 
    + pwd (string, required)
   
#### /auth 
* `POST` : Authentication user, will return the access token which will be valid for 30 seconds.
  + Parameters
    + user (string, required) 
    + pwd (string, required)
  + Response
    + accessToken (string)   
  

#### /employee - This route need the token returned in authentication. Must be of the type Bearer Token and the user must have the role  "Admin": 5150 or "Editor": 1984
* `GET` : Get all employees
* `POST` : Create new employee
   + Parameters 
      + firstname (string, required) 
      + lastname (string, required)
* `PUT` : Update a project
   + Parameters
      + id (string,required)  
      + firstname (string, required) 
      + lastname (string, required)
* `DELETE` : Delete employee
 + Parameters
    + id (string,required)



