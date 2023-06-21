# Node.js Server-side Application

- This is a simple server-side application built using Node.js without using Express. It provides various APIs to perform CRUD operations on a MySQL or PostgreSQL database. The application allows you to manage states and cities, with a relationship between the two tables.

# Prerequisites:-
### Before running this application, ensure that you have the following:

- Node.js installed on your system.:-
- MySQL or PostgreSQL database server installed and running.
- Proper credentials (username and password) for connecting to the database.

# Installation:-
### To install and set up the application, follow these steps:-

- Clone the repository: **$ git clone https://github.com/MayankSarvadhi/SimplaeCrudWithoutExpressJs.git**
- Navigate to the project directory: **$ cd ~/Desktop/Projects/crud_without_express**
- Install the dependencies: **$ npm install**

# Configuration:-
### Before running the application, you need to configure the database connection. Follow these steps:

- Open the config.js file in the project's root directory.
- Update the database object with your database credentials (username, password, host, port, etc.), based on the database you are using (MySQL or PostgreSQL).

# Database Setup
### To set up the database and create the required tables, follow these steps:

- Ensure that your MySQL or PostgreSQL server is running.
- Open a terminal and navigate to the project directory.
- Run the following command to create the tables: $ npm run setup-db

# Starting the Server:-
 **To start the server and run the application, use the following command:-** 
``` $ npm start ```

**The server will start running on:-** ``` http://localhost:8000 ```

# API Endpoints:-
### The following API endpoints are available:

- POST /api/v1/state_city/insertState: Create a new state.
- POST /api/v1/state_city/addCity: Create a new city.
- GET /api/v1/state_city/getState/: Get all states with their appropriate cities.
- GET /api/v1/state_city/getAllCity: Get all cities with their appropriate states.
- GET /api/v1/state_city/getSingaleState/: Get all cities for a selected state.
- GET /api/v1/state_city/singaleCity/: Get a selected city with its state.
- PUT /api/v1/state_city/updateData/: Update a state.
- PUT /api/v1/state_city/updateCity/: Update a city.
- DELETE /api/v1/state_city/deleteState/: Delete a state.
- DELETE /api/v1/state_city/destroyCity/: Delete a city.


# API Response Format:-
### All API responses will follow the following format:
```
{
  "status_code": 200,
  "data": {
    // Response data here
  },
  "message": "Success message"
} 
```
- **Response:**

```
{
     "status_code": 200,
        "data": {
                    "id": 1,
                    "name": "City Name",
                    "state_id": 1
                },
  "message": "Successfully created city!"
}
```

- The status_code represents the HTTP status code of the response, data contains the actual response data, and message provides additional information about the request outcome.
