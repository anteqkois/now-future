const serverURL = '/api/v1';

// EXAMPLE
// export const projects = (slug) => {
//   return slug ? `${serverURL}/projects/${slug}` : `${serverURL}/projects`;
// };

export const authorization = () => {
  return `${serverURL}/authorization`;
};
