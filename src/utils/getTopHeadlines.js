import axios from 'axios';

const { VUE_APP_NEWS_API_KEY } = process.env
export const getTopHeadlines = async () => {
  const data = await axios.get(
    `http://api.mediastack.com/v1/news?access_key=${VUE_APP_NEWS_API_KEY}&keywords=tennis&countries=us,gb,de`
  );
  return data;
};