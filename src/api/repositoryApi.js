import api from '.';

export const fetcher = async ({ key, checkBox }) => {
  if (key) {
    const { data } = await api.get(`${key}`);
    if (data.items.length === 0) {
      return 'Repository not found!';
    }
    return checkBox ? data : data.items[0];
  }
  return null;
};

export const getKeyRepo = ({ checkBox, input }) => {
  if (checkBox) {
    return { key: `/repos/${input}`, checkBox };
  }
  return { key: `/search/repositories?q=${input}&per_page=1`, checkBox };
};
