'use strict'

var gBoard = {
    minesAroundCount: 4,
    isMine: false,
    isShown: false,
    isMarked: false,
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


onInit()
function onInit() {
    var board = buildBoard(4, 4, 2);

    renderBoard(board);

}

function buildBoard(rows, cols, mines) {
    var bomb = '💣'
    var board = []
    for (var i = 0; i < rows; i++) {
        board[i] = []
        for (var j = 0; j < cols; j++) {
            if (board !== bomb) {
                gBoard
            }
        }
    }
    for (var i = 0; i < mines; i++) {
        var row = getRandomInt(0, rows)
        var col = getRandomInt(0, cols)
        while (board[row][col] === bomb) {
            row = getRandomInt(1, rows)
            col = getRandomInt(1, cols)
        }
        board[row][col] = bomb
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (board[i][j] !== bomb) {
                board[i][j] = setMinesNegsCount(board, i, j)
            }
        }
    }
    console.table(board)
    return board
}

function setMinesNegsCount(board, rowIdx, colIdx) {
    var bomb = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) continue;
            var currCell = board[i][j];
            if (currCell === gGame.shownCount) bomb++;
        }
    }
    return bomb;
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var cellClass = (board[i][j]) ? gLevel.MINES : currCell
            var cellData = `<td 'data-i="${i}"' + i + '" data-j="${j}"' + j + '"'>`
            strHTML += `<td class="${currCell}>"
            <td class="cell ${cellClass}"${board} onclick="onCellClick(${i}, ${j})">
            ${currCell}
            </td>
            `
            strHTML += `<td class="cell ${cellClass}" ${board} onclick="onCellClick(${i}, ${j})">${cellData}</td>`;

        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}



function onCellClicked(elCell, i, j) {
}

function onCellMarked(elCell) {

}
function checkGameOver() {

}
function expandShown(board, elCell, i, j) {

}


// add more functions:
function timer() {
}
// Returns the class name for a specific cell
function getClassName(position) { // {i:2 , j:5}
    const cellClass = `cell-${position.i}-${position.j}` // 'cell-2-5'
    return cellClass
}

// utils functions!

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function createMat(rows, cols) {
    const mat = []
    for (var i = 0; i < rows.length; i++) {
        const row = []
        for (var j = 0; j < cols.length; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}
