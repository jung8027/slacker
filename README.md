## Slackers -- A Slack Clone

**Features:**
* Different Teams with different channels.

**Technologies and frameworks:**

* Backend:
  * Node.js
  * Express framework
  * Socket.io
  * Postgres Database
  * Sequelize

A  node.js application using express framework and [Socket.io](http://socket.io) for realtime communications. 

* Frontend:
  * React
  * Redux
  * React Router
  * Sass
  * Socket.io client

# Access Code Generator
This project was built off of [Access Code Generator](https://github.com/C4Q/access-code-generator)! A scaffolding built using Node, Express, React, and Sequelize.

## Database Setup
You'll first need to setup a database for the project. Then, in the `back/env/development.js` file you'll need to change the 'DATABASE_URI' to your specific database setup.

## Start
First: `npm install`
To start: `npm start`

## Testing
You can add new tests in the `test` folder.

To test: `npm test`

Tests are also automatically called as part of `npm start`

##License:
All content of this project is licensed for use under the MIT license.
All registered trademarks belong to their respective owners.
