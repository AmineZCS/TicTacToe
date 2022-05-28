
  function showScoreTable(){
    document.getElementById("ScoreTable").style.cssText = "border-radius: 0.8% ;	background: rgba(178, 254, 250, 0.2); border: none; overflow: hidden; color: #B2FEFA; transition: all 1s; transition-timing-function: cubic-bezier(0,.68,1,.02); box-sizing: border-box; display: flex; align-items: center;"

  }
  function showOtherButtons(){
    document.getElementById("otherButtons").style.display="block"
  }

function resetScore(){
  Xcounter=0;
  Ocounter=0;
  document.getElementById("xscore").innerHTML="0";
  document.getElementById("oscore").innerHTML="0";
}
function restartGame(){
    playedTime=0;
     turn="X";
     playedCell=[];
     emptyCells=[0,1,2,3,4,5,6,7,8];
    var allCells=document.getElementsByClassName("cell");
    for(let item of allCells){
        item.innerHTML="";
    }
  }

 
  function vsPc(){

    
    function init(){
  
      playedTime=0;
       turn="X";
       playedCell=[];
       emptyCells=[0,1,2,3,4,5,6,7,8];
      var allCells=document.getElementsByClassName("cell");
      for(let item of allCells){
          item.innerHTML="";
      }
    }
    document.getElementById("tictactoe").innerHTML="";
    showScoreTable();
    showOtherButtons();
var turn="X";
var playedCell=[];
var emptyCells=[0,1,2,3,4,5,6,7,8];
var playedTime=0;
var Xcounter=0;
var Ocounter=0;
  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");


  var tblBody = document.createElement("tbody");

  // cells creation
  var identifier=0;
  for (var j = 0; j <= 2; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 2; i++) {
      
      var cell = document.createElement("td");
      
      row.appendChild(cell);
    
      cell.setAttribute("width",120);
      cell.setAttribute("height",120);
      cell.setAttribute("align","center");
      cell.setAttribute("valign","center");
      cell.addEventListener("click",playTurn);
      cell.identifier=identifier;
      cell.setAttribute('id',`${identifier}`)
      cell.classList.add("cell");
      identifier=identifier+1;


      cell.style.fontSize="xxx-large";


    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  
  document.getElementById("tictactoe").appendChild(tbl);


  function playTurn(){

  	//1 check if the cell has been played before
  	if(this.innerHTML==="X" || this.innerHTML==="O"){
  		return;
  	}
    //   delete clicked cell from emptycells
    emptyCells.splice(emptyCells.indexOf(this.identifier),1);


    // select random cell from emptycells
    var selectedCell = emptyCells[Math.floor(Math.random()*emptyCells.length)];

    
  	
  	//2 add the new played turn to the table playedCell
  	playedCell[this.identifier]=turn;
  	this.innerHTML=turn;
    playedTime=playedTime+1;
    
  	//3 check if the game has been won by X
  	if (hasWon(turn)){

    		alert("Player: "+turn+" has won the game");
        Xcounter=Xcounter+1;
        document.getElementById("xscore").innerHTML=`${Xcounter}`;
  		init();
      
  	}

// check if the game is draw

  	if (playedTime===9){
  		alert("Draw game");
  		init();
  	}

    // wait 0.4s after X turn

    setTimeout(() => { 

      document.getElementById(selectedCell).innerHTML="O";
      playedTime=playedTime+1;

      // delete selected cell from empty cells
      emptyCells.splice(emptyCells.indexOf(selectedCell),1);
      playedCell[selectedCell]="O"

      //3 check if the game has been won by O
    if (hasWon("O")){

      alert("Player: O has won the game");
      Ocounter=Ocounter+1;
      document.getElementById("oscore").innerHTML=`${Ocounter}`;
      init();
    }

    // check if the game is draw
    if (playedTime===9){
  		alert("Draw game");
  		init();

  	}
    }, 400);
    
    
    }
  

 
  function hasWon(play){

  	if(playedCell[0]===play && playedCell[1]===play && playedCell[2]===play )
  		return true;


  	if(playedCell[3]===play && playedCell[4]===play && playedCell[5]===play )
  		return true;

  	if(playedCell[6]===play && playedCell[7]===play && playedCell[8]===play )
  		return true;

    if(playedCell[0]===play && playedCell[4]===play && playedCell[8]===play )
    return true;

    if(playedCell[2]===play && playedCell[4]===play && playedCell[6]===play )
    return true;

    if(playedCell[0]===play && playedCell[3]===play && playedCell[6]===play )
    return true;

    if(playedCell[1]===play && playedCell[4]===play && playedCell[7]===play )
    return true;

    if(playedCell[2]===play && playedCell[5]===play && playedCell[8]===play )
    return true;


return false;
  }









  }


  function vs1(){
    document.getElementById("tictactoe").innerHTML="";
    showScoreTable();
    showOtherButtons();
var turn="X";
var playedCell=[];
var playedTime=0;
var Xcounter=0;
var Ocounter=0;
  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");


  var tblBody = document.createElement("tbody");

  // cells creation
  var identifier=0;
  for (var j = 0; j <= 2; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i <= 2; i++) {
      
      var cell = document.createElement("td");
      
      row.appendChild(cell);
    
      cell.setAttribute("width",120);
      cell.setAttribute("height",120);
      cell.setAttribute("align","center");
      cell.setAttribute("valign","center");
      cell.addEventListener("click",playTurn);
      cell.identifier=identifier;
      cell.classList.add("cell");
      identifier=identifier+1;


      cell.style.fontSize="xxx-large";


    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  
  document.getElementById("tictactoe").appendChild(tbl);


  function playTurn(){

  	//1 check if the cell has been played before
  	if(this.innerHTML==="X" || this.innerHTML==="O"){
  		return;
  	}

  	playedTime=playedTime+1;
  	//2 add the new played turn to the table playedCell
  	playedCell[this.identifier]=turn;
  	this.innerHTML=turn;

  	//3 check if the game has been won by one of the players
  	if (hasWon(turn)){

  		alert("Player: "+turn+" has won the game");
      if (turn=='X') {
        Xcounter=Xcounter+1;
        document.getElementById("xscore").innerHTML=`${Xcounter}`;
        
      } else {
        Ocounter=Ocounter+1;
        document.getElementById("oscore").innerHTML=`${Ocounter}`;
      }
  		init();
  	}else {
      if(turn==="X") turn="O";
     else turn="X";
    }
    

  	
  	

  	if (playedTime===9){
  		alert("Draw game");
  		init();

  	}
    console.log(playedCell)
  }

  function hasWon(play){

  	if(playedCell[0]===play && playedCell[1]===play && playedCell[2]===play )
  		return true;


  	if(playedCell[3]===play && playedCell[4]===play && playedCell[5]===play )
  		return true;

  	if(playedCell[6]===play && playedCell[7]===play && playedCell[8]===play )
  		return true;

    if(playedCell[0]===play && playedCell[4]===play && playedCell[8]===play )
    return true;

    if(playedCell[2]===play && playedCell[4]===play && playedCell[6]===play )
    return true;

    if(playedCell[0]===play && playedCell[3]===play && playedCell[6]===play )
    return true;

    if(playedCell[1]===play && playedCell[4]===play && playedCell[7]===play )
    return true;

    if(playedCell[2]===play && playedCell[5]===play && playedCell[8]===play )
    return true;


return false;
  }
  function init(){
  
    playedTime=0;
     turn="X";
     playedCell=[];
    var allCells=document.getElementsByClassName("cell");
    for(let item of allCells){
        item.innerHTML="";
    }
  }
}
