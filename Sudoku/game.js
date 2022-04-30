// game buttons
let easy = document.createElement("button")
easy.textContent= "Easy"
easy.onclick = startEasy()

// let medium = document.createElement("button")
// medium.textContent = "Medium"
// medium.onclick = startMedium

// let hard = document.createElement("button")
// hard.textContent = "Hard"
// hard.onclick = startHard


function makeLevels(){
    document.body.appendChild(easy)
    // document.body.appendChild(medium)
    // document.body.appendChild(hard)
    console.log("Making Levels")
}

function startEasy(){
    // Spaces to put numbers
    solvedGrid = grid

    let filledSpaces = 25
    start = true
  
    startGame(filledSpaces)
}

function startGame(fill){
    do{
        generateGrid(fill)
        solveGrid()
    }while (!solveGrid())
    console.log("easy")

    resetScreen()
    updateDisplay()
}


