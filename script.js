let cells = document.querySelectorAll('td');
let displayContainer = document.getElementById('displayContainer');
let turn = 'X'; /* we use this variable to know if it's X's turn or 0's turn */
let inPlay = 1; /*as long as inPlay == 1 the game is on. When a winner is decided
                we will automatically set inPlay as 0 and the game will be over*/
cells.forEach(cell => {
  cell.addEventListener('click', function() {
    if(inPlay == 1) {
        if(turn == 'X' && cell.textContent == ''){
            cell.textContent = 'X';
        } else if(turn == '0' && cell.textContent == '') {
            cell.textContent = '0';
        }
    if(turn == 'X') {
        turn = '0';
    } else if (turn == '0') {
        turn = 'X';
    }
    let table = document.getElementById('myTable');
    rows = table.rows; 
        // Check rows
    for (let i = 0; i < 3; i++) {
        if (rows[i].cells[0].innerHTML !== '' && rows[i].cells[0].innerHTML === rows[i].cells[1].innerHTML && rows[i].cells[0].innerHTML === rows[i].cells[2].innerHTML) {
            inPlay = 0;
            if(turn == 'X') {
                turn = '0';
            } else {
                turn = 'X';
            }
        return displayContainer.innerHTML = `Winner is: ${turn}`;
        }
    }
        // Check columns
    for (let j = 0; j < 3; j++) {
        if (rows[0].cells[j].innerHTML !== '' && rows[0].cells[j].innerHTML === rows[1].cells[j].innerHTML && rows[0].cells[j].innerHTML === rows[2].cells[j].innerHTML) {
            inPlay = 0;
            if(turn == 'X') {
                turn = '0';
            } else {
                turn = 'X';
            }
        return displayContainer.innerHTML = `Winner is: ${turn}`;
        }
    }
        // Check diagonals
    if (rows[0].cells[0].innerHTML !== '' && rows[0].cells[0].innerHTML === rows[1].cells[1].innerHTML && rows[0].cells[0].innerHTML === rows[2].cells[2].innerHTML) {
        inPlay = 0;
        if(turn == 'X') {
            turn = '0';
        } else {
            turn = 'X';
        }
        return displayContainer.innerHTML = `Winner is: ${turn}`;
    }
    
    if (rows[0].cells[2].innerHTML !== '' && rows[0].cells[2].innerHTML === rows[1].cells[1].innerHTML && rows[0].cells[2].innerHTML === rows[2].cells[0].innerHTML) {
        inPlay = 0;
        if(turn == 'X') {
            turn = '0';
        } else {
            turn = 'X';
        }
        return displayContainer.innerHTML = `Winner is: ${turn}`;
    }   
}
  });
});

function reset(){
    cells.forEach(cell => {
        cell.textContent = '';
        turn = 'X';
        inPlay = 1;
        displayContainer.innerHTML = 'Winner is: ?';
    });
}
