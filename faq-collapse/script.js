// 查找所有具有faq-toggle类名的元素,将它们存储在名为toggles的变量中
const toggles = document.querySelectorAll('.faq-toggle')

//遍历每个按钮
toggles.forEach(toggle => {
    //为当前元素添加一个点击事件监听器
    toggle.addEventListener('click', () => {
        //当元素被点击时,将其父元素的active类名进行添加或移除
        toggle.parentNode.classList.toggle('active')
    })
})
