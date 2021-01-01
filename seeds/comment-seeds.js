const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'great article',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'thanks for the info',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'look forward to your other posts',
        user_id: 2,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;