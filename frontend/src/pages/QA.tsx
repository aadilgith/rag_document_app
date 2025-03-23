import { useState } from "react";
import { askQuestion } from "../api/qa";

const QA = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const response = await askQuestion(question);
    setAnswer(response.answer);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Ask a Question</h2>
      <input className="border p-2 w-full" placeholder="Enter your question" onChange={(e) => setQuestion(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={handleAsk}>Ask</button>
      {answer && <p className="mt-4 bg-gray-100 p-4">{answer}</p>}
    </div>
  );
};

export default QA;
