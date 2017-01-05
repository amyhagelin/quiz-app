
// ARRAY - questions for the quiz
// var state = {
// 	nextVariable: ,
// 	currentQuestionIndex: ,
// }
// var nextVariable = // ...
var correctCounter = 0;
var currentQuestionIndex = 0;
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

// function renderStartPage() {
// return '<div>' +
// 	'<span>How well do you know Chilean Slang?</span>' +
// 	'<button class="start">Start Quiz</button>' +
// '</div>';
// }


function renderQuestion(array) { 
	var questionHtml = ('<div class="multiple-choice">' +
		'<span class="question">' + array.text + '</span>' +
		'<button answer="'+ array.answers[0].correct +'" class="answer">' + array.answers[0].text + '</button>' +
		'<button answer="'+ array.answers[1].correct +'" class="answer">' + array.answers[1].text + '</button>' +
		'<button answer="'+ array.answers[2].correct +'" class="answer">' + array.answers[2].text + '</button>' +
		'<button answer="'+ array.answers[3].correct +'" class="answer">' + array.answers[3].text + '</button>' +
		'</div>');
	$("#multiple-choice").append(questionHtml);
}

function renderCorrect() {
	var correct = ('<div class="answer">' +
		'<span class="correct">Yay! You got it!</span>' +
		'<button class="next">Next</button>');
	$("#multiple-choice").append(correct);
}	

function renderHeader() {
	var header = ('<div class="header">' + (currentQuestionIndex + 1) +
		'/' + questions.length + '</div>');
	$("#multiple-choice").prepend(header);
}

function renderIncorrect() {
	var incorrect = ('<div class="answer">' +
		'<span class="correct">Boo! Better luck next time!</span>' +
		'<button class="next">Next</button>');
	$("#multiple-choice").append(incorrect);
}

function handleAnswer(selection) {
	currentQuestionIndex = currentQuestionIndex + 1
	// $("#multiple-choice").empty();
	// disable all buttons
	// .attr('disabled')
	$("button.answer").attr('disabled', 'disabled'); 

	if (selection === "true") {
		console.log("correct");
		correctCounter += 1;
		renderCorrect();
	};
	if (selection === "false") {
		console.log("incorrect");
		renderIncorrect();
	};
}

function renderFinal() {
	console.log("end of quiz");
	var final = ('<h2>' + 'Final score: ' + correctCounter + ' out of ' + questions.length + ' correct' + '</h2>');
	$("#multiple-choice").append(final);

}

// EVENT LISTENERS

$(document).on('click', 'button.next', function(event) { 
	$("#multiple-choice").empty();
	console.log(currentQuestionIndex);
	if (currentQuestionIndex === questions.length) {
		renderFinal();
	}
	else {
		renderHeader();	
		renderQuestion(questions[currentQuestionIndex]);
	}
});

$(document).on('click', 'button.start', function(event) { 
	// event.preventDefault();
	renderHeader();	
	console.log("I was clicked");
	$( "#start-page" ).hide();
	console.log(questions[currentQuestionIndex]);
	renderQuestion(questions[currentQuestionIndex]);
	$(document).on('click', 'button.answer', function(event) {
		console.log("An answer has been clicked");
		console.log($(this).attr('answer'));
		var selection = $(this).attr('answer');
		console.log(selection);
		handleAnswer(selection)	;
		
	});
});


// $( document ).ready(function() {
//     console.log( "ready!" );
//     renderStartPage();
// });
// home page ie quiz title and start quiz button (hide all others?)
// when you click the start button, show render first question



