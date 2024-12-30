let uScore= 0;
let cScore= 0;

//generating comp choice
const compCho =()=>{
    let ch=["rock","paper","scissor"];
    let i=Math.floor(Math.random()*3);
    return ch[i];
}

let userSco=document.querySelector("#user");
let compSco=document.querySelector("#comp")

const msg=document.querySelector("#msg");
//draw condition
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Game draw";
    msg.style.backgroundColor="purple";
};

const showWinner=(userWin,userChoice,genComp)=>{
    if(userWin){
        
        uScore++;
        userSco.innerText=uScore;
    
        msg.innerText= `${userChoice} beats ${genComp}!!, You won`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You lost");
        cScore++;
        compSco.innerText=cScore;
        msg.innerText=`${genComp} beats ${userChoice}, Comp wins`
        msg.style.backgroundColor="red";

    }
};

const playGame=(userChoice)=>{
    console.log("user = ",userChoice);
    const genComp = compCho();
    console.log("comp choice = ",genComp);
    if (userChoice===genComp){
        draw();
    }else {
        userWin=true;
        if (userChoice==="rock"){
            userWin=genComp==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin=genComp==="scissor" ? false:true;
        }else {
            userWin=genComp==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,genComp);
    };
};



const choices =document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        userChoice=choice.getAttribute("id")
        playGame(userChoice);
        
    }
    );
    
});
