import axios, { AxiosHeaders } from 'axios';

export async function getImages(value, page) {
  const images = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '38442536-4b02577f719ec61ae18bd0825',
      q: `${value}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page,
    },
  });
  
return images
}