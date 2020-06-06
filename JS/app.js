var turn = true,
    charge1 = 0,
    charge2 = 0,
    charge3 = 0,
    charge4 = 0,
    charge5 = 0,
    charge6 = 0,
    charge7 = 0,
    colorRow = '#FFCC00';

function turnChange() {
    if (turn === true) {
        turn = false;
        colorRow = '#FF6447';
        console.log('turn You');
    } else {
        turn = true;
        colorRow = '#FFCC00';
        console.log('turn AI');
    }
}

function c1() {
    switch (charge1) {
        case 0:
            r6c1.style.background = colorRow;
            break;

        case 1:
            r5c1.style.background = colorRow;
            break;

        case 2:
            r4c1.style.background = colorRow;
            break;

        case 3:
            r3c1.style.background = colorRow;
            break;

        case 4:
            r2c1.style.background = colorRow;
            break;

        case 5:
            r1c1.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge1++;
    console.log(charge1);
    turnChange();
}

function c2() {
    switch (charge2) {
        case 0:
            r6c2.style.background = colorRow;
            break;

        case 1:
            r5c2.style.background = colorRow;
            break;

        case 2:
            r4c2.style.background = colorRow;
            break;

        case 3:
            r3c2.style.background = colorRow;
            break;

        case 4:
            r2c2.style.background = colorRow;
            break;

        case 5:
            r1c2.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge2++;
    console.log(charge2);
    turnChange();

}

function c3() {
    switch (charge3) {
        case 0:
            r6c3.style.background = colorRow;
            break;

        case 1:
            r5c3.style.background = colorRow;
            break;

        case 2:
            r4c3.style.background = colorRow;
            break;

        case 3:
            r3c3.style.background = colorRow;
            break;

        case 4:
            r2c3.style.background = colorRow;
            break;

        case 5:
            r1c3.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge3++;
    console.log(charge3);
    turnChange();

}

function c4() {
    switch (charge4) {
        case 0:
            r6c4.style.background = colorRow;
            break;

        case 1:
            r5c4.style.background = colorRow;
            break;

        case 2:
            r4c4.style.background = colorRow;
            break;

        case 3:
            r3c4.style.background = colorRow;
            break;

        case 4:
            r2c4.style.background = colorRow;
            break;

        case 5:
            r1c4.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge4++;
    console.log(charge4);
    turnChange();

}

function c5() {
    switch (charge5) {
        case 0:
            r6c5.style.background = colorRow;
            break;

        case 1:
            r5c5.style.background = colorRow;
            break;

        case 2:
            r4c5.style.background = colorRow;
            break;

        case 3:
            r3c5.style.background = colorRow;
            break;

        case 4:
            r2c5.style.background = colorRow;
            break;

        case 5:
            r1c5.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge5++;
    console.log(charge5);
    turnChange();

}

function c6() {
    switch (charge6) {
        case 0:
            r6c6.style.background = colorRow;
            break;

        case 1:
            r5c6.style.background = colorRow;
            break;

        case 2:
            r4c6.style.background = colorRow;
            break;

        case 3:
            r3c6.style.background = colorRow;
            break;

        case 4:
            r2c6.style.background = colorRow;
            break;

        case 5:
            r1c6.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge6++;
    console.log(charge6);
    turnChange();

}

function c7() {
    switch (charge7) {
        case 0:
            r6c7.style.background = colorRow;
            break;

        case 1:
            r5c7.style.background = colorRow;
            break;

        case 2:
            r4c7.style.background = colorRow;
            break;

        case 3:
            r3c7.style.background = colorRow;
            break;

        case 4:
            r2c7.style.background = colorRow;
            break;

        case 5:
            r1c7.style.background = colorRow;
            break;

        default:
            console.log('No hay mas espacio');
            break;

    }
    charge7++;
    console.log(charge7);
    turnChange();

}

window.onload = function() {
    r1c1 = document.getElementById('row1c1');
    r2c1 = document.getElementById('row2c1');
    r3c1 = document.getElementById('row3c1');
    r4c1 = document.getElementById('row4c1');
    r5c1 = document.getElementById('row5c1');
    r6c1 = document.getElementById('row6c1');

    r1c2 = document.getElementById('row1c2');
    r2c2 = document.getElementById('row2c2');
    r3c2 = document.getElementById('row3c2');
    r4c2 = document.getElementById('row4c2');
    r5c2 = document.getElementById('row5c2');
    r6c2 = document.getElementById('row6c2');

    r1c3 = document.getElementById('row1c3');
    r2c3 = document.getElementById('row2c3');
    r3c3 = document.getElementById('row3c3');
    r4c3 = document.getElementById('row4c3');
    r5c3 = document.getElementById('row5c3');
    r6c3 = document.getElementById('row6c3');

    r1c4 = document.getElementById('row1c4');
    r2c4 = document.getElementById('row2c4');
    r3c4 = document.getElementById('row3c4');
    r4c4 = document.getElementById('row4c4');
    r5c4 = document.getElementById('row5c4');
    r6c4 = document.getElementById('row6c4');

    r1c5 = document.getElementById('row1c5');
    r2c5 = document.getElementById('row2c5');
    r3c5 = document.getElementById('row3c5');
    r4c5 = document.getElementById('row4c5');
    r5c5 = document.getElementById('row5c5');
    r6c5 = document.getElementById('row6c5');

    r1c6 = document.getElementById('row1c6');
    r2c6 = document.getElementById('row2c6');
    r3c6 = document.getElementById('row3c6');
    r4c6 = document.getElementById('row4c6');
    r5c6 = document.getElementById('row5c6');
    r6c6 = document.getElementById('row6c6');

    r1c7 = document.getElementById('row1c7');
    r2c7 = document.getElementById('row2c7');
    r3c7 = document.getElementById('row3c7');
    r4c7 = document.getElementById('row4c7');
    r5c7 = document.getElementById('row5c7');
    r6c7 = document.getElementById('row6c7');

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