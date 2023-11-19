const question = document.getElementById("question");
const choices = array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
letguestionCounter = 0;
let availableQuestions = [];


let Questions = [
 {
    question: "Which country has the largest population?",
    choice1: "India",
    choice2: "USA",
    choice3: "Russia",
    choice4: "Nigeria",
    answer: 1
 },
 {
   question: "Which of these countries is NOT in Asia?",
   choice1: "France",
   choice2: "Israel",
   choice3: "Thailand",
   choice4: "Taiwan",
   answer: 1
},
{
   question: "On which continent is the Sahara Desert located",
   choice1: "Asia",
   choice2: "South America",
   choice3: "Africa",
   choice4: "Europe",
   answer: 3
},
{
   question: "Which country has the largest population?",
   choice1: "India",
   choice2: "USA",
   choice3: "Russia",
   choice4: "Nigeria",
   answer: 1
},





]