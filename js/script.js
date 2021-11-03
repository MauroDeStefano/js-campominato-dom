


const container = document.querySelector(".mds-container");
let numberList = [];

const btn = document.querySelector("#inizia");
const choice = document.querySelector("#difficolta");
let bombs = [];

// container.innerHTML = "Seleziona il livello di difficoltà e genera la griglia";


btn.addEventListener("click", function(){
  container.innerHTML = "";

  alert(choice.value);

  console.log(choice.value);
  init(addClassPerDifficult(choice, cancel));
  console.log("difficoltà", difficult);

});

function init(difficult){

  for (let i = 0; i < difficult; i++){

    const square = createSquare(container);
    
    let bomb = generateBombs(bombs);
    square.innerHTML = i + 1;
    square.addEventListener("click", function(){
    
      this.classList.add("active");

    });

  }
  
}

function createSquare(target){
  const square = document.createElement("div");

  square.className = "square";

  target.append(square);

  addClassPerDifficult(choice, square);
  
  return square;

}

function addClassPerDifficult(difficult, addClass){


  if (difficult.value == "facile"){
    difficult = 100;
    addClass.classList.add("easy");
    console.log("facile =", difficult);
    
  } else if (difficult.value == "medio"){
    difficult = 81;
    console.log("medio =", difficult);
    addClass.classList.add("medium");
  }else if (difficult.value == "difficile"){
    difficult = 49;
    console.log("difficile =", difficult);
    addClass.classList.add("hard");
  }
  return difficult;
}

clearInterval.addEventListener("click", handleClickCell);

function handleClickCell(event){
  let verification = event.target.innerText;
};

//ARRAY DI 16 bombe, da creare a parte e se è una bomba classe col colore rosso, break del programma e 

function generateBombs(bombs){
  
  for (i = 0; i < 16; i++){
    
    let number = generateRandomInt(16, 1);

    if(bombs.includes(number)){
      i--;
      console.log("bombe", i);
    }else {
      bombs.push(number);
      console.log("bombe", bombs);
    }
  }
  return bombs;
}

function generateRandomInt(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}