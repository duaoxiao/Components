//获取progress、prev、next和circles 元素,用于操作和更新步骤指示器的状态
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//4个div(圈)
const circles = document.querySelectorAll('.circle')
//currentActive 的变量表示当前步骤的索引.初始值为 1
let currentActive = 1

//为“下一步”按钮添加了一个点击事件监听器,当用户点击该按钮时会执行监听器中的代码
next.addEventListener('click', () => {
    //currentActive变量的值加一,表示当前步骤的索引向后移动了一位
    currentActive++
    //如果当前步骤的索引超出了步骤指示器的总数,那么就将currentActive的值重置为最大值,以确保步骤指示器不会超出范围
    if (currentActive > circles.length)
        currentActive = circles.length
    // 代码调用update函数来更新步骤指示器的状态
    update()
})
// 为“上一步”按钮添加了一个点击事件监听器,当用户点击该按钮时会执行监听器中的代码
prev.addEventListener('click', () => {
    // currentActive变量的值减一,表示当前步骤的索引向前移动了一位
    currentActive--
    // 如果当前步骤的索引小于1,那么就将currentActive的值重置为1,以确保步骤指示器不会超出范围
    if (currentActive < 1)
        currentActive = 1
    // 代码调用update函数来更新步骤指示器的状态
    update()
})

function update() {
    //遍历所有圆圈元素
    circles.forEach((circle, idx) => {
        //如果当前圆圈的索引小于当前激活的圆圈的索引,则将该圆圈添加 active 类
        if (idx < currentActive)
            circle.classList.add('active')
        //否则将其移除active类
        else
            circle.classList.remove('active')
    })
    // 使用querySelectorAll()方法获取所有带有active类的圆圈元素
    const actives = document.querySelectorAll('.active')
    // 计算进度条的宽度,(激活的圆圈数 - 1) / (所有圆圈数 - 1) * 100 %
    //将结果赋值给进度条元素的 width 样式属性
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // 设置“上一个”和“下一个”按钮的禁用状态
    // 如果当前激活的是第一个圆圈,则禁用“上一个”按钮
    if (currentActive === 1)
        prev.disabled = true
    // 如果当前激活的是最后一个圆圈, 则禁用“下一个”按钮
    else if (currentActive === circles.length)
        next.disabled = true
    // 否则启用两个按钮
    else {
        prev.disabled = false
        next.disabled = false
    }

}

