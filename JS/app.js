var turn = true

function turnChange() {
    if (turn === true) {
        turn = false
        console.log('turn You');
    } else {
        turn = true
        console.log('turn AI');
    }
}

function c1() {
    console.log('C1');
    turnChange();
}

function c2() {
    console.log('C2');
    turnChange();
}

function c3() {
    console.log('C3');
    turnChange();
}

function c4() {
    console.log('C4');
    turnChange();
}

function c5() {
    console.log('C5');
    turnChange();
}

function c6() {
    console.log('C6');
    turnChange();
}

function c7() {
    console.log('C7');
    turnChange();
}

window.onload = function() {

    column1 = document.getElementById('column1');
    column2 = document.getElementById('column2');
    column3 = document.getElementById('column3');
    column4 = document.getElementById('column4');
    column5 = document.getElementById('column5');
    column6 = document.getElementById('column6');
    column7 = document.getElementById('column7');
    column1.onclick = c1;
    column2.onclick = c2;
    column3.onclick = c3;
    column4.onclick = c4;
    column5.onclick = c5;
    column6.onclick = c6;
    column7.onclick = c7;
}