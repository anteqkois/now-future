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

export const removeComment = (idPost, idComment) => api.delete(`/posts/${idPost}/comments/${idComment}`);
export const removeCategory = (idPost, idCategory) => api.delete(`/posts/${idPost}/categories/${idCategory}`);
export const removeStar = (idPost, idUser) => api.delete(`/posts/${idPost}/stars/${idUser}`);

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
