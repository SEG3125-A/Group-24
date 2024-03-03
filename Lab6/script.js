// Function to fetch survey results from URL parameters
function fetchSurveyResults() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const surveyData = [];

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
    } catch (error) {
        console.error('Error fetching survey results:', error);
        return [];
    }
}

// Function to analyze survey results
function analyzeSurveyResults(surveyData) {
    try {
        const analysis = [];

        surveyData.forEach(question => {
            const options = question.answers.map(answer => answer.option);
            const counts = question.answers.map(answer => answer.count);
            const totalResponses = counts.reduce((total, count) => total + count, 0);

            analysis.push({ question: question.question, options, counts, totalResponses });
        });

        return analysis;
    } catch (error) {
        console.error('Error analyzing survey results:', error);
        return [];
    }
}

// Function to display survey results or analyst's point of view
function displayResultsOrAnalystView(analysis, containerId) {
    try {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        analysis.forEach(question => {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${question.question}</h2>`;

            question.options.forEach((option, index) => {
                const percentage = ((question.counts[index] / question.totalResponses) * 100).toFixed(2);
                div.innerHTML += `<p>${option}: ${question.counts[index]} responses (${percentage}%)</p>`;
            });

            container.appendChild(div);
        });
    } catch (error) {
        console.error('Error displaying survey results or analyst\'s point of view:', error);
    }
}

// Entry point
function init() {
    try {
        const surveyData = fetchSurveyResults();
        const analysis = analyzeSurveyResults(surveyData);

        displayResultsOrAnalystView(analysis, 'surveyResults'); // Display survey results
        displayResultsOrAnalystView(analysis, 'analystView');   // Display analyst's point of view
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// Function to save survey responses to local storage
function saveSurveyResponses(formData) {
    try {
        const surveyResponses = JSON.parse(localStorage.getItem('surveyResponses')) || [];
        surveyResponses.push(formData);
        localStorage.setItem('surveyResponses', JSON.stringify(surveyResponses));
    } catch (error) {
        console.error('Error saving survey responses:', error);
    }
}

// Function to retrieve past survey responses from local storage
function getPastSurveyResponses() {
    try {
        return JSON.parse(localStorage.getItem('surveyResponses')) || [];
    } catch (error) {
        console.error('Error retrieving past survey responses:', error);
        return [];
    }
}

// Call init function when the page loads
window.onload = init;
