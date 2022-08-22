let player1Name=prompt("Who is player 1?")
let player2Name=prompt("Who is player 2?")
const player1 = document.getElementById("player1")
const player2= document.getElementById("player2")
const score1=document.getElementById("score1")
const score2=document.getElementById("score2")
const name1 = document.getElementById("name1")
const name2=document.getElementById("name2")
const snake = document.getElementById("snake")
const ladder = document.getElementById("ladder")
const dice = document.getElementById("dice")
const diceScore = document.getElementById("dice-score")
var player1Playing = true
var player2Playing = false
var playerScore =0
const roll = document.getElementById("roll")
const snakes={
    13:7,
    30:21,
    39:19,
    45:31,
    60:49,
    71:55,
    79:61,
    92:83,
    99:72
}

const ladders={
    3:11,
    18:25,
    22:35,
    37:41,
    50:61,
    72:80,
    85:91,
}

name1.textContent = player1Name
name2.textContent = player2Name
roll.textContent = `${player1Name} start the game`
// dice.addEventListener("click",rollDice())
document.body.addEventListener("click",function(){
    if(player1Playing){
        roll.textContent = `${player1Name} It's your turn`
        console.log("player 1 playing")
    }
    else{
        roll.textContent = `${player2Name} It's your turn`
        console.log("player 2 playing")
    }
})
function rollDice(){
    // snake.style.display = "none"
    // ladder.style.display = "none"
    var player1Score = parseInt(score1.textContent)
    var player2Score = parseInt(score2.textContent)
    // if(player1Score>=100 || player2Score >=100){
    //     if(player1Score>100){
    //         alert(`${player1Name} is already won, we will restart the game`)
    //         location.reload()
    //     }
    //     else{
    //     alert(`${player2Name} is already won, we will restart the game`)
    //     location.reload()
    //     }
    // }
   
    var randomScore = Math.floor(Math.random()*6)+1
    playerScore+= randomScore
    console.log(playerScore)
    diceScore.textContent = randomScore
    if(randomScore===6){
        if(player1Playing){
            alert(`${player1Name} you got the 6, The dice will be rolled automatically`)
        }
        else{
            alert(`${player2Name} you got the 6, The dice will be rolled automatically`)
        }
        // alert("Whoo got 6, The dice will be rolled automatically")
        console.log(`[6box]player 1- ${player1Playing} player 2${player2Playing}`)
        rollDice()
    }
    
    else if(player1Playing){
        
        let a= parseInt(score1.textContent)
        playerScore+=a
        score1.textContent = playerScore
        // player1Playing = false
        // player2Playing = true
        if(score1.textContent in snakes){
            goDown(score1.textContent,score1)
            // snake.style.display = "none"
        }
        else if(score1.textContent in ladders){
            goUp(score1.textContent,score1)
        }
        changePlayer(player1Playing,player2Playing)
        playerScore =0
        console.log(`[1box]player 1- ${player1Playing} player 2 ${player2Playing}`)
    }
    else{
        // console.log(`player 1- ${player1Playing} player 2 playing ${player2Playing}`)
        let a = parseInt(score2.textContent)
        playerScore+=a
        score2.textContent=playerScore
        // player2Playing = false
        // player1Playing = true
        if(score2.textContent in snakes){
            goDown(score2.textContent,score2)
            // snake.style.display = "none"
        }
        else if(score2.textContent in ladders){
            goUp(score2.textContent,score2)
        }
        changePlayer(player1Playing,player2Playing)
        playerScore =0
        console.log(`[2box]player 1- ${player1Playing} player 2 ${player2Playing}`)
    }
    
}

function goDown(score,scoreBoard){
    alert(`snake catches you at ${scoreBoard.textContent} you will go to ${snakes[score]}`)
    // console.log(snakes[pr1Scorelaye])
    snake.style.display ="block"
    scoreBoard.textContent = snakes[score]
    setTimeout(()=>{
        snake.style.display="none"
    },1000)
    

}
function goUp(score,scoreBoard){
    alert(`yea you got a ladder at ${scoreBoard.textContent} you will go to ${ladders[score]}`)
    ladder.style.display = "block"
    scoreBoard.textContent = ladders[score]
    setTimeout(()=>{
        ladder.style.display="none"
    },1000)
}
function changePlayer(player1,player2){
    // let temp = player1
    player1Playing= player2
    player2Playing = player1
}

setInterval(()=>{
    var player1Score = parseInt(score1.textContent)
    var player2Score = parseInt(score2.textContent)
    if(player1Score>=100 || player2Score >=100){
        if(player1Score>=100){
            alert(`${player1Name} is already won, we will restart the game`)
            score1.textContent = 0
            score2.textContent = 0
            location.reload()
        }
        else if(player2Score>=100){
        alert(`${player2Name} is already won, we will restart the game`)
        score1.textContent = 0
            score2.textContent = 0
        location.reload()
        }
    }
},1000)