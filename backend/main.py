from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import quote, contact

import os

app = FastAPI(title="Earthly Visualisation API")

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
env_origins = os.getenv("ALLOWED_ORIGINS")
if env_origins:
    allowed_origins.extend([origin.strip() for origin in env_origins.split(",")])

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quote.router, prefix="/api")
app.include_router(contact.router, prefix="/api")

@app.get("/health")
def health_check():
    return {"status": "ok"}
