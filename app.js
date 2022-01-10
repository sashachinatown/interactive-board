const board = document.querySelector('#board')
const colors = ['#52ffae', '#2abf79', '#1f8f5a', '#166e44', '#00542c', "#7ae6b2"]
const SQUARES_NUMBER = 397

for(let i = 0; i < SQUARES_NUMBER; i++)   {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square)
    )

    square.addEventListener('mouseleave', () => 
        removeColor(square)
    )

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}