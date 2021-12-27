/* eslint-disable import/no-anonymous-default-export */
import api from './config.js';

export const login = (body) => {
    return api.post('/auth/login', body);
};

export const logout = () => {
    return api.get('/auth/logout');
};

export const signup = (body) => {
    return api.post('/auth/signup', body);
};

export default { login, logout, signup };
