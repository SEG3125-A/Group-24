// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); 
    console.log('Form submitted');
    const formData = new FormData(document.getElementById('OPL_form'));
    saveSurveyResponses(formData); 
    window.location.href = 'surveyresult.html'; 
}

// Call init function when the page loads
window.onload = function() {
    const form = document.getElementById('OPL_form');
    form.addEventListener('submit', handleSubmit); 
}
