import axios from 'axios';

export const getDog = async () => {
  try {
    const config = {
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/image/random',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCat = async () => {
  try {
    const config = {
      method: 'GET',
      url: 'https://api.thecatapi.com/v1/images/search',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

