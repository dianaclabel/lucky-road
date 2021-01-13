const game = {
    players: [],
    squares: [],
    turn: -1,
    init: () => {}
}

game.init = (playersLength,squaresLength) => {
    // generate players
    
    for (let i = 0; i < playersLength; i++){
        // generate a player
        const player = {
            position: -1,
        }
        game.players.push(player)
    }

    // generate squares 
    for(let i = 0; i < squaresLength; i++){
        const square = {
            luck: null
        }
        game.squares.push(square)
    }
    
    // set the turn of the first player
    game.turn = getRandomInt(playersLength) 
 
}

game.init(3,50);
console.log(game);


function getRandomInt(max) {
    const random = Math.random()
    const decimalResult = random * max
    return Math.floor(decimalResult)
}
