const symptomCatalog = {
  en: {
    default: {
      title: 'General guidance',
      overview: 'Describe your symptoms to get a general overview of possible causes, care tips, and when to seek medical attention.',
      nextSteps: [
        'Rest and stay hydrated.',
        'Monitor your symptoms closely for any changes.',
        'Seek professional medical advice if symptoms are severe or persistent.'
      ],
      redFlags: 'Seek urgent care if you have severe breathing difficulty, chest pain, confusion, or persistent high fever.'
    },
    fever: {
      title: 'Possible fever pattern',
      overview: 'A fever may be linked to common infections, dehydration, or an inflammatory response.',
      nextSteps: [
        'Drink plenty of water and fluids.',
        'Rest and monitor your temperature regularly.',
        'Seek medical care if the fever is severe, lasts several days, or is accompanied by breathing issues.'
      ],
      redFlags: 'Urgent medical attention is recommended if the fever is very high, lasts more than a few days, or is paired with confusion or breathing trouble.'
    },
    headache: {
      title: 'Possible headache pattern',
      overview: 'Headache can happen due to stress, dehydration, tiredness, or common illness.',
      nextSteps: [
        'Rest in a quiet, dim room.',
        'Drink water and avoid overexertion.',
        'Get urgent advice if the pain is sudden, severe, or comes with weakness or vomiting.'
      ],
      redFlags: 'A sudden severe headache, headache with weakness, confusion, or fainting requires urgent assessment.'
    },
    cough: {
      title: 'Possible cough pattern',
      overview: 'A cough may be caused by viral illness, irritation, or allergies.',
      nextSteps: [
        'Drink warm fluids and rest.',
        'Avoid smoke and cold air exposure if possible.',
        'Consult a clinician if the cough worsens or lasts beyond a reasonable period.'
      ],
      redFlags: 'Seek medical care if you have trouble breathing, chest pain, or a cough with fever that is worsening.'
    },
    pain: {
      title: 'Possible pain pattern',
      overview: 'Body pain may be associated with fatigue, infection, or strain.',
      nextSteps: [
        'Rest and avoid heavy activity.',
        'Stay hydrated and monitor the intensity.',
        'Seek professional help if the pain is severe or worsening over time.'
      ],
      redFlags: 'Urgent attention is needed for severe localized pain, chest pain, or pain with breathing difficulty.'
    }
  },
  kn: {
    default: {
      title: 'ಸಾಮಾನ್ಯ ಮಾರ್ಗದರ್ಶನ',
      overview: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ. ಸಾಮಾನ್ಯ ಕಾರಣಗಳು, ಸ್ವಚ್ಛತೆ ಮತ್ತು ವೈದ್ಯರ ಸಲಹೆಯನ್ನು ಯಾವಾಗ ಪಡೆಯಬೇಕು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.',
      nextSteps: [
        'ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ನೀರು ಕುಡಿಯಿರಿ.',
        'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ.',
        'ತೀವ್ರ ಅಥವಾ ನಿರಂತರ ರೋಗಲಕ್ಷಣಗಳಿಗೆ ವೈದ್ಯರ advice ಪಡೆಯಿರಿ.'
      ],
      redFlags: 'ಉಸಿರಾಟದ ತೊಂದರೆ, ತಲೆನೋವು, ದೈಹಿಕ ದುರ್ಬಲತೆ ಅಥವಾ ಉರಿಯೂತ ಇದ್ದರೆ ತ್ವರಿತ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
    },
    fever: {
      title: 'ಜ್ವರದ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      overview: 'ಜ್ವರವು ಸಾಮಾನ್ಯ ಸೋಂಕು, ದ್ರವದ ಕೊರತೆ ಅಥವಾ ದೈಹಿಕ ಉರಿಯೂತದಿಂದ ಉಂಟಾಗಬಹುದು.',
      nextSteps: [
        'ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ.',
        'ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ಜ್ವರವನ್ನು ನಿಯಮಿತವಾಗಿ ಗಮನಿಸಿ.',
        'ಜ್ವರ ಹೆಚ್ಚಾದಲ್ಲಿ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ವೈದ್ಯರಿಂದ advice ಪಡೆಯಿರಿ.'
      ],
      redFlags: 'ಅತ್ಯಧಿಕ ಜ್ವರ, ಹಲವು ದಿನಗಳ ನಿರಂತರ ಜ್ವರ ಅಥವಾ ಕಾಳಜಿಯ ನಿದ್ರೆಗಳಿದ್ದರೆ ತ್ವರಿತ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಿರಿ.'
    },
    headache: {
      title: 'ತಲೆನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      overview: 'ತಲೆನೋವು ಒತ್ತಡ, ದ್ರವದ ಕೊರತೆ, ಆಯಾಸ ಅಥವಾ ಸೋಂಕಿನಿಂದ ಆಗಬಹುದು.',
      nextSteps: [
        'ಮೃದು ಬೆಳಕಿನ ಸುತ್ತಿನಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.',
        'ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ಹೆಚ್ಚಿನ ಶ್ರಮ ತಪ್ಪಿಸಿ.',
        'ತ sudden/severe headache or vomiting needs urgent assessment.'
      ],
      redFlags: 'ತ sudden severe headache, confusion, or weakness needs urgent clinical evaluation.'
    },
    cough: {
      title: 'ಹೊಗೆಯ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      overview: 'ಹೊಗೆಯು ವೈರಲ್ ಸೋಂಕು, ಅಲರ್ಜಿ ಅಥವಾ ಜಲಮೂಲದ ತೊಂದರೆಯಿಂದ ಆಗಬಹುದು.',
      nextSteps: [
        'ಉಷ್ಣ ದ್ರವಗಳನ್ನು ಕುಡಿಯಿರಿ.',
        'ಧೂಮಪಾನ ಮತ್ತು ಕಸದಿಂದ ದೂರವಿರಿ.',
        'ತೀವ್ರ ಅಥವಾ Persistent cough if accompanied by fever or breathing difficulty should be checked.'
      ],
      redFlags: 'ಉಸಿರಾಟದ ತೊಂದರೆ, ಬೆಂಕಿ ಅಥವಾ worsening fever ಇದ್ದರೆ ವೈದ್ಯರ advice ಪಡೆಯಿರಿ.'
    },
    pain: {
      title: 'ದೈಹಿಕ ನೋವಿನ ಸಂಭಾವ್ಯ ಮಾದರಿ',
      overview: 'ದೇಹದ ನೋವು ಆಯಾಸ, ಸೋಂಕು ಅಥವಾ ಒತ್ತಡದಿಂದ ಆಗಬಹುದು.',
      nextSteps: [
        'ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು Heavy activity to avoid.',
        'ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ನೋವಿನ ತೀವ್ರತೆಯನ್ನು ಗಮನಿಸಿ.',
        'ನೋವು ತೀವ್ರವಾಗಿ ಅಥವಾ ದಿನದಿಂದ ದಿನಕ್ಕೆ ಹೆಚ್ಚಾದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.'
      ],
      redFlags: 'ತೀವ್ರ localized pain or chest pain should be checked promptly.'
    }
  }
};

const medicineCatalog = {
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
  },
  aspirin: {
    name: 'Aspirin',
    use: 'May be used to reduce pain and inflammation in certain situations, but is not appropriate for everyone.',
    caution: 'Do not use without guidance if you have bleeding risk, ulcers, or are under medical advice.'
  },
  vitamin: {
    name: 'Vitamin Supplement',
    use: 'Used to support nutrition when dietary intake is insufficient.',
    caution: 'High doses can be harmful. Follow the label or a clinician’s guidance.'
  }
};

const facilityCatalog = [
  {
    name: 'CityCare Health Centre',
    type: 'Clinic',
    rating: 4.8,
    distance: '1.4 km away',
    contact: '+91 98765 43210'
  },
  {
    name: 'Grace Family Hospital',
    type: 'Hospital',
    rating: 4.9,
    distance: '3.2 km away',
    contact: '+91 99887 66554'
  },
  {
    name: 'WellLife Pharmacy',
    type: 'Pharmacy',
    rating: 4.7,
    distance: '0.9 km away',
    contact: '+91 97654 32109'
  }
];

module.exports = {
  symptomCatalog,
  medicineCatalog,
  facilityCatalog
};
