
const answers = [
    "It is certain",
    "Without a doubt",
    "yes, definitely",
    "You may rely on it", 
    "Signs point to yes",
    "Ask anything later", 
    "Cannot predict now", 
    "Don't count on it", 
    "My sources say no",
    "Very doubtful"
];

const homePage = document.getElementById("home-page");
const answerPage = document.getElementById("answer-page");
const askButton = document.querySelector (".ask-btn");
const questionInput = document.getElementById("question");
const ballAnswer = document.getElementById("ball-answer");

function askQuestion() {
    const question = questionInput.value.trim();

    if (question === "") {
        alert("Please enter a question!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);
    ballAnswer.textContent = answers[randomIndex];

    homePage.classList.add("hidden");
    answerPage.classList.remove("hidden");
}