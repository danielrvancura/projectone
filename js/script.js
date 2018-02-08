var currentQuestion = 0;
var score = 0;
var totalQuestions;

var container = document.getElementById('quiz');
var questionElement = document.getElementById('question');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var nextButton = document.getElementById('nextButton');
var resultContainer = document.getElementById('result');
var player1Score = 0;
var player2Score = 0;


var questions = [
  {
    "question": "If you avoided seeing “It”, you might have this phobia",
      "answer1": " Coimetrophobia",
      "answer2": " Coulrophobia",
      "answer3": " Coitophobia",
      "answer": "2",
      "background": 'img/clown.jpg'
    },
    {
    "question": "If Gal Gadot makes you tremble for the wrong reasons, you may have this phobia ",
      "answer1": "Verbophobia",
      "answer2": "Vestiphobia",
      "answer3": "Venustraphobia",
      "answer": "3",
      "background": 'img/gadot3.jpg'
  },
  {
    "question":  "If you hate Jethro Tull, you might have this phobia ",
      "answer1": "Aulophobia",
      "answer2": "Aurophobia",
      "answer3": "Arachibutyrophobia",
      "answer": "1",
      "background": 'img/JethroTull2Flute.jpg'
  },
  {
    "question": "Tobias Funke from Arrested Development suffers from this phobia ",
      "answer1": "Geliophobia",
      "answer2": "Gnosiophobia",
      "answer3": "Gymnophobia",
      "answer": "3",
      "background": 'img/tobias1.jpg'
  },
  {
    "question": "If bellybuttons freak you out, you might have this phobia: ",
      "answer1": "Omphalophobia",
      "answer2": "Oenophobia",
      "answer3": "Oikophobia",
      "answer": "1",
      "background": 'img/bellybutton2.jpeg'
  },
  {
    "question": "Dracula's fear of garlic is known as:",
      "answer1": "Heliophobia",
      "answer2": "Alliumphobia",
      "answer3": "Hylophobia",
      "answer": "2",
      "background": 'img/garlic.jpg'
  },
  {
    "question": "Pogonophobia is the fear of:",
      "answer1": "Pogo Sticks",
      "answer2": "The Color Purple",
      "answer3": "Beards",
      "answer": "3",
      "background": 'img/beard.jpg'
  },
];

totalQuestions = questions.length;

function setTurn(event){
    if(event.keyCode === 81){
        turn = 1;
    }
    if (event.keyCode == 80){
        turn = 2;
    }
}

function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  answer1.textContent = q.answer1;
  answer2.textContent = q.answer2;
  answer3.textContent = q.answer3;
  document.getElementsByClassName('container')[0].style.background = "url('" + questions[currentQuestion].background + "')"
};

console.log(question);

function loadNextQuestion () {
  // document.getElementsByClassName('container')[0].style.background = "url('" + questions[currentQuestion].background + "')"
  var selectedAnswer = document.querySelector('input[type=radio]:checked');
  if (!selectedAnswer){
    alert ('Please select your answer!');
    return;
  }
  var answer = selectedAnswer.value;
  if(questions[currentQuestion].answer == answer){
    if (turn === 1){
      player1Score += 1;
    } else if (turn === 2) {
      player2Score += 1;
    }
   score += 1;
  }
  selectedAnswer.checked = false;
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1){
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totalQuestions){
    container.style.display = 'none';
    resultContainer.style.display = '';
    resultContainer.textContent = 'Player 1 Score: ' + player1Score + ' Player 2 Score: ' + player2Score;
    return;
  }
  loadQuestion(currentQuestion);
}


loadQuestion(currentQuestion);
window.addEventListener('keydown', setTurn);

//
// function keyDownHandler(event)
//
