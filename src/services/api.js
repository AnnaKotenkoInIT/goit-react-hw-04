import axios from 'axios';

const MY_API_KEY = 'Wq4lQCMkjgCSQXk9AKXLT-ikcytdwbY69-YimKn7KmA';

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        client_id: MY_API_KEY,
        page,
        per_page: 16,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
