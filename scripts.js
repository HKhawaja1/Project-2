/*jshint esversion: 6 */

/* List of quiz questions
https://stackoverflow.com/questions/37247474/es6-in-jshint-jshintrc-has-esversion-but-still-getting-warning-using-atom
https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
https://www.radiotimes.com/quizzes/pub-quiz-golf/
https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_functions.asp
*/

const quizQuestions = [{
		question: "Which year was golf's last appearance at the Olympic Games before returning to the line-up of sports in 2016?",
		imageSrc: "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg",
		imageAlt: "Golf Ball",
		imageCaption: "<a href='https://www.pexels.com/photo/titrist-golf-ball-near-golf-hole-54123/' target='_blank'>Photo by Tyler Hendy from Pexels</a>",
		answers: ["1904", "1920", "1936", "1960"],
		correctAnswer: 0,
	},
	{
		question: "Who was top of the golf world rankings prior to lockdown?",
		imageSrc: "https://images.pexels.com/photos/2828723/pexels-photo-2828723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Ball 2",
		imageCaption: "<a href='https://www.pexels.com/photo/close-up-photo-of-golf-ball-2828723/' target='_blank'>Photo by Thomas Ward from Pexels</a>",
		answers: ["Tiger Woods", "Brooks Koepka", "Rory McIlroy", "Dustin Johnson"],
		correctAnswer: 3,
	},
	{
		question: "How many times has Tiger Woods won The Masters?",
		imageSrc: "https://images.pexels.com/photos/114972/pexels-photo-114972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Swinging",
		imageCaption: "<a href='https://www.pexels.com/photo/person-grass-sport-outdoors-114972/' target='_blank'>Photo by Markus Spiske from Pexels</a>",
		answers: ["3", "4", "5", "6"],
		correctAnswer: 2,
	},
	{
		question: "Which year did Brooks Koepka win his first major?",
		imageSrc: "https://images.pexels.com/photos/274133/pexels-photo-274133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Ball and CLub",
		imageCaption: "<a href='https://www.pexels.com/photo/activity-club-course-golf-274133/' target='_blank'>Photo by Pixabay from Pexels</a>",
		answers: ["2014", "2015", "2016", "2017"],
		correctAnswer: 1,
	},
	{
		question: "Who won The Match: Tiger Woods v Phil Mickelson in 2018?",
		imageSrc: "https://images.pexels.com/photos/164250/pexels-photo-164250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Course",
		imageCaption: "<a href='https://www.pexels.com/photo/green-grass-field-beside-body-of-water-under-blue-sky-during-daytime-164250/' target='_blank'>Photo by Pixabay from Pexels</a>",
		answers: ["Tiger Woods", "Phil Mickelson", "Tie", "Rain Delay"],
		correctAnswer: 0,
	},
	{
		question: "Name the only non-American player to win a major in 2019?",
		imageSrc: "https://images.pexels.com/photos/54122/pexels-photo-54122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Putter",
		imageCaption: "",
		answers: ["Rory McIlroy", "Brooks Koepka", "Jordan Spieth", "Shane Lowry"],
		correctAnswer: 3,
	},
	{
		question: "Which golfer holds the record for the most PGA Tour wins?",
		imageSrc: "https://images.pexels.com/photos/1325751/pexels-photo-1325751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Tee and Ball",
		imageCaption: "",
		answers: ["Jack Nicklaus", "Arnold Palmer", "Tiger Woods", "Sam Snead"],
		correctAnswer: 2,
	},
	{
		question: "Who won the U.S. Open golf tournament in 2021?",
		imageSrc: "https://images.pexels.com/photos/137523/pexels-photo-137523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Ball 3",
		imageCaption: "",
		answers: ["Jon Rahm", "Bryson DeChambeau", "Phil Mickelson", "Dustin Johnson"],
		correctAnswer: 0,
	},
	{
		question: "Which golf course is known as 'The Home of Golf'?",
		imageSrc: "https://images.pexels.com/photos/1174996/pexels-photo-1174996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Ball 4",
		imageCaption: "",
		answers: ["Augusta National Golf Club", "St. Andrews Links", "Pebble Beach Golf Links", "Royal Melbourne Golf Club"],
		correctAnswer: 1,
	},
	{
		question: "Who holds the record for the most consecutive weeks ranked as the world number one golfer?",
		imageSrc: "https://images.pexels.com/photos/1325727/pexels-photo-1325727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imageAlt: "Golf Balls",
		imageCaption: "",
		answers: ["Tiger Woods", "Greg Norman", "Dustin Johnson", "Rory McIlroy"],
		correctAnswer: 0,
	},
];

let currentQuestionIndex = 0;
let score = {
	correct: 0,
	incorrect: 0,
};

/* Loads questions and answers 
https://www.w3schools.com/jsref/prop_node_textcontent.asp
https://www.w3schools.com/jsref/prop_img_src.asp
https://www.w3schools.com/jsref/prop_area_alt.asp
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
*/
function loadQuestion() {
	const currentQuestion = quizQuestions[currentQuestionIndex];
	const questionElement = document.getElementById("question");
	const imageElement = document.getElementById("question-image");
	const captionElement = document.getElementById("image-caption");
	const answersElement = document.getElementById("answers");

	questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
	imageElement.src = currentQuestion.imageSrc;
	imageElement.alt = currentQuestion.imageAlt;
	captionElement.innerHTML = currentQuestion.imageCaption;

	answersElement.textContent = ""; // Clears the previous answers

	/* Creates the answer buttons
	https://www.w3schools.com/jsref/prop_html_classname.asp
	https://www.w3schools.com/jsref/met_node_appendchild.asp
	https://www.w3schools.com/js/js_loop_for.asp
	*/
	for (let i = 0; i < currentQuestion.answers.length; i++) {
		const answerButton = document.createElement("button");
		answerButton.className = "answer-btn";
		answerButton.textContent = currentQuestion.answers[i];
		answerButton.addEventListener("click", evaluateAnswer); // Assigns an event listener to evaluateAnswer
		answersElement.appendChild(answerButton);
	}
}

/* Checks if answer is correct or incorrect
https://www.w3schools.com/jsref/jsref_if.asp
*/
function evaluateAnswer(event) {
	const selectedAnswer = event.target.textContent;
	const currentQuestion = quizQuestions[currentQuestionIndex];

	if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswer]) {
		score.correct++;
		document.getElementById("correct-score").textContent = score.correct;
	} else {
		score.incorrect++;
		document.getElementById("incorrect-score").textContent = score.incorrect;
	}

	currentQuestionIndex++;

	if (currentQuestionIndex < quizQuestions.length) {
		loadQuestion();
	} else {
		hideQuestions();
		showScore();
	}
}

/* Hides the question and answers
https://www.w3schools.com/jsref/prop_style_display.asp
*/

function hideQuestions() {
	document.getElementById("question-container").style.display = "none";
}

// Displays the final score
function showScore() {
	const totalQuestions = quizQuestions.length;
	const finalScore = document.getElementById("score-container");
	finalScore.innerHTML = `
  <p>Congratulations! You got ${score.correct}/${totalQuestions} questions correct!</p>
  <button id="feedback-btn">Give Feedback</button>
  <div id="feedback-container" style="display: none;">
    <form id="feedback-form">
      <label for="feedback-input">Feedback:</label>
      <textarea id="feedback-input" required></textarea>
      <button type="submit">Submit</button>
    </form>
    <div id="feedback-message"></div>
  </div>
`;

	const feedbackButton = document.getElementById("feedback-btn");
	feedbackButton.addEventListener("click", showFeedbackForm);
}

/* Displays the feedback form
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/
function showFeedbackForm() {
	const feedbackContainer = document.getElementById("feedback-container");
	feedbackContainer.style.display = "block";
	const feedbackForm = document.getElementById("feedback-form");
	feedbackForm.addEventListener("submit", submitFeedback);

	const feedbackButton = document.getElementById("feedback-btn");
	feedbackButton.style.display = "none";
}

/* Handles the feedback form submission
https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL
https://www.w3schools.com/jsref/met_form_reset.asp
https://www.tabnine.com/code/javascript/functions/builtins/EventTarget/reset
https://www.w3schools.com/jsref/prop_text_value.asp
*/

function submitFeedback(event) {
	event.preventDefault();
	const feedbackMessage = document.getElementById("feedback-message");
	feedbackMessage.textContent = "Your feedback has been recorded.";
	feedbackMessage.style.display = "block";
	event.target.reset();

	const feedbackForm = document.getElementById("feedback-form");
	feedbackForm.style.display = "none";
}



// Starts the quiz
loadQuestion();