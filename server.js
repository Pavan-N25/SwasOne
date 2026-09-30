const express = require('express');
const path = require('path');
const { symptomCatalog, medicineCatalog, facilityCatalog } = require('./data/healthData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function normalizeText(text = '') {
  return String(text).trim().toLowerCase();
}

function detectSymptomType(text = '') {
  const normalized = normalizeText(text);

  if (normalized.includes('fever') || normalized.includes('jvara') || normalized.includes('ಜ್ವರ')) return 'fever';
  if (normalized.includes('headache') || normalized.includes('head ache') || normalized.includes('ತಲೆನೋವು')) return 'headache';
  if (normalized.includes('cough') || normalized.includes('khansi') || normalized.includes('ಹೊಗೆಯ') || normalized.includes('ಹಸಿರು')) return 'cough';
  if (normalized.includes('pain') || normalized.includes('nōvu') || normalized.includes('ನೋವು')) return 'pain';

  return 'default';
}

function buildSymptomResponse(text, language = 'en') {
  const type = detectSymptomType(text);
  const data = symptomCatalog[language]?.[type] || symptomCatalog.en.default;

  return {
    type,
    language,
    input: text,
    title: data.title,
    overview: data.overview,
    nextSteps: data.nextSteps || [],
    redFlags: data.redFlags || 'Seek medical attention if symptoms worsen.'
  };
}

function buildMedicineResponse(name) {
  const cleanName = normalizeText(name || '');
  const item = medicineCatalog[cleanName] || {
    name: cleanName || 'Medicine',
    use: 'General guidance suggests checking the dose and purpose with a healthcare professional or package insert.',
    caution: 'Do not self-medicate beyond the recommended guidance. If symptoms are severe, seek professional help.'
  };

  return {
    name: item.name,
    use: item.use,
    caution: item.caution
  };
}

app.get('/api/health-check', (req, res) => {
  res.json({
    status: 'ok',
    app: 'SwasOne',
    message: 'Backend is running successfully.'
  });
});

app.post('/api/symptom-check', (req, res) => {
  const { text = '', language = 'en' } = req.body || {};

  if (!text || !String(text).trim()) {
    return res.status(400).json({ error: 'Symptoms text is required.' });
  }

  return res.json(buildSymptomResponse(String(text), language));
});

app.post('/api/medicine-info', (req, res) => {
  const { name = '' } = req.body || {};

  if (!name || !String(name).trim()) {
    return res.status(400).json({ error: 'Medicine name is required.' });
  }

  return res.json(buildMedicineResponse(String(name)));
});

app.get('/api/nearby-care', (req, res) => {
  res.json({ facilities: facilityCatalog });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
