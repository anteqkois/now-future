import database from '../config/database.js';

import Post from '../database/models/post.js';

// ADD FIND BY USER, CATEGORY, POPULARITY
const find = async (req, res, next) => {
    const data = await Post.find({
        category: req.params.category,
    })
        .populate('user', 'email username role')
        .populate('categories', 'name')
        .populate('stars', 'email username role')
        .populate('comments');

    return res.status(200).send(data);
};

// const findUser = async (req, res, next) => {
//     const data = await Post.find({
//         nick: req.params.user,
//     })
//         .populate('categories', 'category')
//         .populate('stars', 'user')
//         .populate('comments', 'comment');;

//     return res.status(200).send(data);
// };

const findAll = async (req, res, next) => {
    const data = await Post.find()
        .populate('user', 'email username role')
        .populate('categories', 'name')
        .populate('stars', 'email username role')
        .populate('comments');

    return res.status(200).send(data);
};

const create = async (req, res, next) => {
    console.log(req.body);
    const post = await new Post({
        user: req.body.user,
        title: req.body.title,
        content: req.body.content,
        categories: req.body.categories,
    }).save();
    return res.status(201).send({ data: post });
};

export default { create, findAll, find };
