const container = document.getElementById('container')

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 300

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

//设置颜色
function setColor(div) {
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor
    div.style.boxShadow = `0 0 2px ${randomColor},0 0 10px ${randomColor}`
}

//移动
function removeColor(div) {
    div.style.backgroundColor = '#111'
    div.style.boxShadow = '0 0 2px #000'
}
//获取随机颜色值
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
