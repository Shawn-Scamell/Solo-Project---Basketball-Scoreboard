// Global Variables
let team1Score = 0
let team2Score = 0
let team1ScoreP = document.getElementById("team1-score-p")
let team2ScoreP = document.getElementById("team2-score-p")  
let score = 0

function add(points) {
    score += points
    return score
}

function addHomeScore(points) {
    score = 0
    score = add(points)
    team1Score += score
    team1ScoreP.textContent = team1Score
    // console.log("Home score = " + homeScore)
}

function addAwayScore(points) {
    score = 0
    score = add(points)
    team2Score += score
    team2ScoreP.textContent = team2Score
    // console.log("Away score = " + awayScore)
}

function init() {
    team1Score = 0
    team2Score = 0
    team1ScoreP = document.getElementById("team1-score-p")
    team2ScoreP = document.getElementById("team2-score-p")  
    team1ScoreP.textContent = team1Score
    team2ScoreP.textContent = team2Score
}

init()