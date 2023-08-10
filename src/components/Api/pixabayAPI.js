import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37748160-772b8b619fbcf8c997c27bd4b';
const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

export async function getImages(textValue, page) {
  const response = await axios.get(
    `${BASE_URL}?q=${textValue}&page=${page}&key=${API_KEY}${OPTIONS}`
  );
  return response;
}
