# 📡 AyuSutra — API Reference

Base URL: `http://localhost:5000/api`  
All responses are JSON. Protected routes require `Authorization: Bearer <token>`.

---

## Auth

### POST `/auth/register`
```json
// Request
{ "name": "Arjun Kumar", "email": "arjun@mail.com", "password": "pass123", "bloodGroup": "O+" }

// Response 201
{ "token": "eyJ...", "user": { "id": "...", "name": "Arjun Kumar", "email": "arjun@mail.com", "bloodGroup": "O+" } }
```

### POST `/auth/login`
```json
// Request
{ "email": "arjun@mail.com", "password": "pass123" }

// Response 200
{ "token": "eyJ...", "user": { "id": "...", "name": "Arjun Kumar" } }
```

---

## Hospitals

### GET `/hospitals/nearby`
| Param | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| lat | float | ✅ | — | User latitude |
| lng | float | ✅ | — | User longitude |
| radius | float | ❌ | 5 | Search radius in km |
| speciality | string | ❌ | — | Filter by speciality (e.g. CARDIOLOGY) |

```
GET /hospitals/nearby?lat=12.9716&lng=77.5946&radius=5&speciality=CARDIOLOGY
```

### GET `/hospitals/search`
```
GET /hospitals/search?q=Apollo&district=Bengaluru&speciality=ONCOLOGY&scheme=Ayushman Bharat
```

---

## Symptoms

### POST `/symptoms/analyze`
```json
// Request
{
  "symptoms": ["fever", "headache"],
  "scoringFactors": { "duration": 3, "pain": 4, "frequency": 2, "impact": 3 },
  "location": { "lat": 12.9716, "lng": 77.5946 }
}

// Response 200
{
  "symptoms": ["fever", "headache"],
  "severityScore": 62,
  "severity": "moderate",
  "possibleConditions": ["Viral Fever", "Migraine", "Dengue", "Hypertension"],
  "recommendedSpecialists": ["General Physician", "Neurologist"],
  "nearbyHospitals": [...],
  "disclaimer": "AI-assisted guidance only. Not a medical diagnosis."
}
```

---

## Chatbot

### POST `/chatbot`
```json
// Text only
{ "message": "I have chest pain, what should I do?", "history": [] }

// With file (base64)
{
  "message": "Summarize this report",
  "fileBase64": "<base64 string>",
  "fileType": "application/pdf",
  "history": []
}

// Response
{
  "reply": "Based on your description... always consult a doctor.",
  "history": [...]
}
```

---

## Patient History (Protected)

### GET `/patients/history`
```
GET /patients/history
GET /patients/history?type=report
Headers: Authorization: Bearer <token>
```

### POST `/patients/history`
```
POST /patients/history
Content-Type: multipart/form-data
Fields: type, date, doctorName, hospital, notes
File: file (optional — PDF/JPG/PNG)
```

### POST `/patients/history/:id/summarize`
```json
// Response
{ "summary": "• CBC normal ✅\n• HbA1c 5.6% — pre-diabetic range ⚠️\n\nConsult your doctor." }
```

### DELETE `/patients/history/:id`
```json
// Response
{ "message": "Record deleted" }
```

---

## Blood Banks

### GET `/blood-banks/nearby`
```
GET /blood-banks/nearby?lat=12.9716&lng=77.5946&radius=10

// Response includes note: "Always call to confirm availability"
```

---

## Diagnostic Centres

### GET `/diagnostics/nearby`
```
GET /diagnostics/nearby?lat=12.9716&lng=77.5946&radius=5&test=MRI
```

### GET `/diagnostics/search`
```
GET /diagnostics/search?test=CBC&name=Thyrocare
```

---

## Error Responses

```json
// 400 Bad Request
{ "message": "lat and lng are required" }

// 401 Unauthorized
{ "message": "Token invalid or expired" }

// 404 Not Found
{ "message": "Hospital not found" }

// 500 Internal Server Error
{ "message": "Internal server error", "error": "..." }
```
