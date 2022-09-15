// --------------------------- XMLHttpRequest --------------------------- //

const request = object => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(object.method, object.url, true)
        xhr.send(null)

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText)
            else reject(xhr.statusText)
        })
    })
}

document.addEventListener('click', event => {
    const element = event.target
    const tag = element.tagName.toLowerCase()
    if (tag === 'a') {
        event.preventDefault()
        loadPage(element)
    }
})
const loadPage = async element => {
    try {
        const href = element.getAttribute('href')
        const objConfig = {
            method: 'GET',
            url: href
        }
        const response = await request(objConfig)
        loadResult(response)
    } catch (error) {
        console.error(error)
    }
}
const loadResult = response => {
    const result = document.querySelector('.result')
    result.innerHTML = response
}
