import axios from 'axios';

const {VUE_APP_NEWS_API_KEY} = process.env
export const getTopHeadlines = async () => {
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=ua&pageSize=10&page=1&apiKey=${VUE_APP_NEWS_API_KEY}`
  );
  return data;
};
