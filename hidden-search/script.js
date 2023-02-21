const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    //搜索框元素的类名列表中切换名为 active的类
    search.classList.toggle('active')
    input.focus()
})
