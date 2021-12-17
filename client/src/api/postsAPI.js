import { posts } from './routes';
import * as api from './api';

export const getAll = () => {
  return api.get(posts());
};

export const get = (slug) => {
  return api.get(posts(slug));
};

export const post = (data) => {
  return api.post(posts(), data);
};

export const put = (slug, data) => {
  return api.put(posts(slug), data);
};

export const remove = (slug) => {
  return api.remove(posts(slug));
};
