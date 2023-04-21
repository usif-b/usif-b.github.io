import Background from './Background.js'

const canvas = document.getElementById('stars')
const ctx = canvas.getContext('2d')

const width = canvas.clientWidth
const height = canvas.clientHeight
const background = new Background(width, height)
background.initialize()

let lastTime = 0

function loop(timestamp) {
    let deltaTime = timestamp - lastTime

    lastTime = timestamp

    ctx.clearRect(0,0,width,height)
    background.update(deltaTime)
    background.draw(ctx)
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

const scrollBtn = document.getElementById('scroll-btn')
const introDiv = document.getElementById('intro')
const mainDiv = document.getElementById('main')
const containerDiv = document.getElementById('container')

scrollBtn.addEventListener('click', () => {
    introDiv.classList.add('fade-out')
    setTimeout(() => {
        dispatchEvent.style.display = 'none'
    }, 500)
    background.slowed = true
    containerDiv.style.justifyContent = 'unset'
    introDiv.style.display = 'none'
    mainDiv.classList.add('show')
})