# Seed Application

Seed application with basic CRUD functionality
Basic skeleton used by most web applications. Contains Create, Reade, Update and Delete capabilities with MySQL Database.

## Includes
* Forms
* Handlebar templates
* Http sessions
* Basic CRUD using Mysql
  * include a basic mysql database script
  * 2-3 database tables linked with foreign keys
  * example of how to create database and username/password
* Configured to use Boostrap CSS framework
* Basic navigation
* Responsive layout support
* Error handling
* The port number it run on should be configurable using an environment variable.


* Authentication using middleware
* Password encryption using bcrypt
* A basic user registration example

## Instructions

* Clone from github
* Setup the database - mysql -u user -p database < seedDb.sql
* install dependencies : `npm install`
* run the application: `nodemon app.js`
