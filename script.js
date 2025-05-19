let formSurvey = document.getElementById("surveyForm");
console.log(formSurvey);

let labelQ1 = document.getElementById("QuestOne");
console.log(labelQ1);

labelQ1.innerHTML = "1. What is your favorite animal? (Choose one)";

let label02 = document.getElementById("QuestTwo");
console.log(label02);

label02.innerText = "2.Why do you like it?";

let submitButton = document.createElement("button");
submitButton.textContent = "Submit!"

console.log(submitButton)



submitButton.classList.add("survey-button");
formSurvey.appendChild(submitButton);



submitButton.addEventListener("click", (event) =>{
   if(!formSurvey.checkValidity()){
    event.preventDefault();
    formSurvey.reportValidity();
    // console.log('Please fill out all required fields correctly')
   }else{
    console.log("Form submitted successfully")
   }

});

console.log(formSurvey.contains(submitButton)); // should return true if it's inside the form