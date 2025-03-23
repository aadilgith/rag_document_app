import axios from "axios";

const API_URL = "http://localhost:8001/qa";

export const askQuestion = async (question: string) => {
  const response = await axios.post(`${API_URL}`, { question });
  return response.data;
};
