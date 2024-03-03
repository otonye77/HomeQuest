Apartment Management Application

This project is an Apartment Management Application that allows users to register, login, create, update, and delete their own apartment listings. Users can specify whether their apartment is available for rent or sale and manage their listings conveniently.


Features
User Registration: 
Users can register for an account to access the application.

User Login: 
Registered users can log in to the application securely.

Apartment Creation: 
Users can create their own apartment listings, specifying details such as availability for rent or sale.

Apartment Update: 
Users can update their existing apartment listings with new information or changes.

Apartment Deletion:
 Users can delete their apartment listings if they are no longer valid or available.

Simulated Payment:
 Payment simulation feature for demonstration purposes.


Tech Stack

Frontend:
React: JavaScript library for building user interfaces.

Redux Toolkit: State management library for managing application state.

Backend:

Node.js: JavaScript runtime for server-side development.

Sequelize: Promise-based ORM for Node.js to interact with the database.

Database:

PostgreSQL: Relational database management system.

Installation
To run the project locally, follow these steps:

Server Setup:

Navigate to the server directory: cd server

Install dependencies: npm install

Create a .env file at the root folder of the server direction for jwt

Start the server: npm start

Frontend Setup:

Navigate to the client directory: cd client

Install dependencies: npm install

Start the frontend server: npm dev

Database Setup:

Ensure you have PostgreSQL installed and running.

Create a new database for the application.

Usage
Register for an account if you are a new user.

Log in with your credentials.

Once logged in, you'll be able to:

Create a new apartment listing by providing details such as address, price, availability, etc.

Update existing apartment listings if there are any changes.

Delete apartment listings that are no longer valid or available.

Simulate payment for demonstration purposes.
