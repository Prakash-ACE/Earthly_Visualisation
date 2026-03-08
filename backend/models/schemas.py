from pydantic import BaseModel, EmailStr
from typing import Optional

class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    project_type: str
    description: Optional[str] = None

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: Optional[str] = None
