import axios from 'axios';

const {VUE_APP_NEWS_API_KEY} = process.env
export const getTopHeadlines = async (page = 1) => {
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${page}&apiKey=${VUE_APP_NEWS_API_KEY}`
  );
  return data;
};
