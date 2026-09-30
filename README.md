
# 🩺 SwasOne

### AI-Powered Multilingual Health Assistance Platform

**SwasOne** is a smart, accessible health-assistance platform designed to help users understand symptoms, find relevant medicine information, and quickly locate nearby healthcare facilities.

It supports **English and Kannada**, combines symptom-based guidance with medicine lookup, and provides practical access to nearby healthcare services through Google Maps.

> ⚠️ **SwasOne provides informational health assistance only and is not a replacement for professional medical diagnosis or treatment.**

---

## ✨ Key Features

### 🗣️ Multilingual Health Assistance

* 🇬🇧 English language support
* 🇮🇳 Kannada language support
* Easy language switching throughout the interface
* Designed for users with different levels of technical literacy

### 🤒 Symptom Guidance

* Enter symptoms to receive general health guidance
* Organized symptom information
* Basic precautions and self-care suggestions
* Clear indication when professional medical attention may be required

### 💊 Medicine Lookup

* Search medicines by name
* Display medicine-related information
* General usage information
* Basic precautions and safety information
* Helps users understand medicines before consulting a professional

### 🏥 Nearby Healthcare Facilities

* Find nearby healthcare facilities
* Facility cards with useful information
* Google Maps-powered location searches
* Quickly navigate to real healthcare facilities
* Useful for situations where professional medical attention is recommended

### 🕒 Symptom History

* Automatically stores recent symptom searches locally
* Restore previous symptom guidance
* Clear history whenever required
* No account required for local history storage

### 📄 Health Guidance Reports

* Generate symptom guidance reports
* Export reports for personal reference
* Useful for discussing symptoms with healthcare professionals
* Keeps important guidance organized

### 📍 Location-Based Assistance

* Uses Google Maps searches to locate nearby care
* Helps users find hospitals, clinics, pharmacies, and other healthcare facilities
* Location-based assistance makes the platform more practical during urgent situations

### 📱 Responsive Design

* Mobile-friendly interface
* Desktop and tablet support
* Health-focused visual design
* Simple navigation
* Accessible and easy-to-understand UI

---

## 🚀 Why SwasOne?

Healthcare information can be difficult to understand, especially when users face:

* Language barriers
* Difficulty identifying where to seek care
* Lack of quick access to reliable general information
* Confusion around medicines
* Difficulty keeping track of previous symptoms

**SwasOne brings these capabilities together in one simple platform.**

### Our goal

> **Understand → Guide → Inform → Connect**

SwasOne helps users understand their symptoms, provides general guidance, informs them about medicines, and connects them with nearby healthcare facilities when professional care is needed.

---

## 🧠 How It Works

```text
            👤 USER
               │
               ▼
       Enter Symptoms / Medicine
               │
               ▼
       ┌──────────────────┐
       │    SwasOne UI    │
       └────────┬─────────┘
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
    Symptoms  Medicine  Language
    Guidance   Lookup   Selection
        │       │        │
        └───────┼────────┘
                ▼
       Health Information
                │
        ┌───────┴────────┐
        ▼                ▼
 Symptom History    Nearby Care
        │                │
        ▼                ▼
   Local Storage     Google Maps
                         │
                         ▼
                🏥 Healthcare Facility
```

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Responsive UI design

### Backend

* Python
* Flask
* REST API architecture

### APIs & Services

* 🗺️ Google Maps
* 💊 Medicine information services
* 🌐 Multilingual interface support

### Browser Technologies

* LocalStorage
* Client-side report generation
* Responsive browser APIs

---

## 📂 Project Structure

```text
SwasOne/
│
├── index.html              # Main application interface
├── server.py               # Python API/backend server
│
├── css/
│   └── style.css           # Application styling
│
├── js/
│   └── script.js           # Frontend logic
│
├── assets/
│   ├── images/
│   └── icons/
│
├── reports/                # Generated health reports
│
└── README.md
```

> The exact structure may vary depending on the current implementation.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Pavan-N25/SwasOne.git
```

### 2. Navigate to the project

```bash
cd SwasOne
```

### 3. Start the frontend server

```bash
python -m http.server 8000
```

### 4. Start the backend server

Open a **new terminal** in the same project directory:

```bash
python server.py
```

<<<<<<< HEAD
### 5. Open SwasOne
=======
Then open http://localhost:8002 in your browser. The API-backed features require this app server.
>>>>>>> 82e0cd0 (commit)

Visit:

<<<<<<< HEAD
```text
http://localhost:8000
```

The frontend runs on **port 8000** while the API server runs on **port 8001**.

> Make sure both servers are running for API-dependent features.

---

## 🔐 Privacy

SwasOne is designed with user privacy in mind.

* Recent symptom history is stored locally in the browser.
* No account is required for basic functionality.
* Users can clear locally stored history at any time.
* Health-related information should not be treated as a substitute for professional medical records.

---

## 🌍 Accessibility & Inclusivity

SwasOne is designed to make health assistance more accessible to a wider audience.

### Current support

🇬🇧 **English**

🇮🇳 **Kannada**

The multilingual approach is particularly useful for users who are more comfortable receiving health information in their regional language.

---

## 🔮 Future Roadmap

We plan to expand SwasOne with:

* 🎙️ Voice-based symptom input
* 🤖 AI-powered conversational health assistant
* 🗣️ Kannada voice interaction
* 📸 Medicine recognition using camera/image upload
* 🧾 Prescription information assistance
* 🔔 Medicine reminders
* 👨‍⚕️ Doctor consultation integration
* 🏥 Hospital appointment assistance
* 📍 Real-time healthcare availability
* 🚨 Emergency assistance workflow
* 📊 Personal health dashboard
* 👨‍👩‍👧 Family health profiles
* 🔒 Stronger privacy and security controls
* 🌐 Support for additional Indian languages

---

## ⚠️ Medical Disclaimer

SwasOne is an **informational health-assistance platform**.

It does **not**:

* Diagnose diseases
* Replace doctors
* Prescribe medicines
* Replace emergency medical services
* Guarantee treatment outcomes

Information provided by the application should be treated as general guidance only.

**For serious, persistent, worsening, or emergency symptoms, seek professional medical care immediately.**

---

## 🎯 Project Vision

> **Making basic health guidance more accessible, understandable, multilingual, and connected to real-world healthcare.**

SwasOne aims to bridge the gap between **health information and healthcare access**, especially for users who face language or accessibility barriers.

---

## 👥 Team

### Team YePulse

Building technology that solves real-world problems through **AI, accessibility, and innovation**.

---

## ⭐ Contribute

Contributions, ideas, and feedback are welcome!

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/new-feature

# Make your changes
git add .

# Commit
git commit -m "Add new feature"

# Push
git push origin feature/new-feature
```

Then open a Pull Request.

---

## 📜 License

This project is intended for educational, research, and hackathon purposes.

---

## 💙 Built With Purpose

**SwasOne — Health guidance that speaks your language.**

### Understand. Guide. Connect.

⭐ If you find SwasOne useful, consider giving the repository a **star**!
=======
- `public/index.html` — landing page and sections
- `public/styles.css` — styling and responsive layout
- `public/app.js` — symptom analysis and medicine lookup logic
- `server.py` — local web server and API
>>>>>>> 82e0cd0 (commit)
