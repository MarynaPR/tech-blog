const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        email: 'summer@test.com',
        username: 'summer',
        password: 'abc12345'
    },
    {
        email: 'winter@yahoo.com',
        username: 'winter',
        password: 'abc1234'
    }
]
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
module.exports = seedUsers;