var boardHTML = null,
    columnsHTML = null,
    turn = 'yellow',
    board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
    ];
    
var toggleTurn = function () {
  if(turn === 'yellow'){
    turn='red';
    go.style.background = '#EE6E52';
  }else{
    turn='yellow';
    go.style.background = '#F5CA45';
  }
}
var checkGameStatus= function(col, row){
  console.log('Column '+col);
  console.log('row '+row);
  if(board[col, row]===board[col, row -1])
  {
    
  }
}
var columnEventHandler = function (e) {
  var columnId = e.target.id.substr(1, 1);
  for (var i = 0; i < board[columnId].length; i++) {
    if (!board[columnId][i]) {
      board[columnId][i] = turn;
      checkGameStatus(columnId, i);
      toggleTurn();
      render();
      break;
    }
  }
}
var bindColumnHandlers = function () {
  columnsHTML = document.getElementsByClassName('column');
  for (var i = 0; i < columnsHTML.length; i++) {
    columnsHTML[i].onclick = columnEventHandler;
  }
}
var render = function () {
  var html = '';
  for (var i = 0; i < board.length; i++) {
    html += '<div id="c' + i + '" class="column">';
    for (var j = board[i].length - 1; j >= 0; j--) {
      html += '<div id="s' + i + j + '" class="spot';
      if (board[i][j]) html += ' ' + board[i][j]
      {
        html += '"></div>';
      }
    }
    html += '</div>';
  }
  boardHTML.innerHTML = html;
  bindColumnHandlers();
}
var init = function () {
  boardHTML = document.getElementById('board');
  go = document.getElementById('go');
  turn = Math.random() > 0.5 ? 'yellow' : 'red';
  render();
}
window.onload = init;