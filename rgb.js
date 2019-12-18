let colors = [];
let solution = '';
let num = 6;
const solutionSpan = document.querySelector('h1 span')
const squares = document.querySelectorAll('.square');
const h1= document.querySelector('h1')
const span = document.querySelector('#bar span')
const resetBtn = document.querySelector('#reset');
const modes = document.querySelectorAll('.mode')

const init = () => {
  setupSquares();
  setupModes()
  resetColor();

}


//add click EventListners to sqaures
//loop through squares
    //if picked color === solution: 
      //style h1 bg the solution color.
      //style rest sqaures solution color.
      //display'correct' to bar span.
      // display resetBtn 'Play Again?'
    //if diff, 
      //guessed square's background = body background
      // bar span would be 'try again';

const setupSquares = () => {
  for(let i = 0; i < squares.length; i++) {

    squares[i].addEventListener('click', function(){

      if(this.style.backgroundColor === solution) { 
        h1.style.backgroundColor = solution;
        span.textContent = 'Correct';
        resetBtn.textContent = 'Play Again?';

        for (let j = 0;  j < squares.length; j++) {
          squares[j].style.backgroundColor = solution;
        }     
      } else {
        this.style.backgroundColor = "#232323"
        span.textContent ="Try Again"
      } 
    })
  }    
}

//add click event listener to EASY and HARD btn
 // if clicked btn is EASY
   // set colors length = 3

// else, set colors length = 6
const setupModes = () => {
  for (let i = 0; i < modes.length; i++) {
    modes[i].addEventListener('click', () => {
      if(modes[i].textContent === 'Easy') {
        console.log(num)
        num = 3;
        resetColor();
      } else {
        num = 6;
        resetColor();
        console.log(num)
      }
    })
  }
}

//title bg back to body bg
//span back to empty
//generate random color array
//generate random solution color
  //display solution rgb
//assign colors to squares
const resetColor = () => {
  h1.style.backgroundColor = 'steelblue'
  span.textContent= ''
  colors = generateColor(num)
  solution = colors[Math.floor(Math.random() * num)]
  solutionSpan.textContent = solution;
  
  for(let i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
}

resetBtn.addEventListener('click', () => {
 resetColor();
})


// for loop num, call random()
const generateColor = num => {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(random());

  }
  return colors;
}

const random = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r +', ' + g + ', ' + b + ')';
}

init();
