var turn = true,
    charge = null,
    charge1 = 0,
    charge2 = 0,
    charge3 = 0,
    charge4 = 0,
    charge5 = 0,
    charge6 = 0,
    charge7 = 0,
    colorRow = '#FFCC00';
//chargeArray = [charge1, charge2, charge3, charge4, charge5, charge6, charge7];

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

function paintRow(columnId) {
    console.log('entra al paint ' + columnId);
    if (columnId == 'column1' || columnId == 'row6c1' || columnId == 'row5c1' || columnId == 'row4c1' || columnId == 'row3c1' || columnId == 'row2c1' || columnId == 'row1c1') {
        if (charge1 == 0) {
            row6c1.style.background = colorRow;
            turnChange();
        }
        if (charge1 == 1) {
            row5c1.style.background = colorRow;
            turnChange();
        }
        if (charge1 == 2) {
            row4c1.style.background = colorRow;
            turnChange();
        }
        if (charge1 == 3) {
            row3c1.style.background = colorRow;
            turnChange();
        }
        if (charge1 == 4) {
            row2c1.style.background = colorRow;
            turnChange();
        }
        if (charge1 == 5) {
            row1c1.style.background = colorRow;
            turnChange();
        }
        charge1++;
        console.log(charge1);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column2' || columnId == 'row6c2' || columnId == 'row5c2' || columnId == 'row4c2' || columnId == 'row3c2' || columnId == 'row2c2' || columnId == 'row1c2') {
        if (charge2 == 0) {
            row6c2.style.background = colorRow;
            turnChange();
        }
        if (charge2 == 1) {
            row5c2.style.background = colorRow;
            turnChange();
        }
        if (charge2 == 2) {
            row4c2.style.background = colorRow;
            turnChange();
        }
        if (charge2 == 3) {
            row3c2.style.background = colorRow;
            turnChange();
        }
        if (charge2 == 4) {
            row2c2.style.background = colorRow;
            turnChange();
        }
        if (charge2 == 5) {
            row1c2.style.background = colorRow;
            turnChange();
        }
        charge2++;
        console.log(charge2);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column3' || columnId == 'row6c3' || columnId == 'row5c3' || columnId == 'row4c3' || columnId == 'row3c3' || columnId == 'row2c3' || columnId == 'row1c3') {
        if (charge3 == 0) {
            row6c3.style.background = colorRow;
            turnChange();
        }
        if (charge3 == 1) {
            row5c3.style.background = colorRow;
            turnChange();
        }
        if (charge3 == 2) {
            row4c3.style.background = colorRow;
            turnChange();
        }
        if (charge3 == 3) {
            row3c3.style.background = colorRow;
            turnChange();
        }
        if (charge3 == 4) {
            row2c3.style.background = colorRow;
            turnChange();
        }
        if (charge3 == 5) {
            row1c3.style.background = colorRow;
            turnChange();
        }
        charge3++;
        console.log(charge3);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column4' || columnId == 'row6c4' || columnId == 'row5c4' || columnId == 'row4c4' || columnId == 'row3c4' || columnId == 'row2c4' || columnId == 'row1c4') {
        if (charge4 == 0) {
            row6c4.style.background = colorRow;
            turnChange();
        }
        if (charge4 == 1) {
            row5c4.style.background = colorRow;
            turnChange();
        }
        if (charge4 == 2) {
            row4c4.style.background = colorRow;
            turnChange();
        }
        if (charge4 == 3) {
            row3c4.style.background = colorRow;
            turnChange();
        }
        if (charge4 == 4) {
            row2c4.style.background = colorRow;
            turnChange();
        }
        if (charge4 == 5) {
            row1c4.style.background = colorRow;
            turnChange();
        }
        charge4++;
        console.log(charge4);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column5' || columnId == 'row6c5' || columnId == 'row5c5' || columnId == 'row4c5' || columnId == 'row3c5' || columnId == 'row2c5' || columnId == 'row1c5') {
        if (charge5 == 0) {
            row6c5.style.background = colorRow;
            turnChange();
        }
        if (charge5 == 1) {
            row5c5.style.background = colorRow;
            turnChange();
        }
        if (charge5 == 2) {
            row4c5.style.background = colorRow;
            turnChange();
        }
        if (charge5 == 3) {
            row3c5.style.background = colorRow;
            turnChange();
        }
        if (charge5 == 4) {
            row2c5.style.background = colorRow;
            turnChange();
        }
        if (charge5 == 5) {
            row1c5.style.background = colorRow;
            turnChange();
        }
        charge5++;
        console.log(charge5);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column6' || columnId == 'row6c6' || columnId == 'row5c6' || columnId == 'row4c6' || columnId == 'row3c6' || columnId == 'row2c6' || columnId == 'row1c6') {
        if (charge6 == 0) {
            row6c6.style.background = colorRow;
            turnChange();
        }
        if (charge6 == 1) {
            row5c6.style.background = colorRow;
            turnChange();
        }
        if (charge6 == 2) {
            row4c6.style.background = colorRow;
            turnChange();
        }
        if (charge6 == 3) {
            row3c6.style.background = colorRow;
            turnChange();
        }
        if (charge6 == 4) {
            row2c6.style.background = colorRow;
            turnChange();
        }
        if (charge6 == 5) {
            row1c6.style.background = colorRow;
            turnChange();
        }
        charge6++;
        console.log(charge6);
        console.log('entra al if column del paint ' + columnId);

    }
    if (columnId == 'column7' || columnId == 'row6c7' || columnId == 'row5c7' || columnId == 'row4c7' || columnId == 'row3c7' || columnId == 'row2c7' || columnId == 'row1c7') {
        if (charge7 == 0) {
            row6c7.style.background = colorRow;
            turnChange();
        }
        if (charge7 == 1) {
            row5c7.style.background = colorRow;
            turnChange();
        }
        if (charge7 == 2) {
            row4c7.style.background = colorRow;
            turnChange();
        }
        if (charge7 == 3) {
            row3c7.style.background = colorRow;
            turnChange();
        }
        if (charge7 == 4) {
            row2c7.style.background = colorRow;
            turnChange();
        }
        if (charge7 == 5) {
            row1c7.style.background = colorRow;
            turnChange();
        }
        charge7++;
        console.log(charge7);
        console.log('entra al if column del paint ' + columnId);
    }
}

/*<div id="column1" class="column">
                        <div id="row1c1" class="row"></div>*/

function columnClicked(columnId) {
    console.log('El valor de carga es: ' + columnId);
    //var columnIndex = columnId.substr(5);
    paintRow(columnId);
}

function run() {
    for (var i = 0; i < columnArray.length; i++) {
        columnArray[i].addEventListener('click', function(columnId) { columnClicked(columnId.target.id); });
    }
    console.log('Entra run');
}

window.onload = function() {
    columnArray = document.getElementsByClassName("column");
    console.log(columnArray);
    run();
}