/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const rootApi = axios.create({ baseURL: '/api/v1', timeout: 5000 });

const get = async (url) => rootApi.get(url);

const post = async (url, body) => rootApi.post(url, body);

const put = async (url, body) => rootApi.put(url, body);

const remove = async (url) => rootApi.delete(url);

export default { get, post, put, remove };
