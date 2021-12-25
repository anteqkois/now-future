import database from '../config/database.js';
import Category from '../database/models/category.js';
import { createApiError, handleValidationErrors } from '../middlewares/errors.js';

const findAll = async (req, res, next) => {
    const data = await Category.find().select('_id name createdAt updatedAt');
    return res.status(200).send(data);
};

const find = async (req, res, next) => {
    const category = await Category.find({
        _id: req.params.id,
    }).select('_id name createdAt updatedAt');
    console.log(category);
    !category[0] && createApiError('Nie znaleziono kategorii', 404);

    return res.status(200).send(category);
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
const remove = async (req, res, next) => {
    try {
        const category = await Category.deleteOne({
            _id: req.params.id,
        });
        category.deletedCount === 0 && createApiError('Nie znaleziono kategorii w bazie danych', 404);
        return res.status(201).send({ data: 'Usunięto kategorię' });
    } catch (error) {
        createApiError('Nie znaleziono kategorii w bazie danych', 404);
    }
};

export default { create, find, findAll, update, remove };
