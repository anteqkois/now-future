import database from '../config/database.js';
import Example from '../database/models/example.js';
import { createApiError } from '../middlewares/errors.js';

const findAll = async (req, res, next) => {
  const data = await Example.find();

  !data && next(createApiError(`Nie znaleziono w bazie`, 404));
  req.data = data;
  return res.status(200).send(data);
};

const findOne = async (req, res, next) => {
  const data = await Example.findOne({
    slug: req.params.slug,
  });

  !data &&
    next(
      createApiError(
        `Nie znaleziono w bazie po slugu: ,,${req.params.slug}''`,
        404,
      ),
    );
  req.data = data;
  return res.status(200).send(data);
};

const create = async (req, res, next) => {
  !req.body && next(createApiError(`Brak danych`, 422));

  const example = await new Example({
    title: req.body.title,
  }).save();
  return res.status(201).send({ data: example });
};

export default { findAll, findOne, create };
