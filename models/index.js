//this file is responsible for importing the User model and exporting an object with it as a property
const User = require("./User");
const Post = require("./Post");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'//user-id in the Post model
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Post };