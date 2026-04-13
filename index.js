// Global Variables
let homeScore = 0
let awayScore = 0
let homeScoreP = document.getElementById("home-score-p")
let awayScoreP = document.getElementById("away-score-p")  
let score = 0

function add(points) {
    score += points
    return score
}

function addHomeScore(points) {
    score = 0
    score = add(points)
    homeScore += score
    homeScoreP.textContent = homeScore
    // console.log("Home score = " + homeScore)
}

function addAwayScore(points) {
    score = 0
    score = add(points)
    awayScore += score
    awayScoreP.textContent = awayScore
    // console.log("Away score = " + awayScore)
}

function init() {
    homeScore = 0
    awayScore = 0
    homeScoreP = document.getElementById("home-score-p")
    awayScoreP = document.getElementById("away-score-p")  
    homeScoreP.textContent = homeScore
    awayScoreP.textContent = awayScore
}

init()