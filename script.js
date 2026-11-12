
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
const magicBall = document.querySelector(".large-ball")
const askButton = document.querySelector (".ask-btn");
const questionInput = document.getElementById("questionbox");
const ballAnswer = document.querySelector(".ball-answer");

function askQuestion() {
    const question = questionInput.value.trim();

    if (question === "") {
        alert("Please enter a question!!");
        return;
    }

    window.scrollTo(0,0);

    homePage.classList.add("hidden");
    answerPage.classList.remove("hidden");

    ballAnswer.textContent = "8";

    magicBall.classList.remove("shake");
    void magicBall.offsetWidth;
    magicBall.classList.add("shake");

    magicBall.onanimationend = () => {
        ballAnswer.textContent = answers[Math.floor(Math.random() * answers.length)];
        magicBall.classList.remove("shake");
    };
}
askButton.addEventListener("click", askQuestion);