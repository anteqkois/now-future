import database from '../config/database.js';

import Post from '../database/models/post.js';
import { handleValidationErrors, createApiError } from '../middlewares/errors.js';

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
    try {
        const post = await new Post({
            user: req.body.user,
            title: req.body.title,
            content: req.body.content,
            categories: req.body.categories,
        }).save();
        return res.status(201).send({ data: post });
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
};

const addComment = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push(req.body.comment._id);
        post.save();
        return res.status(201).send({ data: post });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

const deleteComment = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.comments.pull(req.params.idComment);
        post.save();
        next();
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

export default { create, findAll, find, addComment, deleteComment };
