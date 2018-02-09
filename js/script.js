
var state = {
  turn: null,
  currentQuestion: 0,
  score: 0,
  player1Score: 0,
  player2Score: 0,
  totalQuestions: null
};

var container = document.getElementById('quiz');
var instructions = document.getElementById('instructions');
var questionElement = document.getElementById('question');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var playButton = document.getElementById('play');
var nextButton = document.getElementById('nextButton');
var resultContainer = document.getElementById('result');


var questions = [
  {
    "question": "If you avoided seeing “It”, you probably have this phobia",
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
    "question":  "If you can't stand Jethro Tull, you might have this phobia",
      "answer1": "Aulophobia",
      "answer2": "Aurophobia",
      "answer3": "Arachibutyrophobia",
      "answer": "1",
      "background": 'img/JethroTull2Flute.jpg'
  },
  {
    "question": 'Tobias Funke from Arrested Development and "dozens of others" suffer from this phobia ',
      "answer1": "Geliophobia",
      "answer2": "Gnosiophobia",
      "answer3": "Gymnophobia",
      "answer": "3",
      "background": 'img/tobias1.jpg'
  },
  {
    "question": "If bellybuttons freak you out, you might have this phobia:",
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
    "question": "Beards might give you the willies if you have this phobia:",
      "answer1": "Placophobia",
      "answer2": "Prosophobia",
      "answer3": "Pogonophobia",
      "answer": "3",
      "background": 'img/beard.jpg'
  },
  {
    "question": "Pluviophobiacs could never live in Seattle:",
      "answer1": "Fear of traffic",
      "answer2": "Fear of rain",
      "answer3": "Fear of hills",
      "answer": "2",
      "background": 'img/seattle2.png'
  },
  {
    "question": "You probably avoided the 11 Friday the 13th movies due to this phobia:",
      "answer1": "Peladophobia",
      "answer2": "Pediculophobia",
      "answer3": "Paraskavedekatriaphobia",
      "answer": "3",
      "background": 'img/jason2.jpg'
  },
  {
    "question": "Ironically, the fear of long words:",
      "answer1": "Sesquipedalophobia",
      "answer2": "Autodysomophobia",
      "answer3": "Chronomentrophobia",
      "answer": "1",
      "background": 'img/bee.jpg'
  },
  {
    "question": "You avoid the cheese plate at parties due to this phobia",
      "answer1": "Turophobia",
      "answer2": "Deipnophobia",
      "answer3": "Cheimaphobia",
      "answer": "1",
      "background": 'img/cheese.jpg'
  },
];

state.totalQuestions = questions.length;
// 2 player buzzer function
function setTurn(event){
    if(event.keyCode === 81){
        state.turn = 1;
        nextButton.style.display = '';
        player1.style.display = '';
        showAnswers();
    }
    if (event.keyCode === 80){
        state.turn = 2;
        nextButton.style.display = '';
        player2.style.display = '';
        showAnswers();
    }
}

function hideAnswers () {
  document.querySelectorAll('.answer').forEach(function(answer){
    answer.style.display = 'none';
  });
}

function showAnswers () {
  document.querySelectorAll('.answer').forEach(function(answer){
    answer.style.display = '';
  });
}
//load questions into container
function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  answer1.textContent = q.answer1;
  answer2.textContent = q.answer2;
  answer3.textContent = q.answer3;
  document.getElementsByClassName('container')[0].style.background = "url('" + questions[state.currentQuestion].background + "')"
  nextButton.style.display= "none";
  player1.style.display = "none";
  player2.style.display = "none";
  hideAnswers();
};
console.log(question);

//load next question
function loadNextQuestion () {
  document.querySelector("#answer" + questions[state.currentQuestion].answer).parentElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  var selectedAnswer = document.querySelector('input[type=radio]:checked');
  if (!selectedAnswer){
    alert ('Please select your answer!');
    return;
  }

  var answer = selectedAnswer.value;
  if(questions[state.currentQuestion].answer === answer){
    if (state.turn === 1){
      state.player1Score += 1;
    } else if (state.turn === 2) {
      state.player2Score += 1;
    }
    state.score += 1;
  } else {
    console.log("right answer: ", questions[state.currentQuestion].answer);
    console.log("State: ", state);
  }
  console.log(state.player1Score);
  console.log(state.player2Score);

  selectedAnswer.checked = false;
  state.currentQuestion++;
  if (state.currentQuestion === state.totalQuestions - 1){
    nextButton.textContent = "Finish";
  }
  if (state.currentQuestion === state.totalQuestions){
    container.style.display = 'none';
    player1.style.display = "none";
    player2.style.display = "none";
    resultContainer.style.display = '';
    resultContainer.textContent = 'Player 1 Score: ' + state.player1Score + ' Player 2 Score: ' + state.player2Score;
    // resultContainer.textContent = state.player2Score=state.player1Score = "You Tied";
    return;
  }




  loadQuestion(state.currentQuestion);
}
//

var startQuiz = function () {
  container.style.display = '';
  instructions.style.display = 'none';
  var audio = document.getElementById("sound");
  audio.play();
}

function questionClick(e) {
  var clickedElement = e.target;
  console.log(clickedElement);
  if (clickedElement.tagName === 'SPAN' || clickedElement.tagName === 'INPUT' || clickedElement.tagName === 'LABEL') {
    document.querySelector("#answer" + questions[state.currentQuestion].answer).parentElement.style.backgroundColor = "green";
  }
}

var init = function() {
  playButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', loadNextQuestion);
  document.getElementById('quiz').addEventListener('click', questionClick);
  container.style.display = 'none';
}

loadQuestion(state.currentQuestion);
  window.addEventListener('keydown', setTurn);
  document.addEventListener('DOMContentLoaded', init);
