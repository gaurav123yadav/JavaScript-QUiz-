
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "what is the full form o html?",
    answer: "Hypertext Markup Language",
    options: [
      "Hello To My Land",
      "Hey Text Markup Language",
      "Hypertaxt Markup Language",
      "Hypertext Markup Language",
    ]
  },

  {
    id: 5,
    question: "What is the full form of CSS?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Cascading Style Sheep",
      "Cartoon Style Sheets",
      "Cascading Super Sheets",
    ]
  },

  {
    id: 6,
    question: "What is the full form of HTTP?",
    answer: "Hypertext Transfer Protocol",
    options: [
      "Hypertext Transfer Product",
      "Hypertext Test Protocol",
      "Hey Transfer Protocol",
      "Hypertext Transfer Protocol",
    ]
  },
  {
    id: 7,
    question: "What is the full form of JS?",
    answer: "JavaScript",
    options: [
      "JavaScript",
      "JavaSuper",
      "JustScript",
      "JordenShoes",

    ]
  },

  {
    id: 8,
    question: "What does HTML stand for?",
    answer:  "Hyper Text Markup Language",
    options: [
        "Hyper Tag Markup Language",
        "Hyper Text Markup Language",
        "Hyperlinks Text Mark Language",
        "Hyperlinking Text Marking Language",
    ]
    
},
{   id: 9,
    question: "What does CSS stand for?",
    answer:  "Cascading Style Sheet",
    options: [
        "Computing Style Sheet",
        "Creative Style System",
        "Cascading Style Sheet",
        "Creative Styling Sheet",
    ]
   
},
{    
  id: 10, 
    question: "Where should a CSS file be referenced in a HTML file?",
    answer: "Inside the head section",
    options: [
        "Before any HTML code",
        "After all HTML code",
        "Inside the head section",
        "Inside the body section",
    ]
    
},
{
     id: 11,
    question: "What is the correct format for aligning written content to the center of the page in CSS?",
        answer: "Text-align:center;",
        options: [
        "Text-align:center;",
        "Font-align:center;",
        "Text:align-center;",
        "Font:align-center;",
    ]
    
},
{
    id: 12,
    question: "What is the correct format for changing the background colour of a div in CSS?",
        answer: "Background-color:red;",
    options: [
        "Bg-color:red;",
        "bg:red;",
        "Background-colour:red;",
        "Background-color:red;",
    ]
   
},
{   id: 13,
    question: "Choose the correct HTML tag for the largest heading",
    answer: "<h1>",
    options: ["<heading>", "<h6>", "<head>", "<h1>"],
   
},
{
    id: 14,
    question: "Which is the correct CSS syntax?",
    answer:"Body {color: black}",
    options: [
        "Body {color: black}",
        "{body;color:black}",
        "{body:color=black(body}",
        "body:color=black",
    ]
  },
  
{   
    id: 15,
    question: "In CSS, what is the correct option to select all the tags on a page?",
        answer:  "* { }",
       options: ["<p> { }", ".p { }", "#p { }", "* { }"]
   
},
{   
  id: 16, 
    question: "Select the correct HTML tag to make a text italic?",
    answer: "I",
    options: ["Italic", "II", "IT", "I"]
   
},
{   
    id: 17,
    question: "Select the correct HTML tag to make a text bold.",
    answer: "b",
    options: ["bo", "bb", "b", "bold"]
   
},


];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {

  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  //  if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}


function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
