import database from '../config/database.js';
import Category from '../database/models/category.js';
import { createApiError, handleValidationErrors } from '../middlewares/errors.js';

const findAll = async (req, res, next) => {
    const data = await Category.find();
    return res.status(200).send(data);
};

const find = async (req, res, next) => {
    const data = await Category.find({
        _id: req.params.id,
    });

    return res.status(200).send(data);
};

const create = async (req, res, next) => {
    try {
        const category = await new Category({
            name: req.body.name,
        }).save();
        return res.status(201).send({ data: category });
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
};

const update = async (req, res, next) => {

    try {
        const category = await Category.updateOne(
            {
                _id: req.params.id,
            },
            {
                name: req.body.name,
            },
            {
                runValidators: true,
            },
        );
        return res.status(201).send({ data: category });
    } catch (error) {
        error = handleValidationErrors(error);
        return res.status(400).json({ error });
    }
};

export default { create, find, findAll, update };
