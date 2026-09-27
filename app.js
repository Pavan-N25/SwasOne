const symptomInput = document.getElementById('symptomInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultBox = document.getElementById('resultBox');
const voiceBtn = document.getElementById('voiceBtn');
const languageSelect = document.getElementById('language');
const medicineInput = document.getElementById('medicineInput');
const medicineBtn = document.getElementById('medicineBtn');
const medicineUpload = document.getElementById('medicineUpload');
const medicineUploadBtn = document.getElementById('medicineUploadBtn');
const medicinePreview = document.getElementById('medicinePreview');
const medicinePreviewWrap = document.getElementById('medicinePreviewWrap');
const medicineResult = document.getElementById('medicineResult');
const facilityGrid = document.getElementById('facilityGrid');

const fallbackSymptomData = {
  en: {
    default: {
      title: 'General guidance',
      body: 'Describe your symptoms to get a general overview of possible causes, care tips, and when to seek medical attention.'
    },
    fever: {
      title: 'Possible fever pattern',
      body: 'A fever may be linked to common infections, dehydration, or an inflammatory response. Rest, hydrate well, and monitor your temperature. Seek medical care if the fever is severe, lasts several days, or comes with trouble breathing.'
    },
    headache: {
      title: 'Possible headache pattern',
      body: 'Headache can happen due to stress, dehydration, tiredness, or common illness. Keep fluids up, rest in a quiet room, and avoid overexertion. Get urgent medical attention if the headache is sudden, severe, or accompanied by weakness, confusion, or vomiting.'
    },
    cough: {
      title: 'Possible cough pattern',
      body: 'A cough may be caused by viral illness, irritation, or allergies. Drink warm fluids, rest, and avoid smoke. Consult a clinician if the cough persists, is worsening, or comes with fever or breathing difficulty.'
    },
    pain: {
      title: 'Possible pain pattern',
      body: 'Body pain may be associated with fatigue, infection, or strain. Rest, stay hydrated, and avoid heavy activity. Seek professional help if the pain is severe, localized, or worsening over time.'
    }
  },
  kn: {
    default: {
      title: 'ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನ',
      body: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ. ಸಾಮಾನ್ಯ ಕಾರಣಗಳು, ಸ್ವಚ್ಛತೆ ಬಗ್ಗೆಯೂ ಮುಖ್ಯ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ ಮತ್ತು ಸೇವೆಯನ್ನು ಯಾವಾಗ ಪಡೆಯಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.'
    },
    fever: {
      title: 'ಜ್ವರದ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      body: 'ಜ್ವರವು ಸಾಮಾನ್ಯ ಸೋಂಕು, ಡಿಹೈಡ್ರೇಷನ್ ಅಥವಾ ದೈಹಿಕ ಉರಿಯೂತದಿಂದ ಉಂಟಾಗಬಹುದು. ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಜ್ವರವಿನಿಮಯವನ್ನು ಗಮನಿಸಿ. ಹೆಚ್ಚಿನ ಜ್ವರ, ನಿರಂತರ ಜ್ವರ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    },
    headache: {
      title: 'ತಲೆನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      body: 'ತಲೆನೋವು ಆಯಾಸ, ದೇಹದ ನಿರ್ಜಲೀಕರಣ, ಒತ್ತಡ, ಅಥವಾ ಸೋಂಕಿನಿಂದ ಉಂಟಾಗಬಹುದು. ನೀರು ಕುಡಿಯಿರಿ, ಶಾಂತವಾದ ಸ್ಥಳದಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. ತೀವ್ರ ನೋವು, ಕåk್ ಅಥವಾ ಗೊಂದಲದ ಪರಿಸ್ಥಿತಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.'
    },
    cough: {
      title: 'ಹೊಗೆಯ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      body: 'ಹೊಗೆಯು ವೈರಲ್ ಸೋಂಕು, ಅಲರ್ಜಿ ಅಥವಾ ಉರಿಯೂತದಿಂದ ಆಗಬಹುದು. ಉಷ್ಣ ದ್ರವಗಳನ್ನು ಕುಡಿಯಿರಿ, ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಧೂಮಪಾನದಿಂದ ದೂರವಿರಿ. ಜ್ವರ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    },
    pain: {
      title: 'ದೈಹಿಕ ನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      body: 'ದೇಹದ ನೋವು ಆಯಾಸ, ಸೋಂಕು ಅಥವಾ ಒತ್ತಡದಿಂದ ಆಗಬಹುದು. ವಿಶ್ರಾಂತಿ, ನೀರು ಮತ್ತು Heavy activity to avoid. ತೀವ್ರ ನೋವು, localized pain or worsening symptoms require attention.'
    }
  }
};

const fallbackMedicineData = {
  paracetamol: {
    name: 'Paracetamol',
    use: 'Commonly used to reduce fever and relieve mild to moderate pain.',
    caution: 'Follow the recommended dose and avoid exceeding the daily limit. Seek advice if symptoms persist or if you have liver conditions.'
  },
  ibuprofen: {
    name: 'Ibuprofen',
    use: 'Often used to relieve pain, inflammation, and fever.',
    caution: 'Take with food if needed and avoid it if you have stomach ulcers, kidney disease, or are pregnant without medical advice.'
  },
  cetirizine: {
    name: 'Cetirizine',
    use: 'Commonly used to relieve allergy symptoms such as sneezing, runny nose, and itching.',
    caution: 'Avoid driving if you feel drowsy and consult a clinician if symptoms are severe or prolonged.'
  },
  amoxicillin: {
    name: 'Amoxicillin',
    use: 'An antibiotic used to treat certain bacterial infections as prescribed by a clinician.',
    caution: 'Complete the full course exactly as directed and report any allergy or severe side effects immediately.'
  }
};

function detectSymptomType(text) {
  const normalized = String(text || '').toLowerCase();

  if (normalized.includes('fever') || normalized.includes('jvara') || normalized.includes('ಜ್ವರ')) return 'fever';
  if (normalized.includes('headache') || normalized.includes('head ache') || normalized.includes('ತಲೆನೋವು')) return 'headache';
  if (normalized.includes('cough') || normalized.includes('khansi') || normalized.includes('ಹೊಗೆಯ') || normalized.includes('ಹಸಿರು')) return 'cough';
  if (normalized.includes('pain') || normalized.includes('nōvu') || normalized.includes('ನೋವು')) return 'pain';

  return 'default';
}

function renderFallbackSymptomResult() {
  const text = symptomInput.value.trim();
  const lang = languageSelect.value;
  const type = detectSymptomType(text || '');
  const content = fallbackSymptomData[lang][type] || fallbackSymptomData[lang].default;

  resultBox.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.body}</p>
    <p><strong>Input:</strong> ${text || 'No symptoms provided yet.'}</p>
  `;

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(`${content.title}. ${content.body}`);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

async function analyzeSymptoms() {
  const text = symptomInput.value.trim();

  if (!text) {
    resultBox.innerHTML = `
      <h3>Need symptoms</h3>
      <p>Please type or speak your symptoms first.</p>
    `;
    return;
  }

  try {
    const response = await fetch('/api/symptom-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, language: languageSelect.value })
    });

    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();

    resultBox.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.overview}</p>
      <div>
        <strong>Suggested next steps:</strong>
        <ul>
          ${data.nextSteps.map((step) => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      <p><strong>Warning:</strong> ${data.redFlags}</p>
      <p><strong>Input:</strong> ${data.input}</p>
    `;

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`${data.title}. ${data.overview}. ${data.redFlags}`);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  } catch (error) {
    console.error(error);
    renderFallbackSymptomResult();
  }
}

async function loadNearbyCare() {
  try {
    const response = await fetch('/api/nearby-care');
    if (!response.ok) throw new Error('Nearby care request failed');
    const data = await response.json();

    facilityGrid.innerHTML = data.facilities.map((facility) => `
      <article class="facility-card">
        <div class="facility-top">
          <span class="facility-tag">${facility.type}</span>
          <span class="rating">${facility.rating.toFixed(1)} ★</span>
        </div>
        <h3>${facility.name}</h3>
        <p>${facility.type} • ${facility.distance}</p>
        <button type="button">Call Now</button>
      </article>
    `).join('');
  } catch (error) {
    console.error(error);
  }
}

async function fetchMedicineInfo() {
  const value = medicineInput.value.trim();

  if (!value) {
    medicineResult.innerHTML = `
      <h3>Need medicine name</h3>
      <p>Please enter a medicine name to look up general information.</p>
    `;
    return;
  }

  try {
    const response = await fetch('/api/medicine-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: value })
    });

    if (!response.ok) throw new Error('Medicine request failed');
    const data = await response.json();

    medicineResult.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Common use:</strong> ${data.use}</p>
      <p><strong>General precaution:</strong> ${data.caution}</p>
    `;
  } catch (error) {
    console.error(error);
    const medicine = fallbackMedicineData[value.toLowerCase()] || {
      name: value || 'Medicine',
      use: 'General guidance suggests checking the dose and purpose with a healthcare professional or package insert.',
      caution: 'Do not self-medicate beyond the recommended guidance. If symptoms are severe, seek professional help.'
    };

    medicineResult.innerHTML = `
      <h3>${medicine.name}</h3>
      <p><strong>Common use:</strong> ${medicine.use}</p>
      <p><strong>General precaution:</strong> ${medicine.caution}</p>
    `;
  }
}

medicineUploadBtn.addEventListener('click', () => {
  medicineUpload.click();
});

medicineUpload.addEventListener('change', (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    medicinePreview.src = e.target.result;
    medicinePreviewWrap.classList.remove('hidden');

    const fileName = file.name.toLowerCase();
    const detectedMedicine = Object.keys(fallbackMedicineData).find((key) => fileName.includes(key));

    if (detectedMedicine) {
      medicineInput.value = fallbackMedicineData[detectedMedicine].name;
      fetchMedicineInfo();
    } else {
      medicineResult.innerHTML = `
        <h3>Image uploaded</h3>
        <p>Medicine image captured successfully. Please confirm or enter the medicine name manually for detailed information.</p>
      `;
    }
  };

  reader.readAsDataURL(file);
});

analyzeBtn.addEventListener('click', analyzeSymptoms);

voiceBtn.addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    resultBox.innerHTML = `
      <h3>Voice input unavailable</h3>
      <p>Your browser does not support voice recognition. Please type your symptoms manually.</p>
    `;
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = languageSelect.value === 'kn' ? 'kn-IN' : 'en-US';
  recognition.start();

  voiceBtn.textContent = 'Listening...';

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    symptomInput.value = transcript;
    analyzeSymptoms();
  };

  recognition.onend = () => {
    voiceBtn.textContent = '🎙️ Use Voice';
  };

  recognition.onerror = () => {
    resultBox.innerHTML = `
      <h3>Voice input issue</h3>
      <p>Unable to capture speech right now. Please try again or type your symptom manually.</p>
    `;
    voiceBtn.textContent = '🎙️ Use Voice';
  };
});

medicineBtn.addEventListener('click', fetchMedicineInfo);

languageSelect.addEventListener('change', () => {
  const currentText = symptomInput.value.trim();
  if (currentText) {
    analyzeSymptoms();
  }
});

loadNearbyCare();
