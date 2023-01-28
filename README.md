# Documentation

This project was developped using React and React-Redux-Toolkit

## Backend

In the project directory, you can run:

### `cd backend`

Change the current directory to the backend directory.

### `npm install`

install dependencies

### `nodemon index.js `

Run backend in order to create connection with database

In the project directory, you can find:

index.js : where we implemented the `Node.js/Express` server , specified port : 4000 , connected to `MongoDB` using `Mongoose` and finally implemented `endpoints`

employees.js : created the employee schema



## Client

In the project directory, you can run:

### `npm install`

install dependencies

### `npm start`

run application

### Technology

React 18/17

react-redux 8

redux-toolkit 1.8.5

react-router-dom 6

axios 0.27.2

bootstrap 5

### Project structure

 ![micro](https://i.postimg.cc/wTQS4sYz/structure-removebg-preview.png)
 
– App is the container that has Router & navbar.

– There are 4 components: Employees, cardEmployee,cardItemComponent,DetailsEmployee, AddComponent.

– http-common.js initializes axios with HTTP base Url and headers.

_router.js : since we are using react-router-dom v6, the support for props.match.params or props.history has been deprecated.So we need a wrapper (HOC) that can use new useful hooks.

– EmployeeService has methods for sending HTTP requests to the Apis.

About Redux elements :

– store.js this is where we create the Redux store instance with reducers

– Reducer that will updates a different part of the application state corresponding to dispatched action.

 
