import database from '../config/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../database/models/user.js';
import { createApiError, handleValidationErrors } from '../middlewares/errors.js';

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        !auth && next(createApiError(`Niepoprawny e-mail lub hasło`, 400));

        const accessToken = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
            expiresIn: 3600,
        });

        const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: 43200,
        });

        res.cookie('JWT', accessToken, {
            maxAge: 86400000,
            httpOnly: true,
        });

        const { username, _id, role } = user;

        return res.status(200).send({ email, username, _id, role });
    }
    !user && next(createApiError(`Niepoprawny e-mail lub hasło`, 400));
};

const logout = (req, res) => {
    res.cookie('JWT', '', {
        maxAge: 1,
        httpOnly: true,
    });

    return res.status(200).send('Zostałeś wylogowany');
};

const signup = async (req, res, next) => {
    const { email, username, password, role } = req.body;

    try {
        const user = await User.create({ email, username, password, role });
    } catch (error) {
        error = handleValidationErrors(err);
        return res.status(400).json({ error });
    }
    next();
};

export default { login, logout, signup };

// const refreshToken = async (req, res, next) => {
//   // Nie potrzebna funkcja przy tej skali projektu (lepiej czas przeznaczyć na coś innego)

//   !req.cookies.JWT && next(createApiError(`Nie poprawny login lub hasło`, 400));
// };
