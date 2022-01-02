/* eslint-disable import/no-anonymous-default-export */
import api from './config.js';

export const get = (id) => api.get(`/posts/${id}`);

export const getAll = () => api.get('/posts');

export const create = (body) => api.post('/posts', body);

export const update = (id, body) => api.post(`/posts/${id}`, body);

export const remove = (id) => api.delete(`/posts/${id}`);

export const addComment = (id, body) => api.post(`/posts/${id}/comments`, body);
export const addCategory = (id, body) => api.post(`/posts/${id}/categories`, body);
export const addStar = (id, body) => api.post(`/posts/${id}/stars`, body);

export const removeComment = (id, body) => api.delete(`/posts/${id}/comments`, body);
export const removeCategory = (id, body) => api.delete(`/posts/${id}/categories`, body);
export const removeStar = (id, body) => api.delete(`/posts/${id}/stars`, body);

export default {
    get,
    getAll,
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
