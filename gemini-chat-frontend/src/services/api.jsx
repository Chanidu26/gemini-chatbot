import axios from 'axios';

const API_URI = 'http://localhost:8080/api/qna/ask'

export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URI, { question });
    return response.data;
  } catch (error) {
    console.error('Error fetching response:', error);
    throw error;
  }
}

