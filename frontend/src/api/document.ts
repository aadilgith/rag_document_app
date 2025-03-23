import axios from "axios";

const API_URL = "http://localhost:3000/documents";

export const uploadDocument = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  await axios.post(`${API_URL}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
