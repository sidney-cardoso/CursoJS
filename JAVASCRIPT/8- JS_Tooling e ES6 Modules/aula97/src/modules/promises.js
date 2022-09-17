const promise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise')
            resolve()
        }, 1000)
    })

export default async () => {
    await promise()
    console.log('finished')
}
