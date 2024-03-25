// common.js

// Function to set language preference
function setLanguagePreference(language) {
    localStorage.setItem('languagePreference', language);
}

// Function to get language preference
function getLanguagePreference() {
    return localStorage.getItem('languagePreference');
}

// Function to apply translation
function applyTranslation() {
    const languagePreference = getLanguagePreference();
    if (languagePreference) {
        const selectElement = document.querySelector('.goog-te-combo');
        selectElement.value = languagePreference;
        selectElement.dispatchEvent(new Event('change'));
    }
}

// Apply translation on page load
window.onload = function() {
    applyTranslation();
};
