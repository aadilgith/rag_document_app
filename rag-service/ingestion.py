from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vector_store = FAISS(embedding_function=embeddings.embed_query)

def ingest_document(file_path: str):
    with open(file_path, 'r') as f:
        text = f.read()
    vector_store.add_texts([text])
    return {"message": "Document ingested"}
