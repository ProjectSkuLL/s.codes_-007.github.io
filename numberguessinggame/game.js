let randomNumber = Math.round(Math.random()*101);
randomNumber = Number.parseInt(randomNumber);
console.log(randomNumber)



const startButton = document.getElementById("startbtn");
const ds = document.getElementById("ds");
const message = document.getElementById('message');
const rc = document.getElementById("rc");
const result = document.getElementById("result");

let chance = 100;
let score;

startButton.addEventListener("click",()=>{
    chance = chance-1;
    let userinput = document.getElementById("userinput").value;
    userinput = Number.parseInt(userinput);

    if(userinput==randomNumber) {
            ds.innerHTML = `<p class="message" id="message">Congratulations ! you have guessed the right number. Your Number: ${userinput}, Randomly Generated Number: ${randomNumber}.</p>
            <p class="score"><span class="fs-700">SCORE: ${score}</span></p>`; 
        }
        else if(userinput>randomNumber) {
            ds.innerHTML = `<p class="message" id="message">Your Number is Greater than the randomly generated number.</p>
            <p class="remainingchances" id="rc"><span class="fs-700">Remaining Chances: ${chance}</span></p>`;  
        }
        else if(userinput<randomNumber) {
            ds.innerHTML = `<p class="message" id="message">Your Number is Less than the randomly generated number.</p>
            <p class="remainingchances" id="rc"><span class="fs-700">Remaining Chances: ${chance}</span></p>`;  
        }
        else {
            ds.innerHTML = `<p class="message" id="message">Please enter a number.</p>`;
        }

        score = chance;
});