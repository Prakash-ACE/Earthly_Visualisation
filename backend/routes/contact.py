from fastapi import APIRouter
from models.schemas import ContactRequest
from utils.sheets import post_to_sheets

router = APIRouter()

@router.post("/contact")
async def submit_contact(data: ContactRequest):
    payload = {
        "type": "Contact",
        "name": data.name,
        "email": data.email,
        "phone": data.phone,
        "details": data.message or ""
    }
    result = post_to_sheets(payload)
    print(f"[CONTACT] From: {data.name} | Result: {result}")
    return {"success": True, "message": "Message received and saved successfully"}
