var countDown = document.querySelector("#countdown");
var timeLeft = 30;
// var questionEl = document.querySelector("#question");
// var answerBtn = document.querySelector("#answers")
// var questionARR = ["What symbol do you use at the end of JavaScript commands?"];
// var answerARR = [".", "/", "$", ";"];
// var corrAnsArr = [3]
var questions = [{
    text: "What symbol do you use at the end of JavaScript commands?",
    choices: [".", "/", "$", ";"],
    corrAnswer: ";"
}, {
    text: "Question 2",
    choices: ["1", "2", "3", "4"],
    corrAnswer: "4",
}, {
    text: "Question 3",
    choices: ["1", "2", "3", "4"],
    corrAnswer: "4",
}
]

function countdownClock() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        countDown.textContent = timeLeft + " Sec";

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // Call function to display Game Over message
            gameOver();
        }

    }, 1000);
}

function gameOver() {
    window.alert("TIME IS UP! GAME OVER!");
}


function askQuestion() {
    var displayQuestion = questions[0].text;                    //Assign displayQuestion from the text-nested object
    var questionTextEl = document.getElementById("questionText");   //Pointer to #question ID box in HTML
    questionTextEl.textContent = displayQuestion;               //Display text for question in question box on page
    var answersDiv = document.getElementById("answers");        //Pointer to #answers ID in HTML
    questions[0].choices.forEach(function (choice) {  //Insert new buttons, assign strings for choices-nested object for each button
        var button = document.createElement("button");
        button.textContent = choice;                //Display strings inside buttons as text
        button.setAttribute("value", choice);       //Set values to buttons from text
        button.onclick = function(){
            console.log(this);
        }
        answersDiv.append(button);       //Add buttons to Page
    })
}

// function answerQuest() {

// }

// function checkAnswer(){
//     if ()
// }

// countdownClock();
askQuestion();



// while(0 < answerARR.length){


//Pulls a random answer
// console.log(answerARR.length);
// while (answerARR.length > 0) {
    //Generate a random number between 0 and 3
    // if(answerARR[x] == 'undefined'){
    // var x = Math.floor(Math.random() * (answerARR.length + 1));
    // }else{
        //Assign Answer to Button
        // console.log('x= ' + x);
        // console.log('Array Value = ' + answerARR[x]);
        // answerBtn.children[x].innerHTML = answerARR[x];
        //Remove used value from Array and replace with 'undefined'
        // answerARR.splice(x, 1, 'undefined');
        // console.log(answerARR.length);
    // }
// }


// for (var i = 0; i < questionARR.length; i++) {
//     questionEl.textContent = (questionARR[i]);
//     answerQuest();

// }

//     for (var i = 0; i < 4; i++) {
//         answerBtn.children[i].innerHTML = answerARR[i];
//     }
//     // Event when correct Answer Button is clicked  
//     console.log(answerBtn);
//     answerBtn.children[corrAnsArr[0]].addEventListener('click', function () {
//         window.alert("your answer is Correct");
//         // correctAnswer();
//     })
//     answerBtn.children[corrAnsArr[0]].addEventListener('click', function () {
//         window.alert("Incorrect");
//     })