let title = document.createElement("h2");
console.log(title);
title.innerHTML="Animal Quiz"
document.body.prepend(title);

document.body.style.backgroundColor = "#FFF8E7"

let ArrayofQuestions =
  [{question: "1. Which animal make the sound Oink?", 
    options:["Pig","Dog","Cat"] 
    ,correct:"Pig"},

    {question:"2.Which animal live underwater?",
    options:["Cow","Whale","Dog"]
    ,correct:"Whale"},

    {question:"3.Which animal is a herboivore?",
    options:["Cow","Tiger","Lion"]
    ,correct:"Cow"
    },

    {question:"4. Which animal can change colors went it touch it surrounding?",
    options:["Lizard","Kangaroo","Owl"]
    ,correct:"Lizard"

    },

    {question:"5.Which animal is said to be the most intelligent",
    options:["Dolpin","Raven","Iguana"],
    correct:"Dolpin"

}
];

let score = 0;// put the score of how many question the user got correct
let currentQuestion = 0; // input what question the user are in

let QuizContainer = document.querySelector(".Quiz-container");
console.log(QuizContainer);
let questionElement = document.querySelector("#Question");
console.log(questionElement);
let optionsElement = document.querySelector("#Option");
console.log(optionsElement);
let result= document.querySelector("#result");
console.log(result);

function ShowQuestion(Question) {
  optionsElement.innerHTML = " "; // empty string clear previous answers
  let current = ArrayofQuestions[Question];  //store the question object in current using the question index
  questionElement.textContent = current.question;// show the questions in the html

 current.options.forEach(option  =>{
 let button = document.createElement('button');
 button.textContent = option; //  the show the options in the html
 button.classList.add("option-button");
 button.addEventListener("click", () =>{ 
  if(option ===current.correct){ //user pick option and the correct answer will appear as correct and green otherwise it will input wrong and color red.
    result.textContent ="Correct!"
    result.style.color = "green"
    score++
  }else{
    result.textContent ="Wrong!"
    result.style.color= "red"
 }

  //currentQuestion++
  //ShowQuestion(currentQuestion)
  currentQuestion++;

   if(currentQuestion < ArrayofQuestions.length){
    setTimeout(() => {
      result.textContent = " ";
      ShowQuestion(currentQuestion);
    }, 1000);
   }else{
    questionElement.textContent =""
    optionsElement.textContent = ""
    result.textContent = "You have scored "  + score +" out of "+ArrayofQuestions.length
   }
 }
 );


 optionsElement.appendChild(button);
 });

} 

ShowQuestion(currentQuestion);








