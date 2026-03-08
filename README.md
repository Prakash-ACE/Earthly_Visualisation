# Earthly Visualisation — Portfolio Website

## Quick Start

### Frontend
cd frontend
npm install
npm run dev
# → Runs at http://localhost:5173

### Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
uvicorn main:app --reload
# → Runs at http://localhost:8000
# → API docs at http://localhost:8000/docs

## TODO Before Launch
- [ ] Replace YOUR_CALENDLY_LINK in useCalendly.ts
- [ ] Replace placeholder email/phone/address in Contact section
- [ ] Replace picsum.photos images with real portfolio renders
- [ ] Replace placeholder client logos with real brand logos
- [ ] Add real pricing tiers
- [ ] Configure SMTP credentials for form email notifications
- [ ] Update CORS origin from localhost:5173 to production domain
