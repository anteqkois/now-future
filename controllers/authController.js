import database from '../config/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../database/models/user.js';
import { createApiError } from '../middlewares/errors.js';

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    !auth && next(createApiError(`incorrect password`, 400));

    const accessToken = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
      expiresIn: 3600,
    });

    const refreshToken = jwt.sign(
      { email: email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: 43200,
      },
    );

    res.cookie('JWT', accessToken, {
      maxAge: 86400000,
      httpOnly: true,
    });

    return res.status(200).send('You are successfuly logged');
  }
  !auth && next(createApiError(`incorrect email`, 400));
};

const logout = (req, res) => {
  res.cookie('JWT', '', {
    maxAge: 1,
    httpOnly: true,
  });

  return res.status(200).send('You are successfuly logout');
};

const signup = async (req, res, next) => {
  !req.body.email && next(createApiError(`No require email`, 422));
  !req.body.password && next(createApiError(`No require password`, 422));

  const { email, password } = req.body;

  const user = await User.create({ email, password });

  !req.body.email &&
    next(createApiError(`Something went wrong, user wasn't create !`, 500));

  next();
};

export default { login, logout, signup };

// const refreshToken = async (req, res, next) => {
//   // Nie potrzebna funkcja przy tej skali projektu (lepiej czas przeznaczyć na coś innego)

//   !req.cookies.JWT && next(createApiError(`Nie poprawny login lub hasło`, 400));
// };
