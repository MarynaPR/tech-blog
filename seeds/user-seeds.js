const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'summer',
        password: 'abc12345'
    },
    {
        username: 'winter',
        password: 'abc1234'
    }
]
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
module.exports = seedUsers;