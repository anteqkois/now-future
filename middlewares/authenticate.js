import { createApiError } from '../middlewares/errors.js';
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const token = req.cookies.JWT;

  (token === null || token === undefined) &&
    next(createApiError(`Brak wymaganej autoryzacji użytkownika`, 401));

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    err && next(createApiError(`Brak wymaganej autoryzacji użytkownika`, 403));

    req.user = user;
    next();
  });
};

export default authenticate;
