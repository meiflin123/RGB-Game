const solutionSpan = document.querySelector('.title span')
const squares = document.querySelectorAll('.square');
const title = document.querySelector('.title')
const span = document.querySelector('.bar span')

const init = () => {
  setupSquares();
}

//once page load, call init.
// pass 6 colors to each squares
//add click event listener to all squares
  // compare guessed color and solution: 
    //if same, 
      //make title the solution color.
      //make rest sqaures solution color.
      // display'correct' to header bar.
    // if diff, 
      //guessed square's background = body background

const setupSquares = () => {
  const colors = generateColor(6)
  const solution = colors[Math.floor(Math.random() * 6)]
  solutionSpan.textContent = solution;

  console.log('square', colors)
  for(let i = 0; i < squares.length; i++) {
    const pickedColor = squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', ()=>{
      if(pickedColor === solution) { 
        title.style.backgroundColor = solution
        console.log(span)
        span.textContent= 'correct'
        for (let i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = solution;

        }
      } else {
        squares[i].style.backgroundColor = "#232323"
        span.textContent ="Try Again"
      } 
    })
  }    
}


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
