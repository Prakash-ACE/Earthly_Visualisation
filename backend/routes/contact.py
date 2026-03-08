from fastapi import APIRouter
from models.schemas import ContactRequest

router = APIRouter()

@router.post("/contact")
async def submit_contact(data: ContactRequest):
    # TODO: Add email sending via smtplib or SendGrid
    print(f"[CONTACT] From: {data.name} | {data.email}")
    return {"success": True, "message": "Message received successfully"}
