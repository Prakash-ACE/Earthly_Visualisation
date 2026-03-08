from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import quote, contact

app = FastAPI(title="Earthly Visualisation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quote.router, prefix="/api")
app.include_router(contact.router, prefix="/api")

@app.get("/health")
def health_check():
    return {"status": "ok"}
