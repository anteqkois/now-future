import database from '../config/database.js';

import Comment from '../database/models/comment.js';
import { handleValidationErrors, createApiError } from '../middlewares/errors.js';

const findAll = async (req, res, next) => {
    try {
        const data = await Comment.find()
            .select('user content stars createdAt updatedAt')
            .populate('user', 'email username role')
            .populate('stars', 'email username role');

        return res.status(200).send(data);
    } catch (error) {
        createApiError('Nie znaleziono komentarzy w bazie danych', 404);
    }
};
const find = async (req, res, next) => {
    try {
        const data = await Comment.find({
            _id: req.params.id,
        })
            .select('user content stars createdAt updatedAt')
            .populate('user', 'email username role')
            .populate('stars', 'email username role');

        return res.status(200).send(data);
    } catch (error) {
        createApiError('Nie znaleziono komentarza w bazie danych', 404);
    }
};

const create = async (req, res, next) => {
    try {
        const comment = await new Comment({
            user: req.body.userId,
            content: req.body.content,
        }).save();

        req.body.comment = comment;
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
    next();
};

const update = async (req, res, next) => {
    try {
        const comment = await Comment.updateOne(
            {
                _id: req.params.id,
            },
            {
                content: req.body.content,
            },
            {
                runValidators: true,
            },
        );
        return res.status(201).send(comment);
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
};

const remove = async (req, res, next) => {
    try {
        const comment = await Comment.deleteOne({
            _id: req.params.idComment,
        });
        comment.deletedCount === 0 && createApiError('Nie znaleziono komentarza w bazie danych', 404);
        return res.status(201).send({ data: 'Usunięto komentarz' });
    } catch (error) {
        createApiError('Nie znaleziono komentarza w bazie danych', 404);
    }
};

const addStar = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        comment.stars.push(req.body.user);
        comment.save();
        return res.status(201).send({ data: comment });
    } catch (error) {
        createApiError('Nie komentarza postu w bazie danych', 404);
    }
};

const removeStar = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        comment.stars.pull(req.params.idUser);
        comment.save();
        return res.status(201).send({ data: 'Usunięto gwiazdkę z komentrza' });
    } catch (error) {
        createApiError('Nie znaleziono komentarza postu w bazie danych', 404);
    }
};

export default { create, find, findAll, update, remove, addStar, removeStar };
