var title1 = document.querySelector(".title1");
var start_button = document.querySelector(".start-button");  
var body = document.body;
var timerElement = document.querySelector(".timer");
var timerElementCount = document.querySelector(".timer-count");
var timerCount = 75;
var isWin = false;
var nameArray = [];
var scoreArray = [];

//make dummy data for a game
var dummy1 = [
    ["Commonly used data types DO NOT Include", "strings", "Booleans", "etc", "numbers", "3"],
    ["Arrays in JavaScript can be used to store", "Numbers and strings", "Other arrays", "boolean", "All of above", "4"],
    ["The condition in an if / else statement is enclosed within ____", "Quotes", "Curly Brackets", "Para", "Square Brackets", "2"],
    ["A very Useful tool used during development And debugging for printing content to the debugger is", "Javascript", "Terminal / bash", "For loop", "Console log", "4"],
    ["String values must be enclosed within ____ When being assigned to variables", "Commas", "Curly Brackets", "Cc", "parentheses", "4"],
    ["All done!"]
]

// start button shows first array member of dummy data.
start_button.addEventListener('click', function(){
    title1.remove();
    start_button.remove();
    show_dummy(0);
    startTimer();
    isWin=false;
});


function show_dummy(i){
    //Set Timer visible
    document.querySelector(".timer").setAttribute('style', 'color: #000;');

    // If comes last array number of dummy data, show the last page.
    if (i == dummy1.length-1){
        show_last_page(i);
        return;
    }
    var i = i;

    // Extract title from the dummy data
    var title2 = document.createElement("h3");
    title2.textContent = dummy1[i][0];

    // Extract questions from the dummy data
    var ans1 = document.createElement("h4") 
    var ans2 = document.createElement("h4") 
    var ans3 = document.createElement("h4") 
    var ans4 = document.createElement("h4") 
    ans1.textContent = "1. " + dummy1[i][1];
    ans2.textContent = "2. " + dummy1[i][2];
    ans3.textContent = "3. " + dummy1[i][3];
    ans4.textContent = "4. " + dummy1[i][4];

    // Save what number is the answer
    var answer = dummy1[i][5];
    
    body.appendChild(title2);
    body.appendChild(ans1);
    body.appendChild(ans2);
    body.appendChild(ans3);
    body.appendChild(ans4);

    // If user clicks the answer show the next number of dummy, 
    // If not, subtract time.
    ans1.addEventListener('click', function(){
        if (answer == "1"){
            removeAllChild(title2, ans1, ans2, ans3, ans4);
            show_dummy(i+1);
        }else{
            substract_time();
        }
    });
    ans2.addEventListener('click', function(){
        if (answer == "2"){
            removeAllChild(title2, ans1, ans2, ans3, ans4);
            show_dummy(i+1);
        }else{
            substract_time();
        }
    });
    ans3.addEventListener('click', function(){
        if (answer == "3"){
            removeAllChild(title2, ans1, ans2, ans3, ans4);
            show_dummy(i+1);
        }else{
            substract_time();
        }
    });
    ans4.addEventListener('click', function(){
        if (answer == "4"){
            removeAllChild(title2, ans1, ans2, ans3, ans4);
            show_dummy(i+1);
        }else{
            substract_time();
        }
    });
}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElementCount.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}


function winGame(){
    console.log("win");
}

function loseGame(){
    console.log("lose");
}

// substract time
function substract_time(){
    console.log("substract time");
    timerCount = timerCount - 10;
}

// remove all child from the screen.
function removeAllChild(title2, ans1, ans2, ans3, ans4){
    body.removeChild(title2);
    body.removeChild(ans1);
    body.removeChild(ans2);
    body.removeChild(ans3);
    body.removeChild(ans4);
}

function show_last_page(i){
    // If user comes to the last page, It means that user won the game.
    isWin=true;

    // Create a container to carry all elements
    var container = document.createElement("div");
    container.setAttribute('id', 'container');

    // Create title of the last page
    var title2 = document.createElement("h3");
    title2.textContent = dummy1[i][0];  // 'All done!'
    container.appendChild(title2);

    // Enter Name
    var name_txt = document.createElement("h3");
    name_txt.textContent = "Enter Name: "
    
    // Input TextBox
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");

    // Submit Button
    var send_btn = document.createElement("button");
    send_btn.textContent="submit";
    
    send_btn.addEventListener('click', function(){
        // Check ul element and remove all if one element is alive.
        remove_ulelements(document.getElementById('ulelement1'), document.getElementById('ulelement2'), document.getElementById('ulelement3'));
        // Push name and score(timeCount) into the each array.
        nameArray.push(x.value);
        scoreArray.push(timerCount);
        
        // Create ul Element 
        var ulElement = document.createElement("ul");
        //ulElement.setAttribute('id', 'ulelement1');
        ulElement.id = 'ulelement1';

        // if there is no list ulElement's option becomes zero.
        ulElement.option = 0;
        for (i = 0; i<nameArray.length; i++){
            var liElement = document.createElement("li");
            liElement.textContent = nameArray[i] + " / " + scoreArray[i];
            ulElement.appendChild(liElement);
        }
        if (nameArray.length >=1){
            container.appendChild(ulElement);
            // if there is a list ulElement's option becomes 1.
            ulElement.option = 1;
        }
    });

    // Put Inputbox, Button on the screen
    container.appendChild(name_txt);
    container.appendChild(x);
    container.appendChild(send_btn);
    
    // Put buttons on the screen
    var goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Go Back";
    var clearScoreBtn = document.createElement("button");
    clearScoreBtn.textContent = "Clear Highscores";
    var container2 = document.createElement("div");
    container2.className='container2';
    container2.appendChild(goBackBtn);
    container2.appendChild(clearScoreBtn);
    container.appendChild(container2);

    var ulElement2 = document.createElement("ul");
    //ulElement.setAttribute('id', 'ulelement2');
    ulElement2.id = 'ulelement2';
    ulElement2.option = 0;
    for (i = 0; i<nameArray.length; i++){
        var liElement = document.createElement("li");
        liElement.textContent = nameArray[i] + " / " + scoreArray[i];
        ulElement2.appendChild(liElement);
    }
    if (nameArray.length >=1){
        container.appendChild(ulElement2);
        ulElement2.option = 1;
    }

    // Go back to start again
    goBackBtn.addEventListener('click', function(){
        // Check ul element and remove all if one element is alive.
        remove_ulelements(document.getElementById('ulelement1'), document.getElementById('ulelement2'), document.getElementById('ulelement3'));
        // Remove all childs in container element
        document.getElementById('container').remove();
        // Show first page(first dummy array)
        show_dummy(0);
        // Start timer again
        startTimer();
        isWin=false;123
        timerCount = 75;
    });

    // Put empty ul
    var ulElement3 = document.createElement("ul");
    ulElement3.id = 'ulelement3';
    ulElement3.option = 0

    clearScoreBtn.addEventListener('click', function(){
        // Check ul element and remove all if one element is alive.
        remove_ulelements(document.getElementById('ulelement1'), document.getElementById('ulelement2'), document.getElementById('ulelement3'));

        // Delete all history
        nameArray = [];
        scoreArray = [];

        // Write empty ul 
        var ulElement3 = document.createElement("ul");
        ulElement3.id = 'ulelement3';
        ulElement3.option = 0
        for (i = 0; i<nameArray.length; i++){
            var liElement = document.createElement("li");
            liElement.textContent = nameArray[i] + " / " + scoreArray[i];
            ulElement3.appendChild(liElement);
        }
        if (nameArray.length >=1){
            container.appendChild(ulElement3);
            ulElement3.option = 1;
        }
    });
    body.appendChild(container);
}

// Check ul element and remove the element if it is alive.
function remove_ulelements(ul1, ul2, ul3){
    console.log(ul1, ul2, ul3);
    if (ul1 !== null){
        console.log("ul1's option is" + ul1.option);
        if (ul1.option==1){
            ul1.remove();
        }
    }
    if (ul2 !== null){
        console.log("ul2's option is" + ul2.option);
        if (ul2.option==1){
            ul2.remove();
        } 
    }
    if (ul3 !== null){
        console.log("ul3's option is" + ul3.option);
        if (ul3.option==1){
            ul3.remove();
        }
    }
}