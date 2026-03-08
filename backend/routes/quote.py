from fastapi import APIRouter
from models.schemas import QuoteRequest

router = APIRouter()

@router.post("/quote")
async def submit_quote(data: QuoteRequest):
    # TODO: Add email sending via smtplib or SendGrid
    print(f"[QUOTE] From: {data.name} | {data.email} | Type: {data.project_type}")
    return {"success": True, "message": "Quote request received successfully"}
