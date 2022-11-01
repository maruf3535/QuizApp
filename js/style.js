const questions = [
    {
        'que': "What is your name?",
        'a': "Maruf",
        'b': "Rafsan",
        'c': "Shihab",
        'd': "Nidhi",
        'correct': "a"
    },
    {
        'que': "Which class do you read in?",
        'a': "One",
        'b': "Two",
        'c': "Four",
        'd': "Tweleve",
        'correct': "c"
    },
    {
        'que': "What is your favourite subject?",
        'a': "Math",
        'b': "ICT",
        'c': "Bangla",
        'd': "English",
        'correct': "a"
    },
    {
        'que': "What is your hobby?",
        'a': "Reading Books",
        'b': "Playing Online Games",
        'c': "Coding",
        'd': "Blogging",
        'correct': "d"
    },
]

var index = 0;
var totalQuestions = questions.length;
const answerInputs = document.getElementsByClassName('answers');
const answerLabels = document.getElementsByClassName('option-label');

const getData = (i) => {
    return questions[i];
}

const loadQuestion = () => {
    if (index == totalQuestions) {
        return endQuiz();
    }
    resetInputs();
    const data = getData(index);
    document.querySelector('#quizBoxQue').innerText = `${index + 1}) ${data.que}`;
    answerLabels[0].innerText = data.a;
    answerLabels[1].innerText = data.b;
    answerLabels[2].innerText = data.c;
    answerLabels[3].innerText = data.d;
}

var right = wrong = 0;
const submitQuiz = () => {
    const ans = getAnswer();
    const data = getData(index);
    if (ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
}

const getAnswer = () => {
    for (elm of answerInputs) {
        if (elm.checked) {
            return elm.value;
        }
    }
}

const resetInputs = ()=>{
    for (elm of answerInputs) {
        elm.checked = false;
    }
}

const endQuiz = () => {
    document.querySelector('#quizBox').innerHTML = `
    <div id="answerBox">
        <h3>Thanks for your participations!</h3>
        <h4><span style="color: green; margin-top: 8px;">${right} / ${totalQuestions}</span> are correct.</h4>
    </div>
    `;
}

loadQuestion()
