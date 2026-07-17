import requests

GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbztBA6I09m39-rhG_5wDK_PnO07xXCcVZNpDcEJwJv7Vrd0ujzEs06Oi6OwlJqWtp43dA/exec"

def post_to_sheets(payload: dict):
    try:
        response = requests.post(GOOGLE_SHEETS_URL, json=payload, timeout=10)
        print(f"[GOOGLE SHEETS] Response: {response.status_code} | {response.text}")
        return response.json()
    except Exception as e:
        print(f"[GOOGLE SHEETS ERROR] Failed to send: {e}")
        return {"success": False, "error": str(e)}
