const elements = [
    { tag: 'p', text: 'This is a paragraph' },
    { tag: 'div', text: 'This is a div' },
    { tag: 'footer', text: 'This is a footer' },
    { tag: 'section', text: 'This is a section' }
]





// ------------------------------------------------- MINHA SOLUÇÃO ------------------------------------------------- //
/* 
for (let i = 0; i < elements.length; i++) {
    const container = document.querySelector('.container')
    const element = document.createElement(elements[i].tag)
    element.innerHTML = elements[i].text
    container.appendChild(element)
}
 */
