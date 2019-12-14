
//hardcode color array
//hardcode solution 

const color = ['red', 'blue', 'green', 'gray', 'yellow', 'white']
const solution = 'red'


//once page load, call init.
const init = () => {
  setupSquares();
}

// pass 6 colors to each squares
//add click event listener to all squares
  // compare guessed color and solution: 
    //if same, alert correct
    // if diff, guessed square's background = body background 

const setupSquares = () => {

  const squares = document.querySelectorAll('.square');
  for(let i = 0; i < squares.length; i++) {

    const pickedColor = squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener('click', ()=>{
      if(pickedColor === solution) { 
        alert('right')
      } else {
        squares[i].style.backgroundColor = "#232323"
      } 

    })
  }    
}

init();