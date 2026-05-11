# 🤖 AyuSutra — AI Usage Documentation

This document explains exactly where, how, and why AI is used in AyuSutra —
covering the model, prompts, input/output format, and safety rules.

---

## AI Provider

**Anthropic Claude** — accessed via the Anthropic Messages API  
Endpoint: `https://api.anthropic.com/v1/messages`

| Use Case | Model | Reason |
|----------|-------|--------|
| Chatbot + Report Analysis | `claude-sonnet-4-20250514` | Best reasoning for medical context |
| Patient Record Summary | `claude-haiku-20240307` | Faster, cheaper for short summaries |
| Symptom scoring | ❌ No AI | Deterministic formula — must be consistent |

---

## 1. Health Chatbot

**File:** `frontend/js/app.js` → `sendChat()` function  
**Backend:** `backend/routes/chatbot.js`

### What the AI receives:
```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 600,
  "system": "<safety-focused system prompt>",
  "messages": [
    { "role": "user", "content": "I have a fever for 3 days, what should I do?" }
  ]
}
```

### With a file upload (PDF report or image):
```json
{
  "messages": [{
    "role": "user",
    "content": [
      {
        "type": "document",
        "source": { "type": "base64", "media_type": "application/pdf", "data": "<base64>" }
      },
      { "type": "text", "text": "Summarize this lab report" }
    ]
  }]
}
```

### System Prompt (enforces safety):
```
You are AyuSutra health assistant. Ayu (आयु) means lifespan in Sanskrit.

STRICT RULES:
❌ Never provide a definitive medical diagnosis
❌ Never recommend specific medications or dosages
✅ For reports: extract key values, highlight anything outside normal range
✅ Always suggest consulting a licensed doctor
✅ For emergencies: direct to 112 immediately
```

### What the AI returns:
- Plain text health guidance
- Bullet-point report summaries with highlighted abnormal values
- Specialist recommendations with explanation
- Safe, non-diagnostic health information

---

## 2. Patient Record Summarizer

**File:** `backend/routes/patients.js` → `POST /history/:id/summarize`

### Input:
```
Type: report | Doctor: Dr. Priya Singh | Date: 2026-02-22
Notes: CBC normal. TSH: 2.8 mIU/L. HbA1c: 5.6%.
```

### Output:
```
• CBC (Complete Blood Count): All values within normal range ✅
• TSH: 2.8 mIU/L — Normal thyroid function ✅
• HbA1c: 5.6% — In the pre-diabetic range (5.7–6.4%). Monitor diet and exercise.
• Recommendation: Follow up with your doctor to discuss HbA1c trend.

Consult your doctor for medical advice.
```

---

## 3. Symptom Scoring (NOT AI — Deterministic Formula)

**File:** `frontend/js/app.js` → `calcScore()` and `analyzeSymptoms()`

The symptom checker uses a **rule-based system**, NOT an AI model, for scoring.

### Why no AI for scoring?
- Consistency: same inputs must always produce the same score
- Explainability: users can see exactly why they scored X
- Safety: no hallucination risk in severity assessment
- Speed: instant, no API call needed

### Scoring Formula:
```
Score = (Pain × 35 + Impact × 30 + Duration × 20 + Frequency × 15) / 5

Range: 0–100
  0–34  → Mild     🟢
  35–64 → Moderate 🟡
  65+   → Severe   🔴
```

### Symptom → Specialist Mapping:
Also rule-based — a curated lookup table maps each symptom to:
- Possible conditions (list)
- Recommended specialists (with descriptions)
- Matching hospital speciality keyword (used to filter Karnataka CSV)

---

## 4. Voice Input (Speech-to-Text)

**File:** `frontend/js/app.js` → `toggleVoice()`

Uses the browser's **Web Speech API** — not an AI model.

```javascript
const recognition = new window.SpeechRecognition();
recognition.lang = 'en-IN';  // Indian English
recognition.onresult = e => {
  document.getElementById('chatIn').value = e.results[0][0].transcript;
};
```

The transcribed text is then sent to Claude via `sendChat()`.

---

## 5. AI Safety Rules Enforced

Every AI response in AyuSutra follows these rules, enforced by the system prompt:

| Rule | Reason |
|------|--------|
| ❌ No diagnosis | Diagnosis requires physical examination by a licensed doctor |
| ❌ No drug dosages | Dosage depends on weight, age, other medications — AI cannot know this |
| ✅ Always "consult a doctor" | Legal and ethical requirement |
| ✅ Flag abnormal report values | Useful, safe — highlights what to discuss with doctor |
| ✅ Emergency → 112 | Immediate safety for life-threatening situations |
| ✅ Multi-turn history | Context maintained for 10 turns, then reset to save tokens |

---

## 6. API Cost Estimation (Free Tier)

| Operation | Model | ~Tokens/call | Calls/month (est.) | Cost |
|-----------|-------|-------------|-------------------|------|
| Chatbot message | claude-sonnet | ~800 | 500 | ~$3 |
| Report summary | claude-haiku | ~400 | 100 | ~$0.04 |
| Record summary | claude-haiku | ~300 | 50 | ~$0.02 |

**Total estimated monthly cost for 500 active users: ~$3–5**  
Well within Anthropic's free trial credits for prototype/demo use.
