const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
   {
      question: "Which of the following can read and render HTML web pages?",
      choice1: "Server",
      choice2: "head Tak",
      choice3: "web browser",
      choice4: "empty",
      answer: 3
   },
   {
      question: "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript?",
      choice1: "new",
      choice2: "new malloc",
      choice3: "alloc",
      choice4: "malloc",
      answer: 1
   },
   {
      question: "The latest HTML standard is?",
      choice1: "HTML 4.0",
      choice2: "HTML 5.0",
      choice3: "XML",
      choice4: "SGML",
      answer: 2
   },
   {
      question: "What are variables used in JavaScript programs?",
      choice1: "Varying randomly",
      choice2: "Storing numbers, dates, and other values",
      choice3: "Used as header files",
      choice4: "None of the above",
      answer: 2
   },
   {
      question: "Identify the incorrect HTML tag among the following?",
      choice1: "<input>",
      choice2: "<select>",
      choice3: "<list>",
      choice4: "<textarea>",
      answer: 3
   }

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
   questionCounter = 0;
   score = 0;
   availableQuestions = [...questions];
  
   getNewQuestion();

}


getNewQuestion = () => {


   if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ){
      //go to the end page
      return window.location.assign("/end.html");
   }

   questionCounter ++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number]
   });

   availableQuestions.splice(questionIndex, 1)

   acceptingAnswers= true;
};

choices.forEach(choice => {
   choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;

      acceptingAnswers= false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"] 
      console.log(selectedAnswer === selectedAnswer.answer)
      getNewQuestion()
   
   } )
})

startGame ()