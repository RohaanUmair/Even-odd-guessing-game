const userSelected = document.getElementById('userSelect');
const random = document.getElementById('random');
const result = document.getElementById('result');

function even(){
    userSelected.innerText = 'User Selected: Even'; 
    var randomNum = Math.round(Math.random() * 25);
    random.innerText = `Number: ${randomNum}`;
    if (randomNum % 2 === 1){
        result.innerText = 'Try Again!';
        result.style.color = 'red';
    } else {
        result.innerText = 'Congrats, You won!';
        result.style.color = 'rgb(103, 166, 10)';
    }
}

function odd(){
    userSelected.innerText = 'User Selected: Odd'; 
    var randomNum = Math.round(Math.random() * 25);
    random.innerText = `Number: ${randomNum}`;
    if (randomNum % 2 === 0){
        result.innerText = 'Try Again!';
        result.style.color = 'red';
    } else {
        result.innerText = 'Congrats, You won!';
        result.style.color = 'rgb(103, 166, 10)';
    }
}