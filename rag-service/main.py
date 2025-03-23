from fastapi import FastAPI
from ingestion import ingest_document
from qa import answer_question

app = FastAPI()

@app.post("/ingest/")
async def ingest(file_path: str):
    return ingest_document(file_path)

@app.post("/qa/")
async def qa(question: str):
    return answer_question(question)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
