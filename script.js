let questions = [
    {
        "question": "In welchem Stadion hat die TSG nie gespielt? (Pflichtspiel)",
        "answer_1": "Stadion an der Grünwalder Str. (München)",
        "answer_2": "Olympiastadion München",
        "answer_3": "Weserstadion Trainingsplatz 11 (Bremen)",
        "answer_4": "GAZI-Stadion Stuttgart Kickers",
        "right_answer": 2
    },

    {
        "question": "Wer hat das erste Bundesliga Tor der TSG geschossen?",
        "answer_1": "Demba Ba",
        "answer_2": "Sejad Salihovic",
        "answer_3": "Vedad Ibisevic",
        "answer_4": "Chinedu Obasi",
        "right_answer": 3
    },

    {
        "question": "Wie ging der erste Sieg gegen den Fc Bayern aus?",
        "answer_1": "2:0",
        "answer_2": "1:0",
        "answer_3": "4:1",
        "answer_4": "2:1",
        "right_answer": 2
    },

    {
        "question": "Welcher Trainer hat die meisten Bundesliga Spiele mit der TSG?",
        "answer_1": "Ralf Rangnick",
        "answer_2": "Julian Nagelsmann",
        "answer_3": "Markus Gisdol",
        "answer_4": "Sebastian Hoeness",
        "right_answer": 2
    },
    {
        "question": "Wer ist in der ewigen Tabelle vor Hoffe?",
        "answer_1": "Arminia Bielefeld",
        "answer_2": "Fc Augsburg",
        "answer_3": "MSV Duisburg",
        "answer_4": "Waldhof Mannheim",
        "right_answer": 3
    },
    {
        "question": "Wie viel Zuschauer hat das Dietmar Hopp Stadion?",
        "answer_1": "6350",
        "answer_2": "3500",
        "answer_3": "6000",
        "answer_4": "5250",
        "right_answer": 1
    },
    {
        "question": "Gegen wen kassierte die TSG ihre 1. Bundesliga Niederlage",
        "answer_1": "VfL Wolfsburg",
        "answer_2": "Bayern München",
        "answer_3": "Werder Bremen",
        "answer_4": "Bayer Leverkusen",
        "right_answer": 4
    },
    {
        "question": "Welcher Spieler spielte in der Hoffenheimer Akademie?",
        "answer_1": "Kerim Demirbay",
        "answer_2": "Tobi Weis",
        "answer_3": "Vincenzo Grifo",
        "answer_4": "Stefan Posch",
        "right_answer": 3
    },
    {
        "question": "Wie lautet der erste Fanclub der TSG Hoffenheim",
        "answer_1": "Hoffema Jungs",
        "answer_2": "Blue Dragons",
        "answer_3": "Supporters Hoffenheim",
        "answer_4": "Zwinger Club",
        "right_answer": 4
    },
];


let rightQuestions = [];
let currentQuestion = 0;
let audio_success = new Audio('img/audios.mp3');
let audio_fail = new Audio('img/fail.mp3');


function init() {
    document.getElementById('count').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {


    if(currentQuestion >= questions.length) {

        document.getElementById('endScreen').style = "";
        document.getElementById('questionBody').style = "display: none";
        document.getElementById('numbersLength').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;

    } else {

    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`; 


    
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

}

function buttonClick(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`; 

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('rightAnswer').innerHTML += `<img src="img/awesome-yes.gif" alt="">`
        rightQuestions++;
        audio_success.play();

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-Button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('page').innerHTML = `${currentQuestion+1}`
    document.getElementById('rightAnswer').innerHTML = ``;
    document.getElementById('next-Button').disabled = true;
    resetAnswerButtons();
    showQuestion();
    buttonClick();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');   
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('endScreen').style = "display: none";
    document.getElementById('questionBody').style = '';

    rightQuestions = 0;
    currentQuestion = 0;
    init();


}