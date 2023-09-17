import axios from 'axios';

const {VUE_APP_NEWS_API_KEY} = process.env
export const getTopHeadlines = async (page = 1) => {
  const offset=page*10
  const data = await axios.get(

    `http://api.mediastack.com/v1/news?access_key=${VUE_APP_NEWS_API_KEY}&keywords=tennis&countries=us,gb,de&limit=10&offset=${offset}`
  );
  return data;
};