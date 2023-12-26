let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winmsg");

// let player1 = prompt("Enter the name of player1:");
// let player2 = prompt("Enter the name of the player2:");
let turnO = true;
let count =0;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO===true){
            box.innerText = "O";
            box.style.color = "blue";
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO=true;
        }
        box.disabled = true;
        count+=1;
        console.log(count);
        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText; 
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
        }
        else if (count===9){
            console.log("Tie!!")
            draw();
        }
    }
    }
};

const draw = ()=>{
    msg.innerText = "It was a Tie! Please, try again!";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turnO=true;
        msgcontainer.classList.add("hide");
        count=0;
    }
}

const showWinner = (pos1val) =>{
    if(pos1val==="O"){
        msg.innerText = `Congratulations!! Winner is ${player1}`
    }else[
        msg.innerText = `Congratulations!! Winner is ${player2}`
    ]
    msgcontainer.classList.remove("hide");
    disableboxes();
}


newBtn.addEventListener("click", enableboxes);
resetBtn.addEventListener("click", enableboxes);

