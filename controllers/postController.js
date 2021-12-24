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
const update = async (req, res, next) => {
    try {
        const post = await Post.updateOne(
            {
                _id: req.params.id,
            },
            {
                title: req.body.title,
                content: req.body.content,
                categories: req.body.categories,
            },
            {
                runValidators: true,
            },
        );
        return res.status(201).send({ data: post });
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
};
const remove = async (req, res, next) => {
    try {
        const post = await Post.deleteOne({
            _id: req.params.id,
        });
        post.deletedCount === 0 && createApiError('Nie znaleziono postu w bazie danych', 404);
        return res.status(201).send({ data: 'Usunięto post' });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
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

const removeComment = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.comments.pull(req.params.idComment);
        post.save();
        next();
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

const addStar = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.stars.push(req.body.user);
        post.save();
        return res.status(201).send({ data: post });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

const removeStar = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.stars.pull(req.params.idUser);
        post.save();
        return res.status(201).send({ data: 'Usunięto gwiazdkę z postu' });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

const addCategory = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.categories.push(req.body.categories);
        post.save();
        return res.status(201).send({ data: post });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

const removeCategory = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        post.categories.pull(req.params.idCategory);
        post.save();
        return res.status(201).send({ data: 'Usunięto kategorię z postu' });
    } catch (error) {
        createApiError('Nie znaleziono postu w bazie danych', 404);
    }
};

export default {
    findAll,
    find,
    create,
    update,
    remove,
    addComment,
    removeComment,
    addStar,
    removeStar,
    addCategory,
    removeCategory,
};
