const paragraph = document.querySelector('.paragraphs')
const paragraphs = document.querySelectorAll('p')

const bodyStyle = getComputedStyle(document.body)
const backgroundStyle = bodyStyle.backgroundColor

for (let p of paragraphs) {
    p.style.backgroundColor = backgroundStyle
    p.style.color = '#000'
    p.style.textAlign = 'center'
}
