var mainText = document.querySelector("#head-wording");
var secondText = document.querySelector("#second-wording");
var startButton = document.querySelector("#start");
var countDown = document.querySelector("#timer");
var question = document.createElement("ol");
var answers = document.querySelectorAll("li");
var todoList = document.querySelector("#todo-list");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var line = document.querySelector(".dashed");
var incorrect = document.querySelector("#wrong");
var initials = document.querySelector("#submit");
var initLine = document.querySelector("#initSubmit");
var submitBut = document.querySelector("#submitButton");
var newScore = document.querySelector("#newScore");
var hsButton = document.querySelector("#view-hs");
var clearHs = document.querySelector("#clearHighScore");

var timer = 76
var newAn1 = document.createElement("button");
var newAn2 = document.createElement("button");
var newAn3 = document.createElement("button");
var newAn4 = document.createElement("button");
var newAn5 = document.createElement("button");
var newAn6 = document.createElement("button");
var newAn7 = document.createElement("button");
var newAn8 = document.createElement("button");
var newAn9 = document.createElement("button");
var newAn10 = document.createElement("button");
var newAn11 = document.createElement("button");
var newAn12 = document.createElement("button");
var newAn13 = document.createElement("button");
var newAn14 = document.createElement("button");
var newAn15 = document.createElement("button");
var newAn16 = document.createElement("button");
var newAn17 = document.createElement("button");
var finalScore = 0



startButton.addEventListener("click", startGame);




function startGame() { 

    if (finalScore > 100) {
        finalScore = finalScore - 20;
    };
    
    var timeCounter = setInterval(function () {
        timer--;
        countDown.textContent = timer;

        if (timer <= 0) {
            endGame(); 
                  
        }
    }, 1000);

    mainText.textContent = question.innerHTML = "Commonly used data types DO NOT include: ";
    mainText.setAttribute("style", "text-align: left; padding: 2%");
    secondText.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    todoList.setAttribute("style", "display: inline");

   newAn1.textContent = "1. Strings";
   newAn2.textContent = "2. Booleans";
   newAn3.textContent = "3. Alerts";
   newAn4.textContent = "4. Numbers";

    answer1.appendChild(newAn1);
    answer2.appendChild(newAn2);
    answer3.appendChild(newAn3);
    answer4.appendChild(newAn4);

    newAn1.addEventListener("click", wrongAnswer);
    newAn2.addEventListener("click", question2);
    newAn3.addEventListener("click", wrongAnswer);
    newAn4.addEventListener("click", wrongAnswer);
   
    function question2 () {
        finalScore = finalScore + 20;
        line.setAttribute("style", "display: block");
        incorrect.textContent = "Right!";
        mainText.textContent = question.innerHTML = "The condition in an if/else statement is enclosed within _________.";
        newAn1.textContent = "1. Quotes";
        newAn17.textContent = "2. curly brackets";
        newAn3.textContent = "3. parenthesis";
        newAn4.textContent = "4. square brackets";
        answer2.appendChild(newAn17);
        newAn1.addEventListener("click", wrongAnswer);
        newAn17.addEventListener("click", wrongAnswer);
        newAn3.addEventListener("click", question3);
        newAn4.addEventListener("click", wrongAnswer);
        newAn2.setAttribute("style", "display: none");
    }    

    function question3 () {
        finalScore = finalScore + 20;
        line.setAttribute("style", "display: block");
        incorrect.textContent = "Right!";
        mainText.textContent = question.innerHTML = "Arrays in JavaScript can be used to store _________.";
        newAn5.textContent = "1. numbers and strings";
        newAn6.textContent = "2. other arrays";
        newAn7.textContent = "3. booleans";
        newAn8.textContent = "4. all the above";
        newAn5.addEventListener("click", wrongAnswer);
        newAn6.addEventListener("click",wrongAnswer);
        newAn7.addEventListener("click", wrongAnswer);
        newAn8.addEventListener("click", question4);
        answer1.appendChild(newAn5);
        answer2.appendChild(newAn6);
        answer3.appendChild(newAn7);
        answer4.appendChild(newAn8);
        newAn1.setAttribute("style", "display: none");
        newAn2.setAttribute("style", "display: none");
        newAn3.setAttribute("style", "display: none");
        newAn4.setAttribute("style", "display: none");
        newAn17.setAttribute("style", "display: none");

    }
    function question4 () {
        finalScore = finalScore + 20;
        line.setAttribute("style", "display: block");
        incorrect.textContent = "Right!";
        mainText.textContent = question.innerHTML = "String values must be enclosed within _________ when being assigned to variables.";
        newAn9.textContent = "1. commas";
        newAn10.textContent = "2. curly brackets";
        newAn11.textContent = "3. quotes";
        newAn12.textContent = "4. parenthesis";
        newAn9.addEventListener("click", wrongAnswer);
        newAn10.addEventListener("click", question5);
        newAn11.addEventListener("click", wrongAnswer);
        newAn12.addEventListener("click", wrongAnswer);
        answer1.appendChild(newAn9);
        answer2.appendChild(newAn10);
        answer3.appendChild(newAn11);
        answer4.appendChild(newAn12);
        newAn5.setAttribute("style", "display: none");
        newAn6.setAttribute("style", "display: none");
        newAn7.setAttribute("style", "display: none");
        newAn8.setAttribute("style", "display: none");
    }
    function question5 () {
        finalScore = finalScore + 20;
        line.setAttribute("style", "display: block");
        incorrect.textContent = "Right!";
        mainText.textContent = question.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";
        newAn13.textContent = "1. JavaScript";
        newAn14.textContent = "2. terminal/bash";
        newAn15.textContent = "3. for loops";
        newAn16.textContent = "4. console.log";
        newAn13.addEventListener("click", wrongAnswer);
        newAn14.addEventListener("click", wrongAnswer);
        newAn15.addEventListener("click", wrongAnswer);
        newAn16.addEventListener("click", endGame);
        answer1.appendChild(newAn13);
        answer2.appendChild(newAn14);
        answer3.appendChild(newAn15);
        answer4.appendChild(newAn16);
        newAn9.setAttribute("style", "display: none");
        newAn10.setAttribute("style", "display: none");
        newAn11.setAttribute("style", "display: none");
        newAn12.setAttribute("style", "display: none");
    }
    function endGame () {
        clearInterval(timeCounter);
        if (timer > 0) {finalScore = finalScore + 20;};
        mainText.textContent = question.innerHTML = "All Done!";
        secondText.setAttribute("style", "display: block; text-align: left");
        secondText.textContent = "Your final score is: " + finalScore;
        answer1.setAttribute("style", "display: none");
        answer2.setAttribute("style", "display: none");
        answer3.setAttribute("style", "display: none");
        answer4.setAttribute("style", "display: none");
        initials.setAttribute("style", "display: block");
        initLine.addEventListener("click", function() {
            line.setAttribute("style", "display: none");
            incorrect.setAttribute("style", "display: none");
        });
        submitBut.addEventListener("click", highscore);

        function highscore (event) {
            event.preventDefault();
            mainText.textContent = question.innerHTML = "Highscores";
           secondText.setAttribute("style", "display: none");
           initials.setAttribute("style", "display: none"); 
           var refresh = document.getElementById("restart")
           refresh.setAttribute("style", "display: block; margin: 0 auto; margin-top: 5%");

           refresh.addEventListener("click", function() {
            window.location.reload();
           });
        //    This checks if "dada" has any info in localStorage and puts it in an object. Or if Data is empty
        // it creates an empty array.
           var userData = JSON.parse(localStorage.getItem("data")) || [];
        //    this is an object that will be pushed into the value of the localstorage key "data."
           var newData = {
               initials : initLine.value,
               score : finalScore
           }  
        //    this adds the "newData" object info into the value of the local storage key "data"
           userData.push(newData); 
           /*if (userData) {
               userData.push(newData);
           }   
           else userData = [newData];  */
        //    This says "if b.score (first parameter) is greater than a.score (second parameter) put b.score first."
           userData.sort( (a,b) => b.score - a.score);

        //    this tells the localstorage array "data" to cut off anything after 5th value in array.
           userData.splice(5);
        //    this saves the info into localStorage as a string with JSON.stringify
        localStorage.setItem("data", JSON.stringify(userData));
        
        
            
            var htmlString = "";
            // This tells htmlstring to store the local storage objects as a string with the 2 values from the object displayed as a string with a line break for each object.
            for (var i = 0; i < userData.length; i++) {
                htmlString += userData[i].initials + " - " + userData[i].score + "<br>"
                
            }
            // this is the htmlString being displayed to the webpage
            newScore.innerHTML = htmlString
            clearHs.setAttribute("style", "display: block");
            clearHs.addEventListener("click", function() {
                localStorage.clear();
                newScore.innerHTML = "";
            });

        }
    }

        function wrongAnswer () {
            timer = timer - 15;
            line.setAttribute("style", "display: block");
            incorrect.textContent = "Wrong!";
            }
            

}
