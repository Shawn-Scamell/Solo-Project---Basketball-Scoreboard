// Global Variables
let homeScore = 0
let guestScore = 0
let homeScoreP = document.getElementById("home-score-p")
let guestScoreP = document.getElementById("guest-score-p")  
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

function addGuestScore(points) {
    score = 0
    score = add(points)
    guestScore += score
    guestScoreP.textContent = guestScore
    // console.log("Guest score = " + guestScore)
}

function init() {
    homeScore = 0
    guestScore = 0
    homeScoreP = document.getElementById("home-score-p")
    guestScoreP = document.getElementById("guest-score-p")  
    homeScoreP.textContent = homeScore
    guestScoreP.textContent = guestScore
}

init()