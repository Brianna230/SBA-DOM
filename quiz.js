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
    option:["Lizard","Kangaroo","Owl"]
    ,correct:"Lizard"

    },

    {question:"5.Which animal is said to be the most intelligent",
    option:["Dolpin","Raven","Iguana"],
    correct:"Dolpin"

}
];





