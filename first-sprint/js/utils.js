'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {
            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function getEmptyPosRandom() {
    const emptyLocations = []
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]
            if (cell.type === FLOOR && !cell.gameElement) emptyLocations.push({ i, j })
        }
    }
    const randIdx = getRandomInt(0, emptyLocations.length)
    var emptyPos = (emptyLocations[randIdx]) ? emptyLocations[randIdx] : null

    return emptyPos
}

function renderScore() {
    var elSpan = document.querySelector('.score span')
    elSpan.innerHTML = gCollectedBalls
}

function renderNgs() {
    var elSpan = document.querySelector('.ngs span')
    elSpan.innerHTML = gNgsCount
}

function countNgs() {
    var cellI = gGamerPos.i
    var cellJ = gGamerPos.j
    var ngsCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= gBoard[i].length) continue
            if (gBoard[i][j].gameElement === BALL) ngsCount++
        }
    }
    gNgsCount = ngsCount
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}




function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}


function getRandomNumsArr(gDifficulty) {
    var numsArr = []
    for (var i = 1; i <= gDifficulty; i++) {
        numsArr.push(i)
    }
    numsArr.sort((a, b) => 0.5 - Math.random())
    return numsArr
}

// neuber loop:

function countSeatsAround(rowIdx, colIdx) {
    var seatCount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gCinema.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= gCinema[0].length) continue
            var currCell = gCinema[i][j]
            if (currCell.isSeat && !currCell.isBooked) seatCount++
        }
    }
    return seatCount
}