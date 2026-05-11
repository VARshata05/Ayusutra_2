# 🌿 AyuSutra — Lifespan, Guided

> **Ayu (आयु)** means *lifespan* in Sanskrit. AyuSutra is the *thread of your lifespan* —  
> a healthcare platform that connects you to hospitals, specialists, and health guidance.

---

## 📁 Project Structure

```
AyuSutra/
│
├── frontend/                        ← Pure HTML/CSS/JS (no framework)
│   ├── index.html                   ← Main app shell, all pages
│   ├── css/
│   │   └── style.css                ← All styles, variables, responsive layout
│   ├── js/
│   │   ├── app.js                   ← All app logic (auth, maps, chatbot, symptoms)
│   │   └── hospitals-data.js        ← 3,498 Karnataka govt. hospitals (CSV → JS)
│   └── data/
│       └── hospitals.csv            ← Original Karnataka hospital CSV (source data)
│
├── backend/                         ← Node.js + Express REST API
│   ├── server.js                    ← Entry point
│   ├── package.json
│   ├── .env.example                 ← Copy to .env and fill keys
│   ├── models/
│   │   └── index.js                 ← All 6 Mongoose schemas
│   ├── routes/
│   │   ├── auth.js                  ← POST /register, /login
│   │   ├── hospitals.js             ← GET /nearby, /search
│   │   ├── patients.js              ← History CRUD + file upload + AI summary
│   │   ├── symptoms.js              ← POST /analyze (scored analysis)
│   │   ├── chatbot.js               ← POST / (Anthropic-powered)
│   │   ├── bloodBanks.js            ← GET /nearby
│   │   └── diagnostics.js           ← GET /nearby, /search
│   ├── middleware/
│   │   └── auth.js                  ← JWT protect middleware
│   └── utils/
│       └── seed.js                  ← Seed Bengaluru sample data
│
├── docs/
│   ├── API_REFERENCE.md             ← Full API endpoint documentation
│   └── AI_USAGE.md                  ← How AI is used in each module
│
└── README.md                        ← This file
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **HTML5** | App structure — single-page application with tab-based navigation |
| **CSS3** | Custom design system — CSS variables, flexbox/grid, animations |
| **Vanilla JavaScript (ES2022)** | All app logic — no framework dependency |
| **Google Maps JavaScript API** | Live nearby search (Places API), directions, geolocation |
| **Web Geolocation API** | Browser GPS to get user's lat/lng |
| **OpenStreetMap Nominatim** | Free reverse geocoding (lat/lng → district name, no API key) |
| **Web Speech API** | Voice input for chatbot (Chrome/Edge supported) |
| **MediaDevices API** | Camera capture for uploading prescription photos |
| **FileReader API** | Convert uploaded files to base64 for AI processing |
| **Google Fonts** | Playfair Display + Plus Jakarta Sans |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js 18+** | JavaScript runtime |
| **Express.js 4** | REST API framework |
| **MongoDB + Mongoose** | Database — 2dsphere indexes for geo queries |
| **JWT (jsonwebtoken)** | Stateless authentication tokens |
| **bcryptjs** | Secure password hashing |
| **Multer** | File upload handling (PDF, JPG, PNG) |
| **dotenv** | Environment variable management |

### Data
| Source | Description |
|---|---|
| **Karnataka Govt. Hospital CSV** | 3,498 hospitals across 40 districts — name, address, phone, specialities, schemes |
| **Google Maps Places API** | Live nearby results with real distance, rating, open/closed status |
| **Anthropic Claude API** | AI chatbot, report summarizer, symptom analysis |

---

## 🤖 How AI is Used

AyuSutra uses **Anthropic Claude** (claude-sonnet-4-20250514) in three key places:

### 1. 💬 Chatbot Assistant (`/api/chatbot` & `frontend/js/app.js → sendChat()`)

**What it does:**
- Answers health questions in plain, safe language
- Analyzes uploaded lab reports and prescriptions (PDF/image)
- Summarizes medical documents — highlights abnormal values
- Guides users to the right specialist based on their query

**How it works:**
```
User message (+ optional file as base64)
        ↓
Anthropic Claude API (claude-sonnet-4-20250514)
  System prompt enforces:
    ✅ Safe, non-diagnostic responses
    ✅ Always recommends consulting a doctor
    ❌ Never diagnoses or prescribes
        ↓
AI response displayed in chat UI
```

**Input types supported:**
- Text messages
- PDF lab reports (sent as base64 document)
- JPG/PNG images of prescriptions or reports (base64 image)
- Voice input via Web Speech API → converted to text → sent to AI

---

### 2. 🩺 Symptom Checker (`frontend/js/app.js → analyzeSymptoms()`)

**What it does:**
- Maps symptoms to possible conditions using a curated medical knowledge base
- Scores severity using 4 weighted factors (not random — deterministic formula)
- Recommends the right doctor specialization with description
- Fetches nearest matching hospitals from the Karnataka database

**Scoring Formula (deterministic, not AI-generated):**
```
Score (0–100) = (Pain × 35%) + (Daily Impact × 30%) + (Duration × 20%) + (Frequency × 15%)
                ÷ 5

Severity thresholds:
  0–34  → Mild     (monitor at home)
  35–64 → Moderate (visit doctor soon)
  65+   → Severe   (seek care immediately)
```

**Why not AI for scoring?** Symptom scoring must be consistent and explainable. A deterministic formula gives the same output for the same inputs — unlike LLM responses which can vary. The AI is used for open-ended Q&A, not structured scoring.

---

### 3. 📋 Patient Record AI Summary (`/api/patients/history/:id/summarize`)

**What it does:**
- Summarizes a stored medical record in 3–4 bullet points
- Highlights values outside normal range
- Makes dense medical notes easy to understand

**How it works:**
```
Record text (type + doctor + notes)
        ↓
Anthropic Claude API (claude-haiku-20240307 — faster/cheaper for summaries)
  System prompt: "Summarize in bullets. Note abnormals. End with: Consult doctor."
        ↓
Summary saved to MongoDB → displayed on record card
```

---

## 🚀 Quick Start

### Option A — Frontend Only (Prototype, no backend)

```bash
# 1. Clone / download the project
# 2. Open in browser directly:
open frontend/index.html

# No server needed — works as a static file
```

**For Google Maps live search**, add your key in `frontend/index.html`:
```javascript
window.GOOGLE_MAPS_KEY  = 'AIzaSy...your-key';   // line ~12
window.ANTHROPIC_KEY    = 'sk-ant-...your-key';  // line ~13
```

---

### Option B — Full Stack (Frontend + Backend)

#### Step 1 — Backend Setup
```bash
cd backend
npm install
cp .env.example .env       # then edit .env with your keys
node utils/seed.js         # seed sample Bengaluru data
npm run dev                # starts on http://localhost:5000
```

#### Step 2 — Frontend
```bash
# Option 1: Open directly
open frontend/index.html

# Option 2: Serve with a local server (avoids CORS issues)
cd frontend
npx serve .
# → http://localhost:3000
```

---

## 📡 API Reference (Quick)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ❌ | Register new user |
| POST | `/api/auth/login` | ❌ | Login → JWT token |
| GET  | `/api/hospitals/nearby?lat=&lng=&radius=5` | ❌ | Hospitals near location |
| GET  | `/api/hospitals/search?q=Apollo&district=Bengaluru` | ❌ | Search hospitals |
| GET  | `/api/blood-banks/nearby?lat=&lng=` | ❌ | Blood banks near location |
| GET  | `/api/diagnostics/nearby?lat=&lng=&test=MRI` | ❌ | Diagnostic centres |
| POST | `/api/symptoms/analyze` | ❌ | Symptom scoring + specialist |
| POST | `/api/chatbot` | ❌ | AI health chatbot |
| GET  | `/api/patients/history` | ✅ JWT | Get medical records |
| POST | `/api/patients/history` | ✅ JWT | Add record + file upload |
| POST | `/api/patients/history/:id/summarize` | ✅ JWT | AI summary of record |
| DELETE | `/api/patients/history/:id` | ✅ JWT | Delete record |

**Authentication:** `Authorization: Bearer <token>`

---

## 🔑 API Keys Needed

| Key | Where to Get | Used For |
|-----|-------------|----------|
| Google Maps API | [console.cloud.google.com](https://console.cloud.google.com/) | Live hospital/diagnostic/blood bank search, directions |
| Anthropic API | [console.anthropic.com](https://console.anthropic.com/) | Chatbot, report summarizer, health Q&A |

### Google Maps — Required APIs to Enable:
- Maps JavaScript API
- Places API (New)
- Geocoding API

### API Usage Limits (Free Tier Safe):
- API called **only on button click** — never auto-fires
- Results **cached** per location — no repeat calls
- **500ms debounce** on search inputs
- Max **15 results** per Places API call (5km radius)

---

## 🗄️ Database Models

| Model | Key Fields |
|-------|-----------|
| `User` | name, email, password (hashed), bloodGroup |
| `Hospital` | name, district, location (GeoJSON), specialities[], schemesSupported[] |
| `BloodBank` | name, location (GeoJSON), phone, timings |
| `Diagnostic` | name, location, testsAvailable[], homeCollection |
| `PatientHistory` | userId, type, date, notes, fileUrl, aiSummary |
| `SymptomLog` | userId, symptoms[], severityScore, scoringFactors |

---

## 📊 Data Sources

| Data | Source | Count |
|------|--------|-------|
| Karnataka Hospitals | Karnataka Govt. Ayushman Bharat CSV | 3,498 hospitals |
| Districts covered | 40 Karnataka districts | — |
| Blood Banks | Curated Bengaluru govt. data | 4 (seeded) |
| Diagnostic Centres | Curated Bengaluru data | 5 (seeded, expandable) |

---

## ⚙️ Features Summary

| Feature | Technology Used |
|---------|----------------|
| Login / Signup | JWT + bcrypt (frontend prototype uses in-memory) |
| Live Hospital Search | Google Maps Places API (fallback: Karnataka CSV) |
| Distance Calculation | Haversine formula (client-side) |
| Reverse Geocoding | OpenStreetMap Nominatim (no key needed) |
| Symptom Scoring | Weighted formula (deterministic, 4 factors) |
| Doctor Specialization Map | Curated symptom→specialist knowledge base |
| Chatbot | Anthropic Claude Sonnet (text + PDF + image) |
| Voice Input | Web Speech API (en-IN) |
| Camera Input | MediaDevices API |
| Report Summarizer | Anthropic Claude (AI reads your uploaded file) |
| Patient Records | CRUD + file upload (Multer) + MongoDB |
| Blood Bank Locator | Google Maps + curated list (no fake unit counts) |
| Diagnostic Centres | Google Maps Places + demo data |

---

## ⚠️ Medical Disclaimer

AyuSutra provides **general health information and guidance only**.

- It does **not** diagnose medical conditions
- It does **not** replace professional medical advice
- Always consult a licensed doctor for diagnosis and treatment
- For emergencies, call **112** immediately

---

## 👥 Team

Built as a healthcare prototype for the AyuSutra project.  
Data source: Karnataka Government Ayushman Bharat Hospital Registry.

---

*AyuSutra — the thread of your lifespan.*
