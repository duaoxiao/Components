const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
// 使用setInterval()函数每60毫秒调用一次blurring()函数,实现页面加载时的模糊效果
let int = setInterval(blurring, 100)

function blurring() {
    load++
    //每次将load的值增加1,表示加载进度增加1%.当加载进度达到100%时,使用clearInterval()函数停止调用blurring()函数
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//用于将一个数值从一个范围映射到另一个范围,用于实现文本透明度和背景图片模糊程度的调整
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
