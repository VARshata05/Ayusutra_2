// ═══════════════════════════════════════════════════
// AyuSutra i18n — Multi-language Support
// Languages: English (en), Hindi (hi), Kannada (kn)
// ═══════════════════════════════════════════════════

const I18N = {
  en: {
    langNameNative: 'English',
    // Auth
    authSignIn: 'Sign In',
    authCreateAccount: 'Create Account',
    authEmail: 'Email Address',
    authPass: 'Password',
    authName: 'Full Name',
    authBlood: 'Blood Group',
    authNoAccount: 'No account?',
    authCreateOne: 'Create one free',
    authHaveAccount: 'Already have an account?',
    authSignInText: 'Sign In',
    authCreateAccountBtn: 'Create Account →',

    // Nav
    navHome: 'Home',
    navHospitals: 'Hospitals',
    navSymptoms: 'Symptoms',
    navChat: 'Chat',
    navHistory: 'Records',
    navDashboard: 'Dashboard',
    navLogout: 'Sign Out',

    // Hero
    heroHeadline: 'Healthcare, closer than you think.',
    heroTitle: 'AyuSutra — Lifespan, Guided',
    heroSub: 'Find hospitals, check symptoms, and get AI health guidance',
    symTileSub: 'AI scoring + specialist mapping',
    hospTileSub: 'Find nearby clinics and centers',
    chatTileSub: 'AI report analysis & guidance',
    histTileSub: 'Securely store your medical files',
    heroLocBtn: '📍 Use My Location',
    heroLocDetecting: '📍 Detecting…',

    // Hospitals
    hospTitle: 'Nearby Hospitals',
    hospSearch: 'Search hospitals…',
    hospNoResults: 'No hospitals found',
    hospTryAgain: 'Try different search terms or district',
    hospDirections: '🗺 Directions',
    hospCall: '📞 Call',
    hospLoadMore: 'Load More',
    hospLiveSearch: '🔴 Live Search',

    // Symptoms
    symTitle: 'Symptom Checker',
    symPlaceholder: 'Type a symptom (e.g. fever, headache)…',
    symAnalyze: 'Analyze Symptoms',
    symClear: 'Clear All',
    symDuration: 'Duration',
    symPain: 'Pain Level',
    symFrequency: 'Frequency',
    symImpact: 'Daily Impact',
    symSeverity: 'Severity Score',
    symConditions: 'Possible Conditions',
    symSpecialists: 'Recommended Specialists',
    symAiAnalysis: 'AI Differential Analysis',
    symNearbyHosp: 'Nearby Hospitals for You',

    // Chat
    chatTitle: 'Health Assistant',
    chatWelcome: '👋 Namaste! I\'m the AyuSutra assistant. I can help with symptoms, reports, and finding hospitals.',
    chatPlaceholder: 'Ask a health question…',
    chatSend: 'Send',
    chatVoice: '🎤',
    chatUpload: '📎',
    chatCamera: '📸',
    chatListening: 'Listening…',
    chatThinking: 'Thinking…',

    // History
    histTitle: 'Medical Records',
    histNew: 'New Medical Record',
    histType: 'Type',
    histDate: 'Date',
    histDoctor: 'Doctor Name',
    histNotes: 'Diagnosis / Notes',
    histAttach: '📎 Attachment:',
    histSave: 'Save Record',
    histCancel: 'Cancel',
    histAdd: '+ Add Record',
    histEmpty: 'No records yet',
    histEmptySub: 'Upload a file or add a record above.',
    histAiSummary: '🤖 AI Summary',
    histDelete: '🗑 Delete',

    // Blood Bank
    bloodTitle: 'Blood Bank Finder',
    bloodCallConfirm: '📞 Call to confirm availability before visiting',
    bloodCallBank: '📞 Call Bank',
    bloodHelpline: '📞 1910 Helpline',
    bloodWarning: 'Blood availability changes every hour. Always call ahead.',

    // Diagnostics
    diagTitle: 'Diagnostic Centres',
    diagSearch: 'Search tests (e.g. MRI, CBC)…',
    diagNearMe: '📍 Near Me',

    // Language
    langLabel: 'Language',
    langEn: 'English',
    langHi: 'हिंदी',
    langKn: 'ಕನ್ನಡ',
    langMr: 'मराठी',
    langGu: 'ગુજરાતી',
    langTa: 'தமிழ்',
    langTe: 'తెలుగు',
    langMl: 'മലയാളം',
    langBn: 'বাংলা',

    // Voice
    voiceListen: '🔊 Listen',
    voiceStop: '🔇 Stop',

    // Dashboard
    dashTitle: 'Patient Dashboard',
    dashHealthProfile: 'Health Profile',
    dashStats: 'Health Statistics',
    dashTotalRec: 'Total Records:',
    dashLastSym: 'Last Symptom Check:',
    dashAiInsights: 'AI Insights:',
    dashEnabled: 'Enabled',
    dashUpdateBtn: 'Update Profile →',
    dashMedicalNotes: 'Medical History/Notes',
    dashAllergies: 'Allergies',
    dashAge: 'Date of Birth',
    dashSuccess: 'Profile updated successfully!',

    // Common
    disclaimer: 'AI-assisted guidance only. Not a medical diagnosis. Always consult a licensed doctor.',
    emergencyMsg: 'For emergencies, call 112 immediately.',
  },

  hi: {
    langNameNative: '\u0939\u093F\u0902\u0926\u0940', // Hindi
    // Auth
    authSignIn: 'साइन इन करें',
    authCreateAccount: 'खाता बनाएं',
    authEmail: 'ईमेल पता',
    authPass: 'पासवर्ड',
    authName: 'पूरा नाम',
    authBlood: 'रक्त समूह',
    authNoAccount: 'कोई खाता नहीं?',
    authCreateOne: 'मुफ़्त में बनाएं',
    authHaveAccount: 'क्या पहले से खाता है?',
    authSignInText: 'साइन इन करें',
    authCreateAccountBtn: 'खाता बनाएं →',

    navHome: 'होम',
    navHospitals: 'अस्पताल',
    navSymptoms: 'लक्षण',
    navChat: 'चैट',
    navHistory: 'रिकॉर्ड',
    navDashboard: 'डैशबोर्ड',
    navLogout: 'साइन आउट',

    heroHeadline: 'स्वास्थ्य सेवा, आपके करीब।',
    heroTitle: 'आयुसूत्र — जीवन, मार्गदर्शित',
    heroSub: 'अस्पताल खोजें, लक्षण जांचें, और AI स्वास्थ्य मार्गदर्शन पाएं',
    heroLocBtn: '📍 मेरा स्थान उपयोग करें',
    heroLocDetecting: '📍 ढूंढ रहे हैं…',

    hospTitle: 'नज़दीकी अस्पताल',
    hospSearch: 'अस्पताल खोजें…',
    hospNoResults: 'कोई अस्पताल नहीं मिला',
    hospTryAgain: 'अलग शब्द या ज़िला आज़माएं',
    hospDirections: '🗺 रास्ता',
    hospCall: '📞 कॉल करें',
    hospLoadMore: 'और दिखाएं',
    hospLiveSearch: '🔴 लाइव खोज',

    symTitle: 'लक्षण जांच',
    symPlaceholder: 'लक्षण लिखें (जैसे बुखार, सिरदर्द)…',
    symAnalyze: 'लक्षण जांचें',
    symClear: 'सब हटाएं',
    symDuration: 'अवधि',
    symPain: 'दर्द का स्तर',
    symFrequency: 'कितनी बार',
    symImpact: 'दैनिक प्रभाव',
    symSeverity: 'गंभीरता स्कोर',
    symConditions: 'संभावित स्थितियां',
    symSpecialists: 'सुझाए गए विशेषज्ञ',
    symAiAnalysis: 'AI विश्लेषण',
    symNearbyHosp: 'आपके लिए नज़दीकी अस्पताल',

    chatTitle: 'स्वास्थ्य सहायक',
    chatPlaceholder: 'स्वास्थ्य सवाल पूछें…',
    chatSend: 'भेजें',
    chatVoice: '🎤',
    chatUpload: '📎',
    chatCamera: '📸',
    chatListening: 'सुन रहे हैं…',
    chatThinking: 'सोच रहे हैं…',

    histTitle: 'चिकित्सा रिकॉर्ड',
    histAdd: '+ रिकॉर्ड जोड़ें',
    histEmpty: 'अभी कोई रिकॉर्ड नहीं',
    histEmptySub: 'फ़ाइल अपलोड करें या ऊपर रिकॉर्ड जोड़ें।',
    histAiSummary: '🤖 AI सारांश',
    histDelete: '🗑 हटाएं',

    bloodTitle: 'ब्लड बैंक खोजें',
    bloodCallConfirm: '📞 जाने से पहले उपलब्धता की पुष्टि करें',
    bloodCallBank: '📞 बैंक को कॉल करें',
    bloodHelpline: '📞 1910 हेल्पलाइन',
    bloodWarning: 'रक्त उपलब्धता हर घंटे बदलती है। हमेशा पहले कॉल करें।',

    diagTitle: 'डायग्नोस्टिक केंद्र',
    diagSearch: 'टेस्ट खोजें (जैसे MRI, CBC)…',
    diagNearMe: '📍 मेरे पास',

    langLabel: 'भाषा',
    langEn: 'English',
    langHi: 'हिंदी',
    langKn: 'ಕನ್ನಡ',
    langMr: 'मराठी',
    langGu: 'ગુજરાતી',
    langTa: 'தமிழ்',
    langTe: 'తెలుగు',
    langMl: 'മലയാളം',
    langBn: 'বাংলা',

    voiceListen: '🔊 सुनें',
    voiceStop: '🔇 रोकें',

    // Dashboard
    dashTitle: 'पेशेंट डैशबोर्ड',
    dashHealthProfile: 'स्वास्थ्य प्रोफाइल',
    dashUpdateBtn: 'प्रोफाइल अपडेट करें →',
    dashMedicalNotes: 'चिकित्सा इतिहास / नोट्स',
    dashAllergies: 'एलर्जी',
    dashAge: 'जन्म तिथि',
    dashSuccess: 'प्रोफाइल सफलतापूर्वक अपडेट हो गया!',

    disclaimer: 'AI-सहायित मार्गदर्शन। चिकित्सा निदान नहीं। हमेशा डॉक्टर से सलाह लें।',
    emergencyMsg: 'आपातकाल में, तुरंत 112 पर कॉल करें।',
  },

  kn: {
    langNameNative: '\u0C95\u0CA8\u0CCD\u0CA8\u0CA1', // Kannada
    // Auth
    authSignIn: '\u0CB8\u0CC8\u0CA8\u0CCD \u0C87\u0CA8\u0CCD',
    authCreateAccount: '\u0C96\u0CBE\u0CA4\u0CC6 \u0CB8\u0CC3\u0C9C\u0CB0\u0CB8\u0CBF',
    authEmail: 'ಇಮೇಲ್ ವಿಳಾಸ',
    authPass: 'ಗುಪ್ತಪದ',
    authName: 'ಪೂರ್ಣ ಹೆಸರು',
    authBlood: 'ರಕ್ತದ ಗುಂಪು',
    authNoAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
    authCreateOne: 'ಉಚಿತವಾಗಿ ರಚಿಸಿ',
    authHaveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?',
    authSignInText: 'ಸೈನ್ ಇನ್',
    authCreateAccountBtn: 'ಖಾತೆ ತೆರೆಯಿರಿ →',

    navHome: 'ಮುಖಪುಟ',
    navHospitals: 'ಆಸ್ಪತ್ರೆಗಳು',
    navSymptoms: 'ಲಕ್ಷಣಗಳು',
    navChat: 'ಚಾಟ್',
    navHistory: 'ದಾಖಲೆಗಳು',
    navDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    navLogout: 'ಸೈನ್ ಔಟ್',

    heroHeadline: 'ಆರೋಗ್ಯ ಸೇವೆ, ನಿಮ್ಮ ಹತ್ತಿರ.',
    heroTitle: 'ಆಯುಸೂತ್ರ — ಜೀವಿತಾವಧಿ, ಮಾರ್ಗದರ್ಶಿ',
    heroSub: 'ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ, ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, AI ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ',
    symTileSub: 'AI ಸ್ಕೋರಿಂಗ್ + ತಜ್ಞರ ಮ್ಯಾಪಿಂಗ್',
    hospTileSub: 'ಹತ್ತಿರದ ಕ್ಲಿನಿಕ್‌ಗಳನ್ನು ಹುಡುಕಿ',
    chatTileSub: 'AI ವರದಿ ವಿಶ್ಲೇಷಣೆ',
    histTileSub: 'ಆರೋಗ್ಯ ದಾಖಲೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸಿ',
    heroLocBtn: '📍 ನನ್ನ ಸ್ಥಳ ಬಳಸಿ',
    heroLocDetecting: '📍 ಹುಡುಕುತ್ತಿದ್ದೇವೆ…',

    hospTitle: 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು',
    hospSearch: 'ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ…',
    hospNoResults: 'ಯಾವುದೇ ಆಸ್ಪತ್ರೆ ಸಿಗಲಿಲ್ಲ',
    hospTryAgain: 'ಬೇರೆ ಪದಗಳನ್ನು ಅಥವಾ ಜಿಲ್ಲೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ',
    hospDirections: '🗺 ದಿಕ್ಕು',
    hospCall: '📞 ಕರೆ ಮಾಡಿ',
    hospLoadMore: 'ಇನ್ನಷ್ಟು ತೋರಿಸಿ',
    hospLiveSearch: '🔴 ನೇರ ಹುಡುಕಾಟ',

    symTitle: 'ಲಕ್ಷಣ ಪರಿಶೀಲಕ',
    symPlaceholder: 'ಲಕ್ಷಣ ಟೈಪ್ ಮಾಡಿ (ಉದಾ. ಜ್ವರ, ತಲೆನೋವು)…',
    symAnalyze: 'ಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
    symClear: 'ಎಲ್ಲಾ ತೆಗೆಯಿರಿ',
    symDuration: 'ಅವಧಿ',
    symPain: 'ನೋವಿನ ಮಟ್ಟ',
    symFrequency: 'ಆವರ್ತನ',
    symImpact: 'ದೈನಂದಿನ ಪರಿಣಾಮ',
    symSeverity: 'ತೀವ್ರತೆ ಸ್ಕೋರ್',
    symConditions: 'ಸಂಭಾವ್ಯ ಸ್ಥಿತಿಗಳು',
    symSpecialists: 'ಶಿಫಾರಸ್ಸು ಮಾಡಲಾದ ತಜ್ಞರು',
    symAiAnalysis: 'AI ವಿಶ್ಲೇಷಣೆ',
    symNearbyHosp: 'ನಿಮಗಾಗಿ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು',
    // Chat
    chatTitle: 'ಆರೋಗ್ಯ ಸಹಾಯಕ',
    chatWelcome: '👋 ನಮಸ್ಕಾರ! ನಾನು ಆಯುಸೂತ್ರ ಸಹಾಯಕ. ಲಕ್ಷಣಗಳು, ವರದಿಗಳು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಲು ನಾನು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ.',
    chatPlaceholder: 'ಆರೋಗ್ಯ ಪ್ರಶ್ನೆ ಕೇಳಿ…',
    chatSend: 'ಕಳುಹಿಸಿ',
    chatVoice: '🎤',
    chatUpload: '📎',
    chatCamera: '📸',
    chatListening: 'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ…',
    chatThinking: 'ಯೋಚಿಸುತ್ತಿದ್ದೇವೆ…',

    // History
    histTitle: 'ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು',
    histNew: 'ಹೊಸ ವೈದ್ಯಕೀಯ ದಾಖಲೆ',
    histType: 'ಪ್ರಕಾರ',
    histDate: 'ದಿನಾಂಕ',
    histDoctor: 'ವೈದ್ಯರ ಹೆಸರು',
    histNotes: 'ರೋಗನಿರ್ಣಯ / ಟಿಪ್ಪಣಿಗಳು',
    histAttach: '📎 ಲಗತ್ತು:',
    histSave: 'ದಾಖಲೆ ಉಳಿಸಿ',
    histCancel: 'ರದ್ದುಮಾಡಿ',
    histAdd: '+ ದಾಖಲೆ ಸೇರಿಸಿ',
    histEmpty: 'ಇನ್ನೂ ಯಾವುದೇ ದಾಖಲೆಗಳಿಲ್ಲ',
    histEmptySub: 'ಫೈಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಮೇಲೆ ದಾಖಲೆ ಸೇರಿಸಿ.',
    histAiSummary: '🤖 AI ಸಾರಾಂಶ',
    histDelete: '🗑 ಅಳಿಸಿ',

    bloodTitle: 'ರಕ್ತ ಬ್ಯಾಂಕ್ ಹುಡುಕಿ',
    bloodCallConfirm: '📞 ಭೇಟಿ ನೀಡುವ ಮೊದಲು ಲಭ್ಯತೆಯನ್ನು ದೃಢೀಕರಿಸಿ',
    bloodCallBank: '📞 ಬ್ಯಾಂಕ್‌ಗೆ ಕರೆ ಮಾಡಿ',
    bloodHelpline: '📞 1910 ಹೆಲ್ಪ್‌ಲೈನ್',
    bloodWarning: 'ರಕ್ತ ಲಭ್ಯತೆ ಪ್ರತಿ ಗಂಟೆ ಬದಲಾಗುತ್ತದೆ. ಯಾವಾಗಲೂ ಮೊದಲು ಕರೆ ಮಾಡಿ.',

    diagTitle: 'ಡಯಾಗ್ನೋಸ್ಟಿಕ್ ಕೇಂದ್ರಗಳು',
    diagSearch: 'ಪರೀಕ್ಷೆಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ. MRI, CBC)…',
    diagNearMe: '📍 ನನ್ನ ಹತ್ತಿರ',

    langLabel: 'ಭಾಷೆ',
    langEn: 'English',
    langHi: 'हिंदी',
    langKn: 'ಕನ್ನಡ',
    langMr: 'मराठी',
    langGu: 'ગુજરાતી',
    langTa: 'தமிழ்',
    langTe: 'తెలుగు',
    langMl: 'മലയാളം',
    langBn: 'বাংলা',

    voiceListen: '🔊 ಕೇಳಿ',
    voiceStop: '🔇 ನಿಲ್ಲಿಸಿ',

    // Dashboard
    dashTitle: 'ರೋಗಿಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    dashHealthProfile: 'ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್',
    dashStats: 'ಆರೋಗ್ಯ ಅಂಕಿಅಂಶಗಳು',
    dashTotalRec: 'ಒಟ್ಟು ದಾಖಲೆಗಳು:',
    dashLastSym: 'ಕೊನೆಯ ಲಕ್ಷಣ ಪರಿಶೀಲನೆ:',
    dashAiInsights: 'AI ಒಳನೋಟಗಳು:',
    dashEnabled: 'ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ',
    dashUpdateBtn: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ →',
    dashMedicalNotes: 'ವೈದ್ಯಕೀಯ ಇತಿಹಾಸ / ಟಿಪ್ಪಣಿಗಳು',
    dashAllergies: 'ಅಲರ್ಜಿಗಳು',
    dashAge: 'ಹುಟ್ಟಿದ ದಿನಾಂಕ',
    dashSuccess: 'ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!',

    disclaimer: 'AI-ಸಹಾಯಿತ ಮಾರ್ಗದರ್ಶನ. ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ಯಾವಾಗಲೂ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    emergencyMsg: 'ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ, ತಕ್ಷಣ 112 ಕರೆ ಮಾಡಿ.',
  },

  mr: { // Marathi
    langNameNative: '\u092E\u0930\u093E\u0920\u0940',
    authSignIn: 'प्रवेश करें', authCreateAccount: 'खाता बनाएं', authEmail: 'ईमेल पता', authPass: 'पासवर्ड', authName: 'पूरा नाम', authBlood: 'रक्त समूह',
    navHome: 'होम', navHospitals: 'अस्पताल', navSymptoms: 'लक्षण', navChat: 'चैट', navHistory: 'रिकॉर्ड', navDashboard: 'डैशबोर्ड', navLogout: 'साइन आउट',
    heroTitle: 'आयुसूत्र — जीवन, मार्गदर्शित', heroSub: 'रुग्णालये शोधा, लक्षणे तपासा आणि AI आरोग्य मार्गदर्शन मिळवा',
    symTitle: 'लक्षणे तपासा', symPlaceholder: 'लक्षणे टाइप करा (उदा. ताप, डोकेदुखी)...', symAnalyze: 'विश्लेषण करा', symSeverity: 'गंभीरता धावसंख्या',
    diagTitle: 'निदान केंद्रे', diagSearch: 'चाचण्या शोधा (उदा. MRI, CBC)...', diagNearMe: '📍 माझ्या जवळ',
    bloodTitle: 'ब्लड बँक शोधा', bloodCallConfirm: 'भेट देण्यापूर्वी उपलब्धतेची खात्री करण्यासाठी कॉल करा',
    dashTitle: 'पेशंट डॅशबोर्ड', dashHealthProfile: 'आरोग्‍य प्रोफाइल', dashUpdateBtn: 'अपडेट करा →', dashMedicalNotes: 'वैद्यकीय इतिहास / नोट्स', dashAllergies: 'अॅलर्जी', dashSuccess: 'प्रोफाइल यशस्वीरित्या अपडेट झाले!',
    disclaimer: 'AI-सहाय्यित मार्गदर्शन। वैद्यकीय निदान नाही। नेहमी डॉक्टरांचा सल्ला घ्या.',
  },

  gu: { // Gujarati
    langNameNative: '\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0',
    authSignIn: 'Sign In', authCreateAccount: 'Create Account', authEmail: 'Email Address', authPass: 'Password', authName: 'Full Name', authBlood: 'Blood Group',
    navHome: 'Home', navHospitals: 'Hospitals', navSymptoms: 'Symptoms', navChat: 'Chat', navHistory: 'Records', navDashboard: 'Dashboard', navLogout: 'Sign Out',
    heroTitle: 'આયુસૂત્ર — જીવન, માર્ગદર્શિત', heroSub: 'હોસ્પિટલો શોધો, લક્ષણો તપાસો અને AI માર્ગદર્શન મેળવો',
    symTitle: 'લક્ષણો તપાસો', symPlaceholder: 'લક્ષણ લખો (દા.ત. તાવ, માથાનો દુખાવો)...', symAnalyze: 'વિશ્લેષણ કરો', symSeverity: 'ગંભીરતા સ્કોર',
    diagTitle: 'નિદાન કેન્દ્રો', diagSearch: 'ટેસ્ટ શોધો (દા.ત. MRI, CBC)...', diagNearMe: '📍 મારી નજીક',
    bloodTitle: 'બ્લડ બેંક શોધો', bloodCallConfirm: 'મુલાકાત લેતા પહેલા ઉપલબ્ધતાની પુષ્ટિ કરવા માટે કૉલ કરો',
    dashTitle: 'પેશન્ટ ડેશબોર્ડ', dashHealthProfile: 'આરોગ્ય પ્રોફાઇલ', dashUpdateBtn: 'અપડેટ કરો →', dashMedicalNotes: 'તબીબી ઇતિહાસ / નોંધો', dashAllergies: 'એલર્જી', dashSuccess: 'પ્રોફાઇલ સફળતાપૂર્વક અપડેટ થઈ!',
    disclaimer: 'AI-સહાયિત માર્ગદર્શન। તબીબી નિદાન નથી। હંમેશા ડૉક્ટરની સલાહ લો.',
  },

  ta: { // Tamil
    langNameNative: '\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD',
    authSignIn: 'உள்நுழைக', authCreateAccount: 'கணக்கை உருவாக்கு', authEmail: 'மின்னஞ்சல்', authPass: 'கடவுச்சொல்', authName: 'முழு பெயர்', authBlood: 'இரத்த வகை',
    navHome: 'முகப்பு', navHospitals: 'மருத்துவமனைகள்', navSymptoms: 'அறிகுறிகள்', navChat: 'சாட்', navHistory: 'பதிவுகள்', navDashboard: 'டாஷ்போர்டு', navLogout: 'வெளியேறு',
    heroTitle: 'ஆயுசூத்ரா — ஆயுள், வழிகாட்டி', heroSub: 'மருத்துவமனைகளைக் கண்டறியவும், அறிகுறிகளைச் சரிபார்க்கவும்',
    symTitle: 'அறிகுறிகள் சரிபார்ப்பு', symPlaceholder: 'அறிகுறிகளைத் தட்டச்சு செய்க (எ.கா. காய்ச்சல்)...', symAnalyze: 'பகுப்பாய்வு செய்', symSeverity: 'தீவிரத்தன்மை மதிப்பெண்',
    diagTitle: 'பரிசோதனை மையங்கள்', diagSearch: 'சோதனைகளைத் தேடுங்கள் (எ.கா. MRI, CBC)...', diagNearMe: '📍 அருகில் இருப்பவை',
    bloodTitle: 'இரத்த வங்கி', bloodCallConfirm: 'செல்லும் முன் இருப்பதை உறுதிப்படுத்த அழைக்கவும்',
    dashTitle: 'நோயாளி டாஷ்போர்டு', dashHealthProfile: 'ஆரோக்கிய சுயவிவரம்', dashUpdateBtn: 'மேம்படுத்த →', dashMedicalNotes: 'மருத்துவ வரலாறு / குறிப்புகள்', dashAllergies: 'ஒவ்வாமை', dashSuccess: 'சுயவிவரம் வெற்றிகரமாக புதுப்பிக்கப்பட்டது!',
    disclaimer: 'AI வழிகாட்டல் மட்டுமே. மருத்துவ நோய் கண்டறிதல் அல்ல. எப்போதும் மருத்துவரை அணுகவும்.',
  },

  te: { // Telugu
    langNameNative: '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41',
    authSignIn: 'సైన్ ఇన్', authCreateAccount: 'ఖాతాను సృష్టించండి', authEmail: 'ఈమెయిల్ అడ్రస్', authPass: 'పాస్‌వర్డ్', authName: 'పూర్తి పేరు', authBlood: 'రక్త రకం',
    navHome: 'హోమ్', navHospitals: 'ఆసుపత్రులు', navSymptoms: 'లక్షణాలు', navChat: 'చాట్', navHistory: 'రికార్డులు', navDashboard: 'డాష్‌బోర్డ్', navLogout: 'సైన్ అవుట్',
    heroTitle: 'ఆయుసూత్ర — జీవితం, మార్గదర్శి', heroSub: 'ఆసుపత్రులను కనుగొనండి, లక్షణాలను తనిఖీ చేయండి',
    symTitle: 'లక్షణాల తనిఖీ', symPlaceholder: 'లక్షణాలను నమోదు చేయండి (ఉదా. జ్వరం)...', symAnalyze: 'విశ్లేషించు', symSeverity: 'తీవ్రత స్కోరు',
    diagTitle: 'డయాగ్నస్టిక్ సెంటర్లు', diagSearch: 'పరీక్షల కోసం వెతకండి (ఉదా. MRI, CBC)...', diagNearMe: '📍 నా దగ్గరలో',
    bloodTitle: 'బ్లడ్ బ్యాంక్', bloodCallConfirm: 'వెళ్లే ముందు లభ్యతను నిర్ధారించుకోవడానికి కాల్ చేయండి',
    dashTitle: 'పేషెంట్ డాష్‌బోర్డ్', dashHealthProfile: 'ఆరోగ్య ప్రొఫైల్', dashUpdateBtn: 'అప్‌డేట్ చేయండి →', dashMedicalNotes: 'వైద్య చరిత్ర / గమనికలు', dashAllergies: 'అలెర్జీలు', dashSuccess: 'ప్రొఫైల్ విజయవంతంగా అప్‌డేట్ చేయబడింది!',
    disclaimer: 'AI మార్గదర్శకత్వం మాత్రమే. వైద్య నిర్ధారణ కాదు. ఎల్లప్పుడూ వైద్యుడిని సంప్రదించండి.',
  },

  ml: { // Malayalam
    langNameNative: '\u0D2E\u0D32\u0D2F\u0D3E\u0D32\u0D02',
    authSignIn: 'സൈൻ ഇൻ ചെയ്യുക', authCreateAccount: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക', authEmail: 'ഇമെയിൽ വിലാസം', authPass: 'പാസ്‌വേഡ്', authName: 'പൂർണ്ണനാമം', authBlood: 'രക്തഗ്രൂപ്പ്',
    navHome: 'ഹോം', navHospitals: 'ആശുപത്രികൾ', navSymptoms: 'ലക്ഷണങ്ങൾ', navChat: 'ചാറ്റ്', navHistory: 'റെക്കോർഡുകൾ', navDashboard: 'ഡാഷ്‌ബോർഡ്', navLogout: 'സൈൻ ഔട്ട്',
    heroTitle: 'ആയുസൂത്ര — ആയുസ്സ്, വഴികാട്ടി', heroSub: 'ആശുപത്രികൾ കണ്ടെത്തുക, ലക്ഷണങ്ങൾ പരിശോധിക്കുക',
    symTitle: 'രോഗലക്ഷണ പരിശോധന', symPlaceholder: 'ലക്ഷണങ്ങൾ ടൈപ്പ് ചെയ്യുക (ഉദാ: പനി)...', symAnalyze: 'പരിശോധിക്കുക', symSeverity: 'തീവ്രത സ്കോർ',
    diagTitle: 'ഡയഗ്നോസ്റ്റിക് സെന്ററുകൾ', diagSearch: 'ടെസ്റ്റുകൾ തിരയുക (ഉദാ: MRI, CBC)...', diagNearMe: '📍 എന്റെ അടുത്ത്',
    bloodTitle: 'ബ്ലഡ് ബാങ്ക്', bloodCallConfirm: 'സന്ദർശിക്കുന്നതിന് മുമ്പ് ലഭ്യത ഉറപ്പാക്കാൻ വിളിക്കുക',
    dashTitle: 'പേഷ്യന്റ് ഡാഷ്‌ബോർഡ്', dashHealthProfile: 'ആരോഗ്യ പ്രൊഫൈൽ', dashUpdateBtn: 'അപ്‌ഡേറ്റ് ചെയ്യുക →', dashMedicalNotes: 'ചികിത്സാ ചരിത്രം / കുറിപ്പുകൾ', dashAllergies: 'അലർജികൾ', dashSuccess: 'പ്രൊഫൈൽ വിജയകരമായി അപ്‌ഡേറ്റ് ചെയ്തു!',
    disclaimer: 'AI മാർഗ്ഗനിർദ്ദേശം മാത്രം. മെഡിക്കൽ രോഗനിർണ്ണയമല്ല. എപ്പോഴും ഒരു ഡോക്ടറെ സമീപിക്കുക.',
  },

  bn: { // Bengali
    langNameNative: '\u09AC\u09BE\u0982\u09B2\u09BE',
    authSignIn: 'সাইন ইন করুন', authCreateAccount: 'অ্যাকাউন্ট তৈরি করুন', authEmail: 'ইমেল ঠিকানা', authPass: 'পাসওয়ার্ড', authName: 'পুরো নাম', authBlood: 'রক্তের গ্রুপ',
    navHome: 'হোম', navHospitals: 'হাসপাতাল', navSymptoms: 'লক্ষণ', navChat: 'চ্যাট', navHistory: 'রেকর্ড', navDashboard: 'ড্যাশবোর্ড', navLogout: 'সাইন আউট',
    heroTitle: 'আয়ূসূত্র — জীবন, নির্দেশিত', heroSub: 'হাসপাতাল খুঁজুন, লক্ষণ পরীক্ষা করুন এবং AI নির্দেশিকা পান',
    symTitle: 'লক্ষণ পরীক্ষা', symPlaceholder: 'লক্ষণ লিখুন (যেমন: জ্বর, মাথাব্যথা)...', symAnalyze: 'বিশ্লেষণ করুন', symSeverity: 'তীব্রতার স্কোর',
    diagTitle: 'ডায়াগনস্টিক সেন্টার', diagSearch: 'পরীক্ষা খুঁজুন (যেমন: MRI, CBC)...', diagNearMe: '📍 আমার কাছে',
    bloodTitle: 'ব্লাড ব্যাঙ্ক', bloodCallConfirm: 'যাওয়ার আগে প্রাপ্যতা নিশ্চিত করতে কল করুন',
    dashTitle: 'পেশেন্ট ড্যাশবোর্ড', dashHealthProfile: 'স্বাস্থ্য প্রোফাইল', dashUpdateBtn: 'আপডেট করুন →', dashMedicalNotes: 'চিকিৎসা ইতিহাস / নোট', dashAllergies: 'অ্যালার্জি', dashSuccess: 'প্রোফাইল সফলভাবে আপডেট করা হয়েছে!',
    disclaimer: 'AI-চালিত নির্দেশিকা। চিকিৎসা নির্ণয় নয়। সর্বদা ডাক্তারের পরামর্শ নিন।',
  }
};

// Current language state
let currentLang = 'en';

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  // Update all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = I18N[currentLang][key];
      } else {
        el.innerHTML = I18N[currentLang][key];
      }
    }
  });
  // Update lang selector highlight
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Sync dropdowns
  const sAuth = document.getElementById('langSelectAuth'); if(sAuth) sAuth.value = lang;
  const sNav = document.getElementById('langSelectNav'); if(sNav) sNav.value = lang;
  
  // Update dropdown labels dynamically
  ['langSelectAuth', 'langSelectNav'].forEach(id => {
    const sel = document.getElementById(id);
    if(sel) {
      Array.from(sel.options).forEach(opt => {
        const l = opt.value;
        if(I18N[l] && I18N[l].langNameNative) {
          opt.textContent = I18N[l].langNameNative;
        }
      });
    }
  });

  // Store preference
  localStorage.setItem('ayusutra_lang', lang);
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || key;
}

function getLang() {
  return currentLang;
}

function initLanguage() {
  const saved = localStorage.getItem('ayusutra_lang');
  if (saved && I18N[saved]) {
    currentLang = saved;
  }
  setLanguage(currentLang);
}

// Speech recognition language codes
function getSpeechLang() {
  const map = { en: 'en-IN', hi: 'hi-IN', kn: 'kn-IN', mr: 'mr-IN', gu: 'gu-IN', ta: 'ta-IN', te: 'te-IN', ml: 'ml-IN', bn: 'bn-IN' };
  return map[currentLang] || 'en-IN';
}

// TTS language codes
function getTTSLang() {
  const map = { en: 'en-IN', hi: 'hi-IN', kn: 'kn-IN', mr: 'mr-IN', gu: 'gu-IN', ta: 'ta-IN', te: 'te-IN', ml: 'ml-IN', bn: 'bn-IN' };
  return map[currentLang] || 'en-IN';
}
