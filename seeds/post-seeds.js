const { Post } = require('../models');
const sequelize = require('../config/connection');

const postdata = [
    {
        title: 'how to code',
        post_body: 'text goes here',
        user_id: 1
    },
    {
        title: 'coding bootcamp',
        post_body: 'text goes here',
        user_id: 2
    }
]
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;