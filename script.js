
// When pressing the button, run function and start quiz
const submitQuiz = document.getElementById('btn_startQuiz');
submitQuiz.addEventListener("click", startQuiz);

// Array of questions with an object inside (quizQuestions)
let questions = {
    quizQuestions:[
    {
        prompt: "In which year Mercedes was officially founded?",
        // I use 3 options instead of 1 because i want to check them later on
        a:1916,
        b:1926,
        c:1936,
        answer: "b",
    },
    {
        prompt: "The logo of Mercedes is an iconic three-pointed star. What does it stand for?",
        a:"Air, sea, and land ",
        b:"Three states where Mercedes has the operating offices  ",
        c:"The three sons of Mercedes’s founder ",
        answer: "a",
    },
    {
        prompt: "Which German corporation is the owner of Mercedes-Benz?",
        a:"Porsche",
        b:"Daimler",
        c:"BMW",
        answer: "b",
    },
    {
        prompt: "The headquarter of Mercedes is located in which German city?",
        a:"Berlin",
        b:"Munich",
        c:"Stuttgart",
        answer: "c",
    },
    {
        prompt: "Mercedes introduced a hybrid car in its lineup in 1906. What was its name?",
        a:"Mercedes Mixte",
        b:"Mercedes 320A",
        c:"Mercedes 500 K",
        answer: "a",
    },
    {
        prompt: "The Mercedes G Class features which kind of vehicles?",
        a:"Sedans",
        b:"Wagons",
        c:"SUVs",
        answer: "c",
    }
]};
   
function startQuiz() {

    // The score of the user to start with - 0 = 0 correct answers
    let score = 0;

    // Loop through all the questions inside of the array and ask each question individually, get the users respons and then check of it's correct or not and then tell them
    for(let i = 0; i < questions.quizQuestions.length; i++) {

        // Displaying the prompt and getting users reponse/choice
        const response = window.prompt(questions.quizQuestions[i].prompt + '\n a. ' + questions.quizQuestions[i].a + '\n b. ' + questions.quizQuestions[i].b + '\n c. ' + questions.quizQuestions[i].c);
        
        // Checking if the answer is correct (if) or not (else)
        if(response == questions.quizQuestions[i].answer) {

            // If the user gets an correct answer = Display success message
            alert('The answer was correct!');

            // We give the user a +1 point for getting a right answer
            score++;
        } 
        
        else {

            // If the user answers wrong, and the answer is a = it will display error and the correct answer below which is option a
            if(questions.quizQuestions[i].answer == "a") {
                alert("Wrong answer! \n \n The correct answer was: \n" + " a. " + questions.quizQuestions[i].a);
            }

            // If the user answers wrong, and the answer is b = it will display error and the correct answer below which is option b
            if(questions.quizQuestions[i].answer == "b") {
                alert("Wrong answer! \n \n The correct answer was: \n" +  " b. " + questions.quizQuestions[i].b);
            }
            
            // If the user answers wrong, and the answer is c = it will display error and the correct answer below which is option c
            if(questions.quizQuestions[i].answer == "c") {
                alert("Wrong answer! \n \n The correct answer was: \n" +  " c. " + questions.quizQuestions[i].c);
            }

        }
    }

    // Calculating the score in percentage to display later on
    let countPercentage = (score * 100) / questions.quizQuestions.length; // Calculating in percentage

    // Displaying the final score/point
    alert("You got: \n" + score + " out of " + questions.quizQuestions.length + " correct (" +  countPercentage.toFixed(2) + " %)");
}