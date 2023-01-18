const words = ["checkmate", "laptop", "coding","Home", "languaGe", "plant", "rose", "camera", "function",
"mouse", "Website", "catchword", "iloveyou" , "language" , "CatchWorD" , "WebDeveloPmenT" , "time", "00119203", "facebook", "vsCode", "disCorD", "javaScripT",
"html", "Television","bread", "book", "roAd", "BirD" , ]
const webWord = document.getElementById('Word_place')
const webTime = document.getElementById('Time')
const webScore = document.getElementById('Score')
const scoreWas = document.getElementById('scoreWas')
const addMoreScore = document.getElementById('addMoreScore')
const addMoreTime = document.getElementById('addMoreTime')
const gameOver = document.getElementById('gameOver')
const input = document.getElementById('input')
const restart = document.getElementById('restart')
let time = 3
let score = 0
let intervalCounter = 500
let interval = setInterval(startTimer,intervalCounter)



function startGame(){
    for(let i = 0; i < words.length ; i++){
        if(input.value === words[i]){
            time += 3
            score += 1
            webTime.style.color = "green"
            webScore.style.color = "green"
            addMoreScore.style.display = "inline"
            addMoreTime.style.display = "inline"
            setTimeout(()=>{
                webTime.style.color = "white"
                webScore.style.color = "white"
                addMoreScore.style.display = "none"
                addMoreTime.style.display = "none"
                },500)
            webScore.innerHTML = `score: ${score}`
            input.value = ""
            let randomNum = Math.floor(Math.random()*words.length)
            webWord.innerHTML = words[randomNum]
            
        }
    }
}
function startTimer(){
    time--;
    webTime.innerHTML =`Time:${time}s`
    if(time == 0 ){
        gameOver.style.display = "inherit"
        input.style.display = "none"
        webWord.style.display = "none"
        scoreWas.innerHTML = `Your score was ${score}!`
        endGame();
    }
}
function endGame(){
    clearInterval(interval)
}
restart.addEventListener('click',()=>{
    window.location.reload()
})