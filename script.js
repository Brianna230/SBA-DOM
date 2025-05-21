let body = document.getElementById("body")

let formSurvey = document.getElementById("surveyForm");
console.log(formSurvey);

let labelQ1 = document.getElementById("QuestOne");
console.log(labelQ1);

labelQ1.innerHTML = "1. What is your favorite animal? (Choose one)";

let label02 = document.getElementById("QuestTwo");
console.log(label02);

label02.innerText = "2.Why do you like it?";

formSurvey.style.backgroundColor = "#F0EFE9"
formSurvey.style.border = "#D1C4E9"
document.body.style.backgroundColor = "#FFF8E7"


let submitButton = document.createElement("button");
submitButton.textContent = "Submit!"

console.log(submitButton)

submitButton.style.backgroundColor = "#81C784"

submitButton.classList.add("survey-button");
formSurvey.appendChild(submitButton);

let Quizbutton = document.createElement('button');
Quizbutton.textContent = "QUIZ TIME"
console.log(Quizbutton);
Quizbutton.classList.add("quiz-button");
formSurvey.appendChild(Quizbutton);
Quizbutton.style.backgroundColor = "#81C784"
Quizbutton.style.marginLeft = '30px'
Quizbutton.style.display ="none"
formSurvey.appendChild(Quizbutton);

submitButton.addEventListener("click", (event) =>{
   if(!formSurvey.checkValidity()){ // Check if user answer question
    event.preventDefault(); //Prevent form submitting before user answer
    formSurvey.reportValidity();// browser prompt user to answer questions
    // console.log('Please fill out all required fields correctly')
   }else{
    event.preventDefault();
    console.log("Form submitted successfully")
    Quizbutton.style.display = "inline-block"
   }

});

Quizbutton.addEventListener("click",(event)=>{
   event.preventDefault();
   window.location.href = "html2.html";
});


console.log(formSurvey.contains(submitButton)); // should return true if it's inside the form