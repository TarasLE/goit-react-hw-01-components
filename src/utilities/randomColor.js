export default function randomColor() {
    const list = document.querySelectorAll('.Statistics_Item__6uHI5')
    list.forEach((item) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        item.style = `background: #${randomColor}`
    })
}
