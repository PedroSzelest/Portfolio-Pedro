import { logoNavbar } from './js/logoNavbar.js'
import { night } from './js/night.js'
import { img } from './js/slideBar.js'
import { words } from './js/floatingWords.js'

function all() {
    logoNavbar()
    night()
    img()
    words()
}

all()

/*---Snake Game---*/

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./js/sanke/snake.js"
import { update as updateFood, draw as drawFood } from './js/sanke/food.js'
import { outsideGrid } from './js/sanke/grid.js'

let lastRenderTime = 0
const gameBoard = document.getElementById("game-board")
let gameOver = false

const $snake_game = document.querySelector('.snake-game')
const $button_play = document.querySelector('.play-snake')

function main(currentTime) {
    if(gameOver) {
        if(confirm('You lost.')) {
            window.location = '/'
        }
        return
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)

    if(secondsSinceLastRender < 1 /SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

$button_play.addEventListener('click', ()=> {
    $snake_game.classList.toggle('active')
})


