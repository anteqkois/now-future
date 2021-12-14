import axios from 'axios';

//Headers narazie nie potrzebne, JWT sprawdzane w inny sposób

// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
// };

export const get = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const post = async (url, body) => {
  const { data } = await axios.post(url, body);
  return data;
};

export const put = async (url, body) => {
  const { data } = await axios.put(url, body);
  return data;
};

export const remove = async (url) => {
  const { data } = await axios.delete(url);
  return data;
};
