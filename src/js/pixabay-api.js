import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54943904-4c7872f3e0f1bf375155a9c6b';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(BASE_URL, { params }).then(res => res.data);
}
