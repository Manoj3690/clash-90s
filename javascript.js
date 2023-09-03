// grabing id
let rockbtn=document.getElementById("rock");
let paperbtn=document.getElementById("paper");
let scissorbtn=document.getElementById("scissor");
let userscore=document.getElementById("userscore");
let aiscore=document.getElementById("aiscore");
let userchoice=document.getElementById("userchoice");
let aichoice=document.getElementById("aichoice");
let explain=document.getElementById("explain");
let result=document.getElementById("result");
let possibility=document.getElementById("possibility");
//variable initialization
let choices=["Rock","Paper","Scissor"];
let userpoints=0;
let aipoints=0;
let usercoin;
let aicoin;

// Events
rockbtn.addEventListener("click",rockfunction);

// Event Functions
function rockfunction (){
  aicoin=choices[Math.floor(Math.random()*3)];
  usercoin="Rock";
  if(usercoin=="Rock"){
    if(aicoin=="Rock"){
      userchoice.innerHTML="You : "+usercoin;
      aichoice.innerHTML="AI : "+aicoin;
      explain.innerHTML="Rock equals Rock";
      result.innerHTML="It's Tie 🙌";
     }
   else if(aicoin=="Paper"){
      aipoints+=1;
      aiscore.innerHTML="SCORE : "+aipoints;
      userchoice.innerHTML="You : "+usercoin;
      aichoice.innerHTML="AI : "+aicoin;
      explain.innerHTML="  Paper defeats Rock";
      result.innerHTML="AI Wins 👾";
   }
   else if(aicoin=="Scissor"){
     userpoints+=1;
     userscore.innerHTML="SCORE : "+userpoints;
     userchoice.innerHTML="You : "+usercoin;
     aichoice.innerHTML="AI : "+aicoin;
     explain.innerHTML="Rock defeats Scissor";
     result.innerHTML="You Wins 🏆";
   }
  }
    if(userpoints==10){
     explain.innerHTML="You Won the Game 👑";
     result.innerHTML="";
     userpoints=0;
        aipoints=0;
   }
   else if(aipoints==10){
     explain.innerHTML="AI Won the Game 👾";
     result.innerHTML="";
     userpoints=0;
     aipoints=0;
   }
   }

paperbtn.addEventListener("click",paperfunction);

function paperfunction(){
  aicoin=choices[Math.floor(Math.random()*3)];
  usercoin="Paper";
  if(usercoin=="Paper"){
    if(aicoin=="Paper"){
      userchoice.innerHTML="You : "+usercoin;
      aichoice.innerHTML="AI : "+aicoin;
      explain.innerHTML="Paper equals Paper";
      result.innerHTML="It's Tie 🙌";
  }
   else if(aicoin=="Rock"){
     userpoints+=1;
     userscore.innerHTML="SCORE : "+userpoints;
     userchoice.innerHTML="You : "+usercoin;
     aichoice.innerHTML="AI : "+aicoin;
     explain.innerHTML="Paper defeats Rock";
     result.innerHTML="You Wins 🏆";
   }
   else if(aicoin=="Scissor"){
     aipoints+=1;
     aiscore.innerHTML="SCORE : "+aipoints;
     userchoice.innerHTML="You : "+usercoin;
     aichoice.innerHTML="AI : "+aicoin;
     explain.innerHTML="Scissor defeats Paper";
     result.innerHTML="AI Wins 👾";
   }
  }
  if(userpoints==10){
     explain.innerHTML="You Won the Game 👑";
     result.innerHTML="";
     userpoints=0;
     aipoints=0;
   }
   else if(aipoints==10){
     explain.innerHTML="AI Won the Game 👾";
     result.innerHTML="";
     userpoints=0;
     aipoints=0;
   }
 }
 
 scissorbtn.addEventListener("click",scissorfunction);
 
 function scissorfunction(){
   aicoin=choices[Math.floor(Math.random()*3)];
   usercoin="Scissor";
   if(usercoin=="Scissor"){
    if(aicoin=="Scissor"){
      userchoice.innerHTML="You : "+usercoin;
      aichoice.innerHTML="AI : "+aicoin;
    explain.innerHTML="Scissor equals Scissor";
      result.innerHTML="It's Tie 🙌";
    }
    else if(aicoin=="Rock"){
      aipoints+=1;
      aiscore.innerHTML="SCORE : "+aipoints;
      userchoice.innerHTML="You : "+usercoin;
      aichoice.innerHTML="AI : "+aicoin;
     explain.innerHTML="Rock defeats Scissor";
     result.innerHTML="AI Wins 👾";
    }
    else if(aicoin=="Paper"){
      userpoints+=1;
    userscore.innerHTML="SCORE : "+userpoints;
    userchoice.innerHTML="You : "+usercoin;
    aichoice.innerHTML="AI : "+aicoin;
    explain.innerHTML="Scissor defeats Paper";
    result.innerHTML="You Wins 🏆";
    }
   }
   if(userpoints==10){
     explain.innerHTML="You Won the Game 👑";
     result.innerHTML="";
     userpoints=0;
     aipoints=0;
   }
   else if(aipoints==10){
     explain.innerHTML="AI Won the Game 👾";
     result.innerHTML="";
     userpoints=0;
     aipoints=0;
   }
 }
   