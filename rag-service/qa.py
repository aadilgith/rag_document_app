from transformers import pipeline

qa_pipeline = pipeline("text-generation", model="meta-llama/Llama-2-7b")

def answer_question(question: str):
    response = qa_pipeline(f"Answer: {question}")
    return {"answer": response[0]["generated_text"]}
