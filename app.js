// Questions for Wojciech:
// github repo
// structuring html - render items, event on button, function (hiding Q, showing next one), or remove and create
// structuring object - use hide function from jquery or make new elements (just have empty page)
// moving from screen to screen
// where should I be in the curriculum by the end of January?


// ARRAY - questions for the quiz
var currentQuestionIndex = 0
var questions = [
  { 
    text: 'What do you call a hot guy?', 
    answers: [
      {text: 'Lolo', correct: false},
      {text: 'Bacán', correct: false},
      {text: 'Mino', correct: true},
      {text: 'Elegante', correct: false}
    ] 
  },
  {
	text: 'What’s the word for being too bold and taking advantage of a situation?', 
    answers: [
      {text: 'Rallado', correct: false},
      {text: 'Patudo', correct: true},
      {text: 'Audaz', correct: false},
      {text: 'Boludo', correct: false}
    ]   
	},
	{
	text: 'How do you say something is worthless?', 
    answers: [
      {text: 'Sinverguenza', correct: false},
      {text: 'Se me echó la yegua', correct: false},
      {text: 'Mas vale tarde que nunca', correct: false},
      {text: 'Vale callampa', correct: true}
    ]  
	},
	{
	text: 'How do you say you’re going out partying tonight?', 
    answers: [
      {text: 'Me voy de carrete', correct: true},
      {text: 'Me voy de movida', correct: false},
      {text: 'Me voy de lote', correct: false},
      {text: 'Me voy en dodge', correct: false}
      ]
	},
	{
	text: 'What do you call your girlfriend?', 
    answers: [
      {text: 'Amiguita', correct: false},
      {text: 'Galla', correct: false},
      {text: 'Polola', correct: true},
      {text: 'Cabra', correct: false}
    ]   
	}
];

// FUNCTIONS - render question

function renderStartPage() {
return '<div>' +
	'<span>How well do you know Chilean Slang?</span>' +
	'<button class="start">Start Quiz</button>' +
'</div>';
}

// should I render the answers with For Each?
//Should I render the question and the answers separately?
function renderQuestion(array) { // array should be questions[number]
return '<div class="multiple-choice">' +
	'<span class="question">' + array.text + '</span>' +
	'<button class="answer">' + array.answers[0] + '</button>'
	'<button class="answer">' + array.answers[1] + '</button>'
	'<button class="answer">' + array.answers[2] + '</button>'
	'<button class="answer">' + array.answers[3] + '</button>' +
'</div>';
}

function evaluateAnswer(selection) { // selection should be answer clicked
// they select something
// program needs to find the array item that corresponds to that buttom
// then needs to determine if true or false and act accordingly
if (questions[0].answers[0].correct === true) {
  
};
}

// EVENT LISTENERS

$( document ).ready(function() {
    console.log( "ready!" );
    renderStartPage();
});
// home page ie quiz title and start quiz button (hide all others?)
// when you click the start button, show render first question



