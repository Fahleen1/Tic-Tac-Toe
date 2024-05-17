let boxes =  document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");

let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;//player x player o


//2D array of winning patterns
const winPatterns = [
    [0,1,2],[0,3,6],
    [0,4,8],[1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            //PlayerO
            box.innerText = "O";
            turnO = false;
        }
        else{
            //PlayerX
            box.innerText = "X";
            turnO = true;
        }
      box.disabled = true;  

      checkWinner();

    });
});


//Check Winner
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    };
}


//Print Winner Message
const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableeBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


//Reset Game
const resetGame = () =>{
    turnO = true;
    enableeBoxes();
    msg_container.classList.add("hide");

}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click", resetGame);