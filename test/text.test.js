const countLetters = require('../funtions/text')

describe('Conteo de letras',()=>{
    test('holaMundo = 9', ()=>{
        const result= countLetters('holaMundo')
        expect(result).toBe(9)
    })
    test('hola Mundo', ()=>{
        const result= countLetters('hola Mundo')
        expect(result).toBe(9)
    })
})