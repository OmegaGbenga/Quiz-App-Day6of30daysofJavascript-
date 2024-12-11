const questions = [
    {
        question: "Which is the Largest Animal in the world?", 
        Answers:[
            {text: "Shark", correct : false},
            {text: "Blue whale", correct : true},
            {text: "Elephant", correct : false},
            {text: "Dinosaur", correct : false},
        ]
    },
    {
        question : "What was used in place of Tissues by the Ancient Romans", 
        Answers :[
            {text: "Rocks", correct:true },
            {text: "wood pulp", correct:false },
            {text: "leaves", correct:false },
            {text: "sponges", correct:false },
        ]
    },
    {
        question : " Adolf Hitler's ambition before joining the millitary was to be:", 
        Answers :[
            {text: " A peacemaker", correct:false },
            {text: "wood pulp", correct:false },
            {text: "A painter", correct:true },
            {text: "A chiropracor", correct:false },
        ]
    },
    {
        question : "What country shares largest land borders with Russia", 
        Answers :[
            {text: "China", correct:true },
            {text: "Finland", correct:false },
            {text: "Madascar", correct:false },
            {text: "Albania", correct:false },
        ]
    },
    {
        question : "What country has a cheese reserve of over 1billion pounds ", 
        Answers :[
            {text: "United states of America", correct:true },
            {text: "Canada", correct:false },
            {text: "Italy", correct:false },
            {text: "China", correct:false },
        ]
    },
    {
        question : "What continent is considered the cradle of Humankind", 
        Answers :[
            {text: "Palestine", correct:false },
            {text: "Israel", correct:false },
            {text: "lebanon", correct:false },
            {text: "Africa", correct:true },
        ]
    },
];
const questionElement = document.querySelector('#question');
const answerbtns = document.querySelector('#answer-buttons');
const nextbtn = document.querySelector('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.Answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
          }
      button.addEventListener("click", selectAnswer);
    }); 

}
 function   resetState(){
    nextbtn.style.display = "none";
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }  
 }

 function  selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbtns.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true ;
    });
    nextbtn.style.display = "block";

 }


 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="play Again";
    nextbtn.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
 }


 nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
 }
 });

startQuiz();