// grabbing everything I need from the page
const homePage = document.getElementById("home-page");
const answerPage = document.getElementById("answer-page");
const magicBall = document.querySelector(".large-ball")
const askButton = document.querySelector (".ask-btn");
const questionInput = document.getElementById("questionbox");
const questionText = document.getElementById("question-text")
const ballAnswer = document.querySelector("#answer-page .ball-answer");
const againButton= document.getElementById("ask-again-btn");
const shakeSound = document.getElementById("shake-sound");
const bgMusic = document.getElementById("bg-music");

// every possible answer the ball can give
const answers = [
    "It is certain",
    "Most likely",
    "It is decidedly so",
    "Without a doubt",
    "yes, definitely",
    "You may rely on it", 
    "Signs point to yes",
    "Ask anything later", 
    "Cannot predict now", 
    "Don't count on it", 
    "My sources say no",
    "Very doubtful",
    "My reply is no",
    "Outlook not so good",
    "As I see it, yes",
];

function askQuestion() {
    const question = questionInput.value.trim();

    // don't let people ask an empty question
    if (question === "") {
        alert("Please enter a question!!");
        return;
    }

    questionText.textContent = `"${question}"`;

    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];

    // reset the ball back to the big 8 before shaking
    ballAnswer.textContent = "8";
    ballAnswer.classList.remove("has-answer"); 
    againButton.classList.add("hidden");
    window.scrollTo(0,0);

    homePage.classList.add("hidden");
    answerPage.classList.remove("hidden");
    bgMusic.pause();

    magicBall.classList.remove("shake");
    void magicBall.offsetWidth;

    // when the shake ends, reveal the answer and the "ask again" button
    magicBall.addEventListener("animationend", () => {
        ballAnswer.textContent = selectedAnswer;
        ballAnswer.classList.add("has-answer"); // switches to the small text
        againButton.classList.remove("hidden");
    }, {once: true});

    playSounds();                       
    magicBall.classList.add("shake"); 
}

function playSounds() {
    shakeSound.currentTime = 0;
    shakeSound.play().catch(() => {});
}

function playMusic() {
    if (!homePage.classList.contains("hidden")) {
        bgMusic.play().catch(() => {});
    }
}

document.addEventListener("click", playMusic, { once: true});
document.addEventListener("keydown",playMusic, {once: true});

function askAgain() {
    questionInput.value = ""; // clear the old question
    answerPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    window.scrollTo(0,0);
    questionInput.focus(); // ready to type
    playMusic();
}
