# tech-blog

## Images :camera_flash:

The following image shows the web application's appearance:

![Screenshot](config/Screenshot1.png)

## Description :page_with_curl:

This code features a back end for an e-commerce site. With working Express.js API it configures the use of Sequelize to interact with a MySQL database.

## Technology Used :label: 

* css
* node
* handlebars
* mySQL
* sequilize
* dotenv
* bcrypt

## Resources Used :wrench: 

* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [mySQL2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize) 
* [dotenv package](https://www.npmjs.com/package/dotenv)
* [bcrypt package](https://www.npmjs.com/package/bcrypt)
* [express-session](https://www.npmjs.com/package/express-session)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [nodemon package](https://www.npmjs.com/package/nodemon)
* [emoji-cheat-sheet:for readme](https://github.com/ikatyang/emoji-cheat-sheet)

## Installation :electric_plug:

* `npm i express sequelize mysql2`
* `npm i nodemon`
* `npm i dotenv`
* `npm i express-session`
* `npm i express-handlebars`
* `npm i bcrypt`
* `npm i connect-session-sequelize`
* run `npm start` at the root of the directory to connect to the server

## Testing :repeat_one:


## Contribution :heavy_plus_sign: 

Contributions, issues and feature requests are welcome. 
Check out [issues page](https://github.com/MarynaPR/tech-blog/issues). 
Give :star: if you found this project useful. 

### Questions :question: 
Feel free to contact me with any questions via email :e-mail: pryadkamaryna@gmail.com. 
  
If you'd like to see my other projects, please visit my :octocat: 
[GitHub](https://github.com/MarynaPR?tab=repositories)


## Set up steps:

At root of the folder:
* Run `npm init` (or `npm init -y`  manually update your package.json to "main": "server.js" instead of "main": "index.js")
* Once that's done, update package.json with the following script:
`"start": "node server.js"`
* Create a .gitignore file, and add the following files and folders:
`node_modules`
`.DS_Store`
* Create a `server.js` file.
* Create folders called `models`, `routes`, `config`, and `db`.
* Install the dependencies by using the following command:
`npm install express sequelize mysql2`
* in `db` create file `schema.sql`( `mysql -u root -p`, `source db/schema.sql`, `show databases;`, `quit`)
* in config -file `connection.js`-create sql connection
* run `npm i dotenv`, create file `.env`, add to gitignore
* in`models` create `Users.js` and `index.js`
* `routes/api/user-routes.js`CRUD