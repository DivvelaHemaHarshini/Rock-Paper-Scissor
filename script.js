let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice=()=>{
    //rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];


};

const drawGame = ()=>{
   
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#363795";
};

const showWinner = (userWin,userChoice,compChoice)  =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Won ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
    }else{
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`You Loose ${compChoice} beats ${userChoice}`;
        
        msg.style.backgroundColor="red"; 
    }
}




const playGame = (userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate computer choice-->modular
    const compChoice = genCompChoice();
    console.log("comp Choice =",compChoice);


    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){//In this case if userchoice is rock then comp choice cant be rock bcz if comp choice is rock then it will be tie hence compchoice will be
         // scissor ,paper
            userWin=compChoice === "paper"?false:true; //here we are setting the value of userWin as true  or false
        }else if(userChoice === "paper"){
            //rock,scissor
              userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin = compChoice==="rock"?false:true;
        }
         showWinner(userWin,userChoice,compChoice)
    }
    
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        
          playGame(userChoice);
    });
});