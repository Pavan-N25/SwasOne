# SwasOne

SwasOne is an AI-powered, voice-enabled, multilingual health assistant built as a prototype web app. It helps users understand common symptoms, learn general medicine information, and find nearby care options.

## Features

- Voice-based symptom input
- AI-style symptom guidance
- English and Kannada language support
- Medicine lookup information
- Nearby facility cards
- Recent symptom history stored locally in the browser, with restore and clear controls
- Exportable symptom guidance reports
- Google Maps searches for real nearby care facilities
- Responsive health-focused user interface

## Disclaimer

This project is for informational health assistance only and is not a replacement for professional diagnosis, prescription, or treatment.

## Run locally

Start the Python app server from the project folder:

```bash
cd "c:/Users/nmour/OneDrive/Documents/3rd SEM/SwasOne"
python server.py
```

Then open http://localhost:8001 in your browser. The API-backed features require this app server.

## Project structure

- `index.html` — landing page and sections
- `styles.css` — styling and responsive layout
- `app.js` — symptom analysis and medicine lookup logic
