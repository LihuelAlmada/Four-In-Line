var turn = true;
var charge1 = 0;
var charge2 = 0;
var charge3 = 0;
var charge4 = 0;
var charge5 = 0;
var charge6 = 0;
var charge7 = 0;
var colorRow = '#FFCC00';

function turnChange() {
    if (turn === true) {
        turn = false
        colorRow = '#FF6447';
        console.log('turn You');
    } else {
        turn = true
        colorRow = '#FFCC00';
        console.log('turn AI');
    }
}

function c1() {
    if (charge1 <= 6) {
        console.log('C1');
        if (turn === true) {
            //Pintar de amarillo

        } else {
            //Pintar de rojo
        }

        if (charge1 = 1) {
            r1c1.style.background = colorRow;
        }
        charge1++
        console.log(charge1);
        turnChange();
    }


}

function c2() {
    if (charge2 <= 6) {
        console.log('C2');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge2++
        console.log(charge2);
        turnChange();
    }
}

function c3() {
    if (charge3 <= 6) {
        console.log('C3');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge3++
        console.log(charge3);
        turnChange();
    }
}

function c4() {
    if (charge4 <= 6) {
        console.log('C4');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge4++
        console.log(charge4);
        turnChange();
    }
}

function c5() {
    if (charge5 <= 6) {
        console.log('C5');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge5++
        console.log(charge5);
        turnChange();
    }
}

function c6() {
    if (charge6 <= 6) {
        console.log('C6');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge6++
        console.log(charge6);
        turnChange();
    }
}

function c7() {
    if (charge7 <= 6) {
        console.log('C7');
        if (turn === true) {
            //Pintar de amarillo
        } else {
            //Pintar de rojo
        }
        charge7++
        console.log(charge7);
        turnChange();
    }
}

window.onload = function() {
    r1c1 = document.getElementById('row1c1');
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