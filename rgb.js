
//hardcode color array
//hardcode solution 


const solution = 'red'
const squares = document.querySelectorAll('.square');
const title = document.querySelector('.title')
const span = document.querySelector('.bar span')


//once page load, call init.
const init = () => {
  setupSquares();
}


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
  for(let i = 0; i < squares.length; i++) {
    const pickedColor = squares[i].style.backgroundColor = color[i];

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




init();