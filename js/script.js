

const container = document.querySelector(".mds-container");
let numberList = [];
let counter = 0;

let comparator = true;

const btn = document.querySelector("#inizia");
const choice = document.querySelector("#difficolta");
const none = document.querySelector("#cancel");
let bombs = [];


container.innerHTML = "Seleziona il livello di difficoltà e genera la griglia";


btn.addEventListener("click", function(){
  comparator = true;
  container.innerHTML = "";
  counter = 0;
  alert(choice.value);

  console.log(choice.value);
  init(addClassPerDifficult(choice, cancel));
  

});

function init(difficult){

  bombs = [];
  bombs = generateBombs(bombs);

  console.log("questo è il mio array", bombs);

  for (let i = 0; i < difficult; i++){

    const square = createSquare(container);
    
    square.innerHTML = i + 1;
    
    
      
    square.addEventListener("click", function(){
        
      if(comparator == true){    

        let compare = parseInt(this.textContent);
      
        if (bombs.includes(compare)){

          comparator = false;
          
          console.log(comparator);
          
          let selection = document.querySelectorAll(".square");

          for (let ii = 0; ii < selection.length; ii++) {
          // console.log(selection[ii]);
          let compareArray = parseInt(selection[ii].textContent);
          if(bombs.includes(compareArray)){
            selection[ii].classList.add("red");
          }else{
            selection[ii].classList.add("active");
          }
            console.log(selection[ii].textContent); 
            console.log(ii);
          }
          
        
          this.classList.add("red");
           

          return container.append("Hai perso, hai provato "+ counter + " volte.");
          
        }else{
          counter++;
          this.classList.add("active");
        }

        // console.log(this);
        // console.log(this.textContent);
        // console.log();
      }
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
    
    
  } else if (difficult.value == "medio"){
    difficult = 81;
   
    addClass.classList.add("medium");
  }else if (difficult.value == "difficile"){
    difficult = 49;
    
    addClass.classList.add("hard");
  }
  return difficult;
}



function generateBombs(array){
     
  let selector;

  if (choice.value == "facile"){
    selector = 100;
  }else if (choice.value == "medio"){
    selector = 81;
  }else{
     selector = 49;
  }

  for (i = 0; i < 16; i++){
    
    console.log("selector",selector);

    let number = generateRandomInt(selector, 1);

    if(array.includes(number)){
      i--;

    }else {
      array.push(number);
 
    }
  }
  return array;
}

function generateRandomInt(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}



