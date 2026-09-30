import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, 'public')
PORT = int(os.getenv('PORT', '8002'))

symptom_catalog = {
    "en": {
        "default": {
            "title": "General guidance",
            "overview": "Describe your symptoms to get a general overview of possible causes, care tips, and when to seek medical attention.",
            "nextSteps": [
                "Rest and stay hydrated.",
                "Monitor your symptoms closely for any changes.",
                "Seek professional medical advice if symptoms are severe or persistent."
            ],
            "redFlags": "Seek urgent care if you have severe breathing difficulty, chest pain, confusion, or persistent high fever."
        },
        "fever": {
            "title": "Possible fever pattern",
            "overview": "A fever may be linked to common infections, dehydration, or an inflammatory response.",
            "nextSteps": [
                "Drink plenty of water and fluids.",
                "Rest and monitor your temperature regularly.",
                "Seek medical care if the fever is severe, lasts several days, or is accompanied by breathing issues."
            ],
            "redFlags": "Urgent medical attention is recommended if the fever is very high, lasts more than a few days, or is paired with confusion or breathing trouble."
        },
        "headache": {
            "title": "Possible headache pattern",
            "overview": "Headache can happen due to stress, dehydration, tiredness, or common illness.",
            "nextSteps": [
                "Rest in a quiet, dim room.",
                "Drink water and avoid overexertion.",
                "Get urgent advice if the pain is sudden, severe, or comes with weakness or vomiting."
            ],
            "redFlags": "A sudden severe headache, headache with weakness, confusion, or fainting requires urgent assessment."
        },
        "cough": {
            "title": "Possible cough pattern",
            "overview": "A cough may be caused by viral illness, irritation, or allergies.",
            "nextSteps": [
                "Drink warm fluids and rest.",
                "Avoid smoke and cold air exposure if possible.",
                "Consult a clinician if the cough worsens or lasts beyond a reasonable period."
            ],
            "redFlags": "Seek medical care if you have trouble breathing, chest pain, or a cough with fever that is worsening."
        },
        "pain": {
            "title": "Possible pain pattern",
            "overview": "Body pain may be associated with fatigue, infection, or strain.",
            "nextSteps": [
                "Rest and avoid heavy activity.",
                "Stay hydrated and monitor the intensity.",
                "Seek professional help if the pain is severe or worsening over time."
            ],
            "redFlags": "Urgent attention is needed for severe localized pain, chest pain, or pain with breathing difficulty."
        }
    },
    "kn": {
        "default": {
            "title": "ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನ",
            "overview": "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ. ಸಾಮಾನ್ಯ ಕಾರಣಗಳು, ಸ್ವಚ್ಛತೆ ಮತ್ತು ವೈದ್ಯರ ಸಲಹೆಯನ್ನು ಯಾವಾಗ ಪಡೆಯಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
            "nextSteps": [
                "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ನೀರು ಕುಡಿಯಿರಿ.",
                "ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ.",
                "ತೀವ್ರ ಅಥವಾ ನಿರಂತರ ರೋಗಲಕ್ಷಣಗಳಿಗೆ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ."
            ],
            "redFlags": "ಉಸಿರಾಟದ ತೊಂದರೆ, ತಲೆನೋವು, ದೈಹಿಕ ದುರ್ಬಲತೆ ಅಥವಾ ಉರಿಯೂತ ಇದ್ದರೆ ತ್ವರಿತ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
        },
        "fever": {
            "title": "ಜ್ವರದ ಸಂಭಾವ್ಯ ಮಾದರಿ",
            "overview": "ಜ್ವರವು ಸಾಮಾನ್ಯ ಸೋಂಕು, ದ್ರವದ ಕೊರತೆ ಅಥವಾ ದೈಹಿಕ ಉರಿಯೂತದಿಂದ ಉಂಟಾಗಬಹುದು.",
            "nextSteps": [
                "ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ.",
                "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಜ್ವರವನ್ನು ನಿಯಮಿತವಾಗಿ ಗಮನಿಸಿ.",
                "ಜ್ವರ ಹೆಚ್ಚಾದಲ್ಲಿ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರಿಂದ ಸಲಹೆ ಪಡೆಯಿರಿ."
            ],
            "redFlags": "ಅತ್ಯಧಿಕ ಜ್ವರ, ಹಲವು ದಿನಗಳ ನಿರಂತರ ಜ್ವರ ಅಥವಾ ಗೊಂದಲ ಇರುವಾಗ ತ್ವರಿತ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ."
        },
        "headache": {
            "title": "ತಲೆನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ",
            "overview": "ತಲೆನೋವು ಒತ್ತಡ, ದ್ರವದ ಕೊರತೆ, ಆಯಾಸ ಅಥವಾ ಸೋಂಕಿನಿಂದ ಆಗಬಹುದು.",
            "nextSteps": [
                "ಮೃದು ಬೆಳಕಿನ ಸುತ್ತಿನಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.",
                "ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ಹೆಚ್ಚಿನ ಶ್ರಮ ತಪ್ಪಿಸಿ.",
                "ತೀವ್ರ ನೋವು, ವಾಂತಿ ಅಥವಾ ಗೊಂದಲ ಇದ್ದರೆ ತ್ವರಿತ মূল্যಮಾಪನ ಅಗತ್ಯ."
            ],
            "redFlags": "ತ sudden severe headache, confusion, or weakness requires urgent clinical evaluation."
        },
        "cough": {
            "title": "ಹೊಗೆಯ ಸಂಭಾವ್ಯ ಮಾದರಿ",
            "overview": "ಹೊಗೆಯು ವೈರಲ್ ಸೋಂಕು, ಅಲರ್ಜಿ ಅಥವಾ ಉರಿಯೂತದಿಂದ ಆಗಬಹುದು.",
            "nextSteps": [
                "ಉಷ್ಣ ದ್ರವಗಳನ್ನು ಕುಡಿಯಿರಿ.",
                "ಧೂಮಪಾನ ಮತ್ತು ಕಸದಿಂದ ದೂರವಿರಿ.",
                "ತೀವ್ರ ಅಥವಾ ನಿರಂತರ ಕಾಸಿನೊಂದಿಗೆ ಜ್ವರ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
            ],
            "redFlags": "ಉಸಿರಾಟದ ತೊಂದರೆ, ತೀವ್ರ ನೋವು ಅಥವಾ worsening fever ಇದ್ದರೆ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ."
        },
        "pain": {
            "title": "ದೈಹಿಕ ನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ",
            "overview": "ದೇಹದ ನೋವು ಆಯಾಸ, ಸೋಂಕು ಅಥವಾ ಒತ್ತಡದಿಂದ ಆಗಬಹುದು.",
            "nextSteps": [
                "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು Heavy activity to avoid.",
                "ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ನೋವಿನ ತೀವ್ರತೆಯನ್ನು ಗಮನಿಸಿ.",
                "ನೋವು ತೀವ್ರವಾಗಿ ಅಥವಾ ದಿನದಿಂದ ದಿನಕ್ಕೆ ಹೆಚ್ಚಾದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ."
            ],
            "redFlags": "ತೀವ್ರ localized pain or chest pain should be checked promptly."
        }
    }
}

medicine_catalog = {
    "paracetamol": {
        "name": "Paracetamol",
        "use": "Commonly used to reduce fever and relieve mild to moderate pain.",
        "caution": "Follow the recommended dose and avoid exceeding the daily limit. Seek advice if symptoms persist or if you have liver conditions."
    },
    "ibuprofen": {
        "name": "Ibuprofen",
        "use": "Often used to relieve pain, inflammation, and fever.",
        "caution": "Take with food if needed and avoid it if you have stomach ulcers, kidney disease, or are pregnant without medical advice."
    },
    "cetirizine": {
        "name": "Cetirizine",
        "use": "Commonly used to relieve allergy symptoms such as sneezing, runny nose, and itching.",
        "caution": "Avoid driving if you feel drowsy and consult a clinician if symptoms are severe or prolonged."
    },
    "amoxicillin": {
        "name": "Amoxicillin",
        "use": "An antibiotic used to treat certain bacterial infections as prescribed by a clinician.",
        "caution": "Complete the full course exactly as directed and report any allergy or severe side effects immediately."
    },
    "aspirin": {
        "name": "Aspirin",
        "use": "May be used to reduce pain and inflammation in certain situations, but is not appropriate for everyone.",
        "caution": "Do not use without guidance if you have bleeding risk, ulcers, or are under medical advice."
    },
    "vitamin": {
        "name": "Vitamin Supplement",
        "use": "Used to support nutrition when dietary intake is insufficient.",
        "caution": "High doses can be harmful. Follow the label or a clinician's guidance."
    }
}

facility_catalog = [
    {
        "name": "CityCare Health Centre",
        "type": "Clinic",
        "rating": 4.8,
        "distance": "1.4 km away",
        "contact": "+91 98765 43210"
    },
    {
        "name": "Grace Family Hospital",
        "type": "Hospital",
        "rating": 4.9,
        "distance": "3.2 km away",
        "contact": "+91 99887 66554"
    },
    {
        "name": "WellLife Pharmacy",
        "type": "Pharmacy",
        "rating": 4.7,
        "distance": "0.9 km away",
        "contact": "+91 97654 32109"
    }
]


def detect_symptom_type(text):
    normalized = (text or '').strip().lower()
    if 'fever' in normalized or 'jvara' in normalized or 'ಜ್ವರ' in normalized:
        return 'fever'
    if 'headache' in normalized or 'head ache' in normalized or 'ತಲೆನೋವು' in normalized:
        return 'headache'
    if 'cough' in normalized or 'khansi' in normalized or 'ಹೊಗೆಯ' in normalized or 'ಹಸಿರು' in normalized:
        return 'cough'
    if 'pain' in normalized or 'nōvu' in normalized or 'ನೋವು' in normalized:
        return 'pain'
    return 'default'


def symptom_response(text, language='en'):
    symptom_type = detect_symptom_type(text)
    data = symptom_catalog.get(language, symptom_catalog['en']).get(symptom_type, symptom_catalog['en']['default'])
    return {
        'type': symptom_type,
        'language': language,
        'input': text,
        'title': data['title'],
        'overview': data['overview'],
        'nextSteps': data.get('nextSteps', []),
        'redFlags': data.get('redFlags', 'Seek medical attention if symptoms worsen.')
    }


def medicine_response(name):
    key = (name or '').strip().lower()
    item = medicine_catalog.get(key)
    if not item:
        item = {
            'name': key or 'Medicine',
            'use': 'General guidance suggests checking the dose and purpose with a healthcare professional or package insert.',
            'caution': 'Do not self-medicate beyond the recommended guidance. If symptoms are severe, seek professional help.'
        }
    return {
        'name': item['name'],
        'use': item['use'],
        'caution': item['caution']
    }


class SwasOneHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == '/api/health-check':
            self._send_json({
                'status': 'ok',
                'app': 'SwasOne',
                'message': 'Backend is running successfully.'
            })
            return

        if path == '/api/nearby-care':
            self._send_json({'facilities': facility_catalog})
            return

        if path in ('/', '/index.html'):
            self._serve_file('index.html')
            return

        if path.startswith('/'):
            file_path = os.path.join(PUBLIC_DIR, path.lstrip('/'))
            if os.path.isfile(file_path):
                self._serve_file(path.lstrip('/'))
                return

        self._serve_file('index.html')

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path

        length = int(self.headers.get('Content-Length', '0'))
        raw = self.rfile.read(length) if length else b''

        try:
            body = json.loads(raw.decode('utf-8')) if raw else {}
        except json.JSONDecodeError:
            body = {}

        if path == '/api/symptom-check':
            text = (body.get('text') or '').strip()
            language = body.get('language', 'en')
            if not text:
                self._send_json({'error': 'Symptoms text is required.'}, status=400)
                return
            self._send_json(symptom_response(text, language))
            return

        if path == '/api/medicine-info':
            name = (body.get('name') or '').strip()
            if not name:
                self._send_json({'error': 'Medicine name is required.'}, status=400)
                return
            self._send_json(medicine_response(name))
            return

        self._send_json({'error': 'Not found'}, status=404)

    def _send_json(self, payload, status=200):
        data = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _serve_file(self, relative_path):
        public_root = os.path.abspath(PUBLIC_DIR)
        file_path = os.path.abspath(os.path.join(public_root, relative_path))
        if os.path.commonpath((public_root, file_path)) != public_root or not os.path.isfile(file_path):
            file_path = os.path.join(public_root, 'index.html')

        with open(file_path, 'rb') as file:
            content = file.read()

        extension = os.path.splitext(file_path)[1].lower()
        mime_type = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml'
        }.get(extension, 'application/octet-stream')

        self.send_response(200)
        self.send_header('Content-Type', mime_type)
        self.send_header('Content-Length', str(len(content)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(content)


if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', PORT), SwasOneHandler)
    print(f'SwasOne server running at http://localhost:{PORT}')
    server.serve_forever()
