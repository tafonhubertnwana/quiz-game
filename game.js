const question = document.getElementById("question");
const choices = array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
letguestionCounter = 0;
let availableQuestions = [];


let Questions = [
 {
    question: "What is the full meaning of HTML",
    choice1: "Hyper Text Mark-up Language",
    choice2: "Hyper Text Make-up Language",
    choice3: "Hyper Transfer Mark-up Language",
    choice4: "Hyper Transfer Make-up Language",
    answer: 1
 }
]