// --------------------------------------------- FUNÇÕES IMEDIATAS (IIFE) --------------------------------------------- //
// IIFE - Immediately Invoked Function Expression
(age => {
    const middleName = 'Doe'
    const sayMyName = name => `My name is ${name} ${middleName} and I am ${age} years old.`

    console.log(sayMyName('John'))
})(24); // Os parâmetros são passados aqui dentro.

/* 
function iife() {
    console.log('iife')
}

iife()
 */
