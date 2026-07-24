import axios from 'axios';

export const fetchGalleryImages = async (limit = 100) => {
  try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=1&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return [];
  }
};