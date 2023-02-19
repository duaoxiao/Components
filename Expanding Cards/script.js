
// 选择所有 class 名称为 "panel" 的元素
const panels = document.querySelectorAll('.panel')
// 为每个元素添加一个点击事件监听器
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 当用户点击一个元素时，它会调用 removeActiveClasses() 函数.
        // 该函数会遍历所有的 "panel" 元素，并将它们的 "active" class 删除
        removeActiveClasses()
        //将当前被点击的元素添加 "active" class。
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// 这段代码可以实现一种效果，当用户点击一个元素时，其他元素会取消选中状态，而当前被点击的元素会被高亮显示。
