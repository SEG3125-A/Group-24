// Function to fetch survey results from URL parameters
function fetchSurveyResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const surveyData = [];

    // Iterate through URL parameters to extract survey data
    urlParams.forEach((value, key) => {
        if (key.startsWith('question')) {
            const question = decodeURIComponent(value);
            const answers = [];
            const optionCount = parseInt(urlParams.get(`count_${key}`));

            for (let i = 1; i <= optionCount; i++) {
                const option = decodeURIComponent(urlParams.get(`${key}_option_${i}`));
                const count = parseInt(urlParams.get(`${key}_count_${i}`));
                answers.push({ option, count });
            }

            surveyData.push({ question, answers });
        }
    });

    return surveyData;
}

// Function to analyze survey results
function analyzeSurveyResults(surveyData) {
    // Perform analysis on survey data and generate insights
    // For simplicity, let's just count the total responses for each option
    const analysis = [];

    surveyData.forEach(question => {
        const options = question.answers.map(answer => answer.option);
        const counts = question.answers.map(answer => answer.count);
        const totalResponses = counts.reduce((total, count) => total + count, 0);

        analysis.push({ question: question.question, options, counts, totalResponses });
    });

    return analysis;
}

// Function to display survey results
function displaySurveyResults(analysis) {
    const surveyResults = document.getElementById('surveyResults');
    surveyResults.innerHTML = '';

    analysis.forEach(question => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${question.question}</h2>`;

        question.options.forEach((option, index) => {
            const percentage = ((question.counts[index] / question.totalResponses) * 100).toFixed(2);
            div.innerHTML += `<p>${option}: ${question.counts[index]} responses (${percentage}%)</p>`;
        });

        surveyResults.appendChild(div);
    });
}

// Function to display analyst's point of view
function displayAnalystView(analysis) {
    // You can provide more sophisticated analysis based on the survey data
    // For simplicity, let's just display the same data as survey results
    displaySurveyResults(analysis);
}

// Entry point
function init() {
    const surveyData = fetchSurveyResults();
    const analysis = analyzeSurveyResults(surveyData);

    displaySurveyResults(analysis); // Display survey results
    displayAnalystView(analysis);   // Display analyst's point of view
}

// Function to save survey responses to local storage
function saveSurveyResponses(formData) {
    const surveyResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
    surveyResponses.push(formData);
    localStorage.setItem('surveyResponses', JSON.stringify(surveyResponses));
}

// Function to retrieve past survey responses from local storage
function getPastSurveyResponses() {
    return JSON.parse(localStorage.getItem('surveyResponses')) || [];
}


// Call init function when the page loads
window.onload = init;

// Function to send survey data to the analyst page
function submitSurvey(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Serialize form data
    const formData = new FormData(document.getElementById('OPL_form'));
    const queryParams = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        queryParams.append(key, value);
    }
    
    // Redirect to analyst page with survey data as URL parameters
    window.location.href = `analyst.html?${queryParams.toString()}`; //not sure what you called the analyst page
}

// Add event listener for form submission
document.getElementById('OPL_form').addEventListener('submit', submitSurvey);

