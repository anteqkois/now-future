const serverURL = '/api/v1';

// EXAMPLE
export const posts = (slug) => {
  return slug ? `${serverURL}/posts/${slug}` : `${serverURL}/posts`;
};

export const comments = () => {
  return `${serverURL}/comments/`;
};

export const authorization = () => {
  return `${serverURL}/authorization`;
};
