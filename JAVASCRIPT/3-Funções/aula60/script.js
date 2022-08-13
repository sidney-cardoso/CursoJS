// ------------------------------------ Funções recursivas ------------------------------------ //
// Funções recursivas são funções que se chamam a si mesmas.
function recursiva(max) {
    if (max >= 10) return
    max++
    console.log(max);
    recursiva(max)
}

recursiva(0)