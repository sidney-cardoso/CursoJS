const elements = [
    { tag: 'p', text: 'This is a paragraph' },
    { tag: 'div', text: 'This is a div' },
    { tag: 'section', text: 'This is a section' },
    { tag: 'footer', text: 'This is a footer' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i]
    let element = document.createElement(tag)
    let nodeText = document.createTextNode(text)
    // element.innerText = text
    element.appendChild(nodeText)
    div.appendChild(element)
}

container.appendChild(div)
