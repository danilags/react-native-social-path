import axios from 'axios';

import { GET_NEWS }  from './constants.js';

export const fetchNews = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  let url1 = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=38ad236884974c379b8fda98079c28bc'
  let url2 = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=38ad236884974c379b8fda98079c28bc'

  const link = [url1, url2]
  const num = Math.round(Math.random())
  const fixurl = link[num]
  axios.get(fixurl)
    .then(res =>  dispatch(getNews(res.data.articles)))
    .catch(err => { console.log(err)})
}

export const getNews = news => ({
    type: GET_NEWS,
    payload: news
})
