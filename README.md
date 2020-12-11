# tech-blog

## Images :camera_flash:

The following image shows the web application's appearance:

![Screenshot](config/Screenshot1.png)

## Description :page_with_curl:

This application features a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It is deployed to Heroku. This application’s folder structure follows the Model-View-Controller paradigm.

Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

 The code uses the express-handlebars to use Handlebars.js for Views, the MySQL2 and Sequelize packages to connect to a MySQL database for Models, and creates an Express.js API for Controllers.

The dotenv package is used for environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages to add authentication.

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
** 
* `feature/passowrd` ##hashing -run `npm install bcrypt` -addcode to `user-routes.js` post/login and `user.js` checkPassword(loginPw)
* create `post.js`, require it in `models/index.js`, create`post-routes.js`, require in `api/index`, add findAll(), after running mysql -u root -p, `use tech_blog_db;`(msg-db changed if sucessful), insert: `INSERT INTO post (title, post_url, user_id, created_at, updated_at) VALUES ("connect-session-sequelize",`
`"https://www.npmjs.com/package/connect-session-sequelize", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);` to GET post, rest of CRUD, in findAll()add `order: DESC` for latest posts first.
* `Vote.js`model 
* public/stylesheets/style.css
* npm i express-handlebars, update server.js
* view/layout/main.handlebars

# User Story
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 