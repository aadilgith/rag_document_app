import { useState } from "react";
import { uploadDocument } from "../api/document";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (file) await uploadDocument(file);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Upload Document</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="bg-green-500 text-white p-2 ml-2" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
