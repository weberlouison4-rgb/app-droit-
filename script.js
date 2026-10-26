// Application de révision de droit L2

// Variables globales
let currentSubject = null;
let currentSession = null;
let currentExercise = null;
let currentExerciseIndex = 0;
let currentScore = 0;
let maxScore = 0;
let userAnswers = [];
let exerciseData = null;
let globalScore = 0;
let totalExercisesCompleted = 0;

// DOM Elements
const pages = {
    home: document.getElementById('homePage'),
    subject: document.getElementById('subjectPage'),
    session: document.getElementById('sessionPage'),
    exercise: document.getElementById('exercisePage'),
    results: document.getElementById('resultsPage')
};

const containers = {
    categories: document.getElementById('categoriesGrid'),
    sessions: document.getElementById('sessionsGrid'),
    exercises: document.getElementById('exercisesGrid'),
    exerciseContent: document.getElementById('exerciseContainer'),
    exerciseNavigation: document.getElementById('exerciseNavigation'),
    resultsDetails: document.getElementById('resultsDetails')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    setupEventListeners();
    updateGlobalScoreDisplay();
});

// Load categories (subjects) on home page
function loadCategories() {
    containers.categories.innerHTML = '';
    
    subjectsData.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${subject.icon}</div>
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            <span class="session-count">${subject.sessions.length} séances</span>
        `;
        card.addEventListener('click', () => selectSubject(subject));
        containers.categories.appendChild(card);
    });
}

// Select a subject and show its sessions
function selectSubject(subject) {
    currentSubject = subject;
    currentSession = null;
    currentExercise = null;
    
    // Update subject page
    document.getElementById('subjectTitle').textContent = subject.name;
    document.getElementById('subjectDescription').textContent = subject.description;
    
    // Load sessions
    containers.sessions.innerHTML = '';
    subject.sessions.forEach(session => {
        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <h3>${session.icon} ${session.name}</h3>
            <div class="session-meta">
                <span>${session.exercises.length} exercices</span>
                <span>Niveau: Facile à Difficile</span>
            </div>
            <p>${session.description}</p>
        `;
        card.addEventListener('click', () => selectSession(session));
        containers.sessions.appendChild(card);
    });
    
    // Show subject page
    switchPage('subject');
}

// Select a session and show its exercises
function selectSession(session) {
    currentSession = session;
    currentExercise = null;
    currentExerciseIndex = 0;
    
    // Update session page
    document.getElementById('sessionTitle').textContent = session.name;
    document.getElementById('sessionDescription').textContent = session.description;
    
    // Load exercises
    containers.exercises.innerHTML = '';
    session.exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        let levelClass = 'level-easy';
        let levelText = 'Facile';
        if (exercise.level === 'medium') {
            levelClass = 'level-medium';
            levelText = 'Moyen';
        } else if (exercise.level === 'hard') {
            levelClass = 'level-hard';
            levelText = 'Difficile';
        }
        
        let icon = '📚';
        if (exercise.type === 'qcm') icon = '✅';
        else if (exercise.type === 'true-false') icon = '❓';
        else if (exercise.type === 'jurisprudence-matching') icon = '⚖️';
        
        card.innerHTML = `
            <div class="exercise-type-icon">${icon}</div>
            <div class="exercise-type">${getExerciseTypeName(exercise.type)}</div>
            <div class="exercise-level ${levelClass}">${levelText}</div>
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            <span class="exercise-questions">${exercise.questions} questions</span>
        `;
        card.addEventListener('click', () => selectExercise(exercise));
        containers.exercises.appendChild(card);
    });
    
    // Show session page
    switchPage('session');
}

// Get exercise type name in French
function getExerciseTypeName(type) {
    const names = {
        'flashcards': 'Flashcards',
        'qcm': 'QCM',
        'true-false': 'Vrai ou Faux',
        'jurisprudence-matching': 'Jurisprudence'
    };
    return names[type] || type;
}

// Select an exercise and start it
function selectExercise(exercise) {
    currentExercise = exercise;
    currentExerciseIndex = 0;
    currentScore = 0;
    userAnswers = [];
    exerciseData = exercise.data;
    maxScore = exercise.questions;
    
    // Update exercise page
    document.getElementById('exerciseTitle').textContent = getExerciseTypeName(exercise.type);
    document.getElementById('exerciseDescription').textContent = `Niveau: ${exercise.level}`;
    document.getElementById('currentScore').textContent = currentScore;
    document.getElementById('maxScore').textContent = maxScore;
    
    // Load exercise content
    loadExerciseContent(exercise.type);
    
    // Show exercise page
    switchPage('exercise');
}

// Load exercise content based on type
function loadExerciseContent(type) {
    containers.exerciseContent.innerHTML = '';
    containers.exerciseNavigation.innerHTML = '';
    
    switch (type) {
        case 'flashcards':
            loadFlashcards();
            break;
        case 'qcm':
            loadQCM();
            break;
        case 'true-false':
            loadTrueFalse();
            break;
        case 'jurisprudence-matching':
            loadJurisprudenceMatching();
            break;
        default:
            containers.exerciseContent.innerHTML = '<p>Type d\'exercice non reconnu.</p>';
    }
}

// Load flashcards exercise
function loadFlashcards() {
    const flashcardContainer = document.createElement('div');
    flashcardContainer.className = 'flashcard-container';
    
    const flashcard = document.createElement('div');
    flashcard.className = 'flashcard';
    
    const front = document.createElement('div');
    front.className = 'flashcard-face flashcard-front';
    front.innerHTML = `<div class="flashcard-text">${exerciseData[currentExerciseIndex].question}</div>`;
    
    const back = document.createElement('div');
    back.className = 'flashcard-face flashcard-back';
    back.innerHTML = `<div class="flashcard-text">${exerciseData[currentExerciseIndex].answer}</div>`;
    
    flashcard.appendChild(front);
    flashcard.appendChild(back);
    flashcardContainer.appendChild(flashcard);
    
    containers.exerciseContent.appendChild(flashcardContainer);
    
    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'flashcard-navigation';
    nav.innerHTML = `
        <button class="flashcard-btn" id="showAnswerBtn">Montrer la réponse</button>
        <button class="flashcard-btn" id="nextFlashcardBtn">Suivant</button>
    `;
    containers.exerciseNavigation.appendChild(nav);
    
    // Event listeners
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
    
    document.getElementById('showAnswerBtn').addEventListener('click', () => {
        flashcard.classList.add('flipped');
    });
    
    document.getElementById('nextFlashcardBtn').addEventListener('click', () => {
        if (currentExerciseIndex < exerciseData.length - 1) {
            currentExerciseIndex++;
            loadFlashcards();
        } else {
            showResults();
        }
    });
}

// Load QCM exercise
function loadQCM() {
    const qcmContainer = document.createElement('div');
    qcmContainer.className = 'qcm-container';
    
    const question = exerciseData[currentExerciseIndex];
    
    const questionText = document.createElement('div');
    questionText.className = 'qcm-question';
    questionText.innerHTML = `<div class="qcm-question-text">${currentExerciseIndex + 1}. ${question.question}</div>`;
    
    const options = document.createElement('div');
    options.className = 'qcm-options';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'qcm-option';
        optionDiv.innerHTML = `<span class="qcm-option-label">${String.fromCharCode(65 + index)}.</span><span class="qcm-option-text">${option}</span>`;
        optionDiv.dataset.index = index;
        optionDiv.addEventListener('click', () => selectQCMOption(index));
        options.appendChild(optionDiv);
    });
    
    const feedback = document.createElement('div');
    feedback.className = 'qcm-feedback';
    feedback.id = 'qcmFeedback';
    
    qcmContainer.appendChild(questionText);
    qcmContainer.appendChild(options);
    qcmContainer.appendChild(feedback);
    
    containers.exerciseContent.appendChild(qcmContainer);
    
    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'qcm-navigation';
    nav.innerHTML = `
        <button class="qcm-btn" id="validateQCMBtn" disabled>Valider</button>
        <button class="qcm-btn" id="nextQCMBtn">Suivant</button>
    `;
    containers.exerciseNavigation.appendChild(nav);
    
    // Event listeners
    document.getElementById('validateQCMBtn').addEventListener('click', validateQCMAnswer);
    document.getElementById('nextQCMBtn').addEventListener('click', () => {
        if (currentExerciseIndex < exerciseData.length - 1) {
            currentExerciseIndex++;
            loadQCM();
        } else {
            showResults();
        }
    });
}

// Select QCM option
function selectQCMOption(index) {
    const options = document.querySelectorAll('.qcm-option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    
    // Store user answer
    userAnswers[currentExerciseIndex] = index;
    
    // Enable validate button
    document.getElementById('validateQCMBtn').disabled = false;
}

// Validate QCM answer
function validateQCMAnswer() {
    const question = exerciseData[currentExerciseIndex];
    const selectedIndex = userAnswers[currentExerciseIndex];
    const options = document.querySelectorAll('.qcm-option');
    const feedback = document.getElementById('qcmFeedback');
    
    if (selectedIndex === question.correctAnswer) {
        // Correct answer
        options[selectedIndex].classList.add('correct');
        feedback.className = 'qcm-feedback correct active';
        feedback.textContent = `✅ Correct ! ${question.explanation || 'Bonne réponse !'}`;
        currentScore++;
    } else {
        // Incorrect answer
        options[selectedIndex].classList.add('incorrect');
        options[question.correctAnswer].classList.add('correct');
        feedback.className = 'qcm-feedback incorrect active';
        feedback.textContent = `❌ Incorrect. ${question.explanation || 'La bonne réponse était : ' + String.fromCharCode(65 + question.correctAnswer)}`;
    }
    
    // Update score
    document.getElementById('currentScore').textContent = currentScore;
    
    // Disable all options and validate button
    options.forEach(opt => opt.style.pointerEvents = 'none');
    document.getElementById('validateQCMBtn').disabled = true;
    document.getElementById('validateQCMBtn').style.display = 'none';
}

// Load True/False exercise
function loadTrueFalse() {
    const tfContainer = document.createElement('div');
    tfContainer.className = 'true-false-container';
    
    const question = exerciseData[currentExerciseIndex];
    
    const questionText = document.createElement('div');
    questionText.className = 'true-false-question';
    questionText.innerHTML = `<div class="true-false-question-text">${currentExerciseIndex + 1}. ${question.statement}</div>`;
    
    const options = document.createElement('div');
    options.className = 'true-false-options';
    options.innerHTML = `
        <div class="true-false-option" data-value="true">
            <span class="true-false-icon">✅</span>
            <span>Vrai</span>
        </div>
        <div class="true-false-option" data-value="false">
            <span class="true-false-icon">❌</span>
            <span>Faux</span>
        </div>
    `;
    
    const feedback = document.createElement('div');
    feedback.className = 'true-false-feedback';
    feedback.id = 'trueFalseFeedback';
    
    tfContainer.appendChild(questionText);
    tfContainer.appendChild(options);
    tfContainer.appendChild(feedback);
    
    containers.exerciseContent.appendChild(tfContainer);
    
    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'true-false-navigation';
    nav.innerHTML = `
        <button class="qcm-btn" id="validateTFBtn" disabled>Valider</button>
        <button class="qcm-btn" id="nextTFBtn">Suivant</button>
    `;
    containers.exerciseNavigation.appendChild(nav);
    
    // Event listeners
    document.querySelectorAll('.true-false-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.true-false-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            userAnswers[currentExerciseIndex] = option.dataset.value === 'true';
            document.getElementById('validateTFBtn').disabled = false;
        });
    });
    
    document.getElementById('validateTFBtn').addEventListener('click', validateTrueFalseAnswer);
    document.getElementById('nextTFBtn').addEventListener('click', () => {
        if (currentExerciseIndex < exerciseData.length - 1) {
            currentExerciseIndex++;
            loadTrueFalse();
        } else {
            showResults();
        }
    });
}

// Validate True/False answer
function validateTrueFalseAnswer() {
    const question = exerciseData[currentExerciseIndex];
    const selectedValue = userAnswers[currentExerciseIndex];
    const options = document.querySelectorAll('.true-false-option');
    const feedback = document.getElementById('trueFalseFeedback');
    
    if (selectedValue === question.answer) {
        // Correct answer
        const selectedOption = Array.from(options).find(opt => 
            (opt.dataset.value === 'true' && selectedValue) || 
            (opt.dataset.value === 'false' && !selectedValue)
        );
        selectedOption.classList.add('correct');
        feedback.className = 'true-false-feedback correct active';
        feedback.textContent = `✅ Correct ! ${question.explanation || 'Bonne réponse !'}`;
        currentScore++;
    } else {
        // Incorrect answer
        const selectedOption = Array.from(options).find(opt => 
            (opt.dataset.value === 'true' && selectedValue) || 
            (opt.dataset.value === 'false' && !selectedValue)
        );
        selectedOption.classList.add('incorrect');
        
        const correctOption = Array.from(options).find(opt => 
            (opt.dataset.value === 'true' && question.answer) || 
            (opt.dataset.value === 'false' && !question.answer)
        );
        correctOption.classList.add('correct');
        
        feedback.className = 'true-false-feedback incorrect active';
        feedback.textContent = `❌ Incorrect. ${question.explanation || 'La bonne réponse était : ' + (question.answer ? 'Vrai' : 'Faux')}`;
    }
    
    // Update score
    document.getElementById('currentScore').textContent = currentScore;
    
    // Disable all options and validate button
    options.forEach(opt => opt.style.pointerEvents = 'none');
    document.getElementById('validateTFBtn').disabled = true;
    document.getElementById('validateTFBtn').style.display = 'none';
}

// Load Jurisprudence Matching exercise
function loadJurisprudenceMatching() {
    const jmContainer = document.createElement('div');
    jmContainer.className = 'jurisprudence-matching';
    
    // Shuffle the data for each new exercise
    const shuffledData = [...exerciseData].sort(() => Math.random() - 0.5);
    
    // Create left column (jurisprudence)
    const leftColumn = document.createElement('div');
    leftColumn.className = 'jurisprudence-column';
    leftColumn.innerHTML = '<div class="jurisprudence-column-title">Jurisprudence</div>';
    
    const leftItems = document.createElement('div');
    leftItems.className = 'jurisprudence-items';
    
    shuffledData.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'jurisprudence-item';
        itemDiv.textContent = item.jurisprudence;
        itemDiv.dataset.index = index;
        itemDiv.dataset.type = 'jurisprudence';
        itemDiv.addEventListener('click', () => selectJurisprudenceItem(itemDiv));
        leftItems.appendChild(itemDiv);
    });
    
    leftColumn.appendChild(leftItems);
    jmContainer.appendChild(leftColumn);
    
    // Create right column (contributions)
    const rightColumn = document.createElement('div');
    rightColumn.className = 'jurisprudence-column';
    rightColumn.innerHTML = '<div class="jurisprudence-column-title">Apport Jurisprudentiel</div>';
    
    const rightItems = document.createElement('div');
    rightItems.className = 'jurisprudence-items';
    
    shuffledData.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'jurisprudence-item';
        itemDiv.textContent = item.contribution;
        itemDiv.dataset.index = index;
        itemDiv.dataset.type = 'contribution';
        itemDiv.addEventListener('click', () => selectJurisprudenceItem(itemDiv));
        rightItems.appendChild(itemDiv);
    });
    
    rightColumn.appendChild(rightItems);
    jmContainer.appendChild(rightColumn);
    
    containers.exerciseContent.appendChild(jmContainer);
    
    // Add feedback
    const feedback = document.createElement('div');
    feedback.className = 'jurisprudence-matching-feedback';
    feedback.id = 'jurisprudenceFeedback';
    containers.exerciseContent.appendChild(feedback);
    
    // Add navigation
    const nav = document.createElement('div');
    nav.className = 'jurisprudence-matching-navigation';
    nav.innerHTML = `
        <button class="qcm-btn" id="validateJMBtn" disabled>Valider</button>
        <button class="qcm-btn" id="nextJMBtn">Suivant</button>
    `;
    containers.exerciseNavigation.appendChild(nav);
    
    // Event listeners
    document.getElementById('validateJMBtn').addEventListener('click', validateJurisprudenceMatching);
    document.getElementById('nextJMBtn').addEventListener('click', () => {
        if (currentExerciseIndex < exerciseData.length - 1) {
            currentExerciseIndex++;
            loadJurisprudenceMatching();
        } else {
            showResults();
        }
    });
}

// Select jurisprudence item
let selectedJurisprudenceItem = null;
function selectJurisprudenceItem(item) {
    // If already matched, don't do anything
    if (item.classList.contains('matched')) return;
    
    // If no item selected, select this one
    if (!selectedJurisprudenceItem) {
        selectedJurisprudenceItem = item;
        item.classList.add('selected');
        return;
    }
    
    // If same type, deselect current and select new
    if (selectedJurisprudenceItem.dataset.type === item.dataset.type) {
        selectedJurisprudenceItem.classList.remove('selected');
        selectedJurisprudenceItem = item;
        item.classList.add('selected');
        return;
    }
    
    // If different types, try to match
    if (selectedJurisprudenceItem.dataset.type !== item.dataset.type) {
        const jIndex = parseInt(selectedJurisprudenceItem.dataset.index);
        const cIndex = parseInt(item.dataset.index);
        
        if (jIndex === cIndex) {
            // Correct match
            selectedJurisprudenceItem.classList.add('matched');
            selectedJurisprudenceItem.classList.remove('selected');
            item.classList.add('matched');
            currentScore++;
        } else {
            // Incorrect match
            selectedJurisprudenceItem.classList.add('mismatched');
            selectedJurisprudenceItem.classList.remove('selected');
            item.classList.add('mismatched');
        }
        
        selectedJurisprudenceItem = null;
        
        // Update score
        document.getElementById('currentScore').textContent = currentScore;
        
        // Check if all items are matched
        const allMatched = document.querySelectorAll('.jurisprudence-item:not(.matched)').length === 0;
        if (allMatched) {
            document.getElementById('validateJMBtn').disabled = false;
        }
    }
}

// Validate Jurisprudence Matching
function validateJurisprudenceMatching() {
    const feedback = document.getElementById('jurisprudenceFeedback');
    
    // Check if all matches are correct
    const allCorrect = document.querySelectorAll('.jurisprudence-item.mismatched').length === 0;
    
    if (allCorrect) {
        feedback.className = 'jurisprudence-matching-feedback correct active';
        feedback.textContent = `✅ Excellent ! Toutes les associations sont correctes.`;
    } else {
        feedback.className = 'jurisprudence-matching-feedback incorrect active';
        feedback.textContent = `❌ Certaines associations sont incorrectes. Retentez !`;
        
        // Remove incorrect matches
        document.querySelectorAll('.jurisprudence-item.mismatched').forEach(item => {
            item.classList.remove('mismatched', 'selected');
        });
        currentScore = 0;
        document.getElementById('currentScore').textContent = currentScore;
    }
    
    // Disable validate button if all correct
    if (allCorrect) {
        document.getElementById('validateJMBtn').disabled = true;
    }
}

// Show results
function showResults() {
    // Calculate final score
    const percentage = Math.round((currentScore / maxScore) * 10);
    const finalScore = Math.round(percentage * 10) / 10; // Round to 1 decimal
    
    // Update global score
    globalScore += finalScore;
    totalExercisesCompleted++;
    updateGlobalScoreDisplay();
    
    // Update results page
    document.getElementById('finalScore').textContent = finalScore;
    
    // Create results details
    const details = document.createElement('div');
    details.innerHTML = `
        <h3>Détails de votre performance</h3>
        <p>Vous avez obtenu <span class="correct-answers">${currentScore} bonnes réponses</span> sur ${maxScore} questions.</p>
        <p>Taux de réussite : <strong>${finalScore}/10</strong></p>
        <p>Niveau : ${currentExercise.level}</p>
        <p>Type d'exercice : ${getExerciseTypeName(currentExercise.type)}</p>
    `;
    
    containers.resultsDetails.innerHTML = '';
    containers.resultsDetails.appendChild(details);
    
    // Show results page
    switchPage('results');
}

// Update global score display
function updateGlobalScoreDisplay() {
    if (totalExercisesCompleted > 0) {
        const averageScore = globalScore / totalExercisesCompleted;
        document.getElementById('scoreValue').textContent = averageScore.toFixed(1);
    }
}

// Switch between pages
function switchPage(page) {
    Object.keys(pages).forEach(key => {
        pages[key].classList.remove('active');
    });
    pages[page].classList.add('active');
}

// Setup event listeners for back buttons
function setupEventListeners() {
    document.getElementById('backToHome').addEventListener('click', () => {
        switchPage('home');
        currentSubject = null;
    });
    
    document.getElementById('backToSubject').addEventListener('click', () => {
        selectSubject(currentSubject);
        currentSession = null;
    });
    
    document.getElementById('backToSession').addEventListener('click', () => {
        selectSession(currentSession);
        currentExercise = null;
    });
    
    document.getElementById('restartExercise').addEventListener('click', () => {
        selectExercise(currentExercise);
    });
    
    document.getElementById('returnToMenu').addEventListener('click', () => {
        switchPage('home');
        currentSubject = null;
        currentSession = null;
        currentExercise = null;
    });
}

// Utility function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
