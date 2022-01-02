/* eslint-disable import/no-anonymous-default-export */
import api from './config.js';

export const get = (id) => api.get(`/comments/${id}`);

export const getAll = () => api.get('/comments');

export const update = (id, body) => api.post(`/comments/${id}`, body);

export const addStar = (id, body) => api.post(`/comments/${id}/stars`, body);

export const removeStar = (id, body) => api.delete(`/comments/${id}/stars`, body);

export default {
    get,
    getAll,
    update,
    addStar,
    removeStar,
};
