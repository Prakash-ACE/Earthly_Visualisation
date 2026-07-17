from fastapi import APIRouter
from models.schemas import QuoteRequest
from utils.sheets import post_to_sheets

router = APIRouter()

@router.post("/quote")
async def submit_quote(data: QuoteRequest):
    details_str = f"Project Type: {data.project_type}"
    if data.description:
        details_str += f" | Description: {data.description}"
        
    payload = {
        "type": "Quote Request",
        "name": data.name,
        "email": data.email,
        "phone": data.phone,
        "details": details_str
    }
    result = post_to_sheets(payload)
    print(f"[QUOTE] From: {data.name} | Result: {result}")
    return {"success": True, "message": "Quote request received and saved successfully"}
