let buttons=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#Reset");
let newBtn=document.querySelector("#New");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn1=true;
let count=0;
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],
];
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>
    { console.log("button was clicked");
    if(turn1)
    {btn.innerText="0";
turn1=false;
}
else
{btn.innerText="x";
turn1=true;
}
btn.disabled=true;
count++;
let isWinner = checkWinner();
if (count === 9 && !isWinner) {
    gameDraw();
  }
});
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
const resetGame=()=>
{
    turn1=true;
    count=0;
    enabledButtons();
    msgContainer.classList.add("hide");
};
const enabledButtons=()=>{
    for(let btn of buttons)
    {btn.disabled=false;
    btn.innerText="";}
}

const disabledButtons=()=>{
    for(let btn of buttons)
    {btn.disabled=true;}
};

const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledButtons();
};
const checkWinner=()=>{
    for(let pattern of win)
    {let pos1Val= buttons[pattern[0]].innerText;
        let pos2Val= buttons[pattern[1]].innerText;
        let pos3Val= buttons[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="")
        {if(pos1Val==pos2Val &&pos2Val==pos3Val)
        {console.log("winner",pos1Val);
    showWinner(pos1Val);}
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);