const quizBody = document.querySelector(".quiz-body");
const question = document.querySelector(".question");
const opt1 = document.querySelector(".opt-1");
const opt2 = document.querySelector(".opt-2");
const opt3 = document.querySelector(".opt-3");
const opt4 = document.querySelector(".opt-4");
const answerEls = document.querySelectorAll(".answer");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");
const shareSection = document.querySelector(".share-section");
const shareBtn = document.querySelector(".share-btn");
const firstSection = document.querySelector(".firstSection--container");
const letSeeBtn = document.querySelector(".letSee--btn");
const timeElement = document.querySelector(".timer");

const quizData = [
  {
    question: "When was Dr. Ambedkar born?",
    a: "14th April, 1891",
    b: "14th April, 1893",
    c: "11th April, 1890",
    d: "14th March, 1892",
    correct: "a",
  },
  {
    question: "What was the name of Dr. Ambedkar's father?",
    a: "Ramji Maloji Sakpal",
    b: "Sambha ji Sakpal",
    c: "Yashwant Sambha Ambedkar",
    d: "None of these",
    correct: "a",
  },
  {
    question: "When was Dr. Ambedkar given Bharat Ratna?",
    a: "1980",
    b: "1990",
    c: "1985",
    d: "1979",
    correct: "b",
  },
  {
    question: "What is the name of Dr. Ambedkar's memorial site?",
    a: "Samta sthal",
    b: "Chaityabhoomi",
    c: "Buddhist bhumi",
    d: "Deekshabhoomi",
    correct: "b",
  },
  {
    question:
      "Dr. Ambedkar was the chairman of which committee constituted to form the Indian Constitution?",
    a: "Preamble committee",
    b: "Drafting committee",
    c: "Flag committee",
    d: "Union constiitution committee",
    correct: "b",
  },
  {
    question:
      "Which of the following books has not been written by Dr. Ambedkar?",
    a: "Thoughts on Pakistan",
    b: "Annihilation of caste",
    c: "The problem of Rupee",
    d: "Gandhi, Nehru and Tagore",
    correct: "d",
  },
  {
    question:
      "Which of the following magazine was not launched by Dr. Ambedkar?",
    a: "Mooknayak",
    b: "Bahishkrit Bharat",
    c: "Prabuddh Bharat",
    d: "Saraswati",
    correct: "d",
  },
  {
    question:
      "Which of the following political parties has not been formed by Dr. Ambedkar?",
    a: "Republican Party Of India",
    b: "Indian Labour Party",
    c: "Scheduled Caste Federation",
    d: "Socialist party of India",
    correct: "d",
  },
  {
    question:
      "In which year did Dr Ambedkar embrace Buddhism along with his lakhs of followers?",
    a: "1949",
    b: "1951",
    c: "1956",
    d: "1948",
    correct: "c",
  },
  {
    question: "Which book is considered as the Magmum Opus of Dr Ambedkar?",
    a: "THe Buddha And His Dhamma",
    b: "Revolution And Counter-Revolution",
    c: "Riddles in Hinduism",
    d: "State And Minorities",
    correct: "a",
  },
  {
    question:
      "Where was the 4th World Buddhist Conference held where Babasaheb delivered his infamous speech 'Buddha Or Karl Marx'?",
    a: "Ceylon",
    b: "Burma",
    c: "Nepal",
    d: "Japan",
    correct: "c",
  },
  {
    question: "Who were Babasaheb's 3 gurus?",
    a: "Ranade, Gandhi & Jinnah",
    b: "Buddha, Kabir & Jotiba Phule",
    c: "Shivaji maharaj, Sant Tukaram, Chokhamela",
    d: "Jesus,  King Ashoka & Guru Nanak",
    correct: "b",
  },
  {
    question:
      "When was the historic speech 'What way Emancipation?' speech delivered by Dr Ambedkar?",
    a: "31st May, 1936",
    b: "13th October, 1935",
    c: "14th April, 1939",
    d: "6th June, 1934",
    correct: "a",
  },
  {
    question: "Between whom was the Poona Pact signed?",
    a: "Dr Ambedkar and Nehru",
    b: "Dr Ambedkar and Gandhi",
    c: "Dr Ambedkar and Sardar patel",
    d: "Dr Ambedkar and Rajendra Prasad",
    correct: "b",
  },
  {
    question:
      "According to Dr. Ambedkar which Article is the most important article of Indian constitution?",
    a: "Article 21",
    b: "Article 24",
    c: "Article 32",
    d: "Article 49",
    correct: "c",
  },
  {
    question: "How many Doctoral degrees did Ambedkar have?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "d",
  },
  {
    question: "Which form of government Dr Ambedkar preferred?",
    a: "Constitutional Democracry",
    b: "Monarchy",
    c: "Artistocracy",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "In which college did Dr Ambedkar study in India?",
    a: "Hindu College",
    b: "Elphinstone College",
    c: "Delhi College",
    d: "Isabella College",
    correct: "b",
  },
  {
    question: "What portfolio was handled by Dr Ambedkar in Independent India",
    a: "Home Ministry",
    b: "Finance Ministry",
    c: "Education Ministry",
    d: "Law Ministry",
    correct: "d",
  },
  {
    question:
      " Who provided scholarship to Dr. Ambedkar for his studies abroad?",
    a: "Maharaja of Kolhapu",
    b: "Nizam of Hyderabad",
    c: "Travancore of Maharaja",
    d: "Maharaja of Baroda",
    correct: "d",
  },
  {
    question: "From whom did Dr Ambedkar derive his philosophy of life?",
    a: "Karl Marx",
    b: "Lord Buddha",
    c: "John Dewey",
    d: "Jotiba Phule",
    correct: "b",
  },

  {
    question:
      "At which place Babasaheb embraced Buddhism with his lakhs of followers?",
    a: "Mumbai",
    b: "Nagpur",
    c: "Delhi",
    d: "Baroda",
  },
];

let score = 0;
let index = 0;
let time;
const totalTime = 10;
let sec = totalTime;

function timer() {
  timeElement.innerHTML = `Time left : ${sec}`;
  sec--;
  if (sec === -2) {
    // sec = totalTime;
    // clearInterval(time);
    index++;
    if (index < 10) {
      loadQuizBody();
    } else {
      quizBody.style.visibility = "hidden";
      quizBody.setAttribute("class", "quizBody-img");
      quizBody.innerHTML = '<img src="Ambedkar.png"/>';
      quizBody.style.visibility = "visible";
      const caption = document.createElement("p");
      caption.innerHTML = "In Photo - Dr B. R. Ambedkar";
      caption.setAttribute("class", "img-caption");
      quizBody.append(caption);

      // output.innerHTML = `<h2>Jai Bhim! You answered correctly at ${score}/10 questions.</h2>

      // <button onclick="location.reload()">Play Again!</button>`;

      output.innerHTML = `${remark(score)} 
      <br/>
      <button onclick="location.reload()">Play Again!</button>`;

      shareBtn.style.display = "grid";

      shareSection.style.display = "grid";
    }
  }
}

function deselectAns() {
  answerEls.forEach((answerEL) => {
    answerEL.checked = false;
  });
}

function selectAns() {
  let answer;
  answerEls.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });
  return answer;
}

function randomUniqueNum(range, count) {
  let nums = new Set();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * range + 1));
  }
  let arrOfNums = Array.from(nums);
  return arrOfNums;
}
const randomQuestionIndex = randomUniqueNum(quizData.length - 1, 10);
console.log(randomQuestionIndex);

function loadFirstPage() {
  firstSection.style.display = "block";
  quizBody.style.display = "none";
}

function loadQuizBody() {
  firstSection.style.display = "none";
  quizBody.style.display = "block";
  deselectAns();
  console.log(`click`);
  const currentQuestionIndex = randomQuestionIndex[index];
  const currentQuizData = quizData[currentQuestionIndex];

  question.innerText = currentQuizData.question;
  opt1.innerText = currentQuizData.a;
  opt2.innerText = currentQuizData.b;
  opt3.innerText = currentQuizData.c;
  opt4.innerText = currentQuizData.d;
  sec = totalTime;
  clearInterval(time);
  timer();
  time = setInterval(timer, 1000);
}

loadFirstPage();

letSeeBtn.addEventListener("click", loadQuizBody);

function remark(score) {
  if (score > 8) {
    return `Kudos & JaiBhim! Your score is ${score}/10! You do know a lot about the great personality that is Dr Bhimrao Ramji Ambedkar!`;
  } else if (score >= 5 && score <= 8) {
    return `JaiBhim! Your score is ${score}/10! You do seem to know quite a bit about the great persoanilty that is Dr Bhimrao Ramji Ambedkar!`;
  } else if (score >= 0 && score < 5) {
    return `JaiBhim! Your score is ${score}/10! You don't seem to know much about the great persoanilty that is Dr Bhimrao Ramji Ambedkar. Please read him and about him!`;
  }
}

function clickHandler() {
  const answer = selectAns();

  if (answer) {
    let cuurentRandomIndex = randomQuestionIndex[index];
    if (answer === quizData[cuurentRandomIndex].correct) {
      score = score + 1;
    } else {
      score;
    }
    index++;
    if (index < 10) {
      loadQuizBody();
    } else {
      quizBody.style.visibility = "hidden";
      quizBody.setAttribute("class", "quizBody-img");
      quizBody.innerHTML = '<img src="Ambedkar.png"/>';
      quizBody.style.visibility = "visible";
      const caption = document.createElement("p");
      caption.innerHTML = "In Photo - Dr B. R. Ambedkar";
      caption.setAttribute("class", "img-caption");
      quizBody.append(caption);

      // output.innerHTML = `<h2>Jai Bhim! You answered correctly at ${score}/10 questions.</h2>

      // <button onclick="location.reload()">Play Again!</button>`;

      output.innerHTML = `${remark(score)} 
      <br/>
      <button onclick="location.reload()">Play Again!</button>`;

      shareBtn.style.display = "grid";

      shareSection.style.display = "grid";
    }
  }
}

submitButton.addEventListener("click", clickHandler);

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: `Dr-Ambedkar-Quiz!`,
        text: `My score was ${score}/10! You also try here:`,
        url: "https://ambedkaritequiz.netlify.app/",
      })
      .catch(errorHandler);
  }
}

function errorHandler() {
  alert(`There was some error!`);
}

shareBtn.addEventListener("click", share);
