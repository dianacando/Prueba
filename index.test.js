const coleccion = require("./index");

test('ordenar valores asc', () => {
    let arr = [6,2,3,10,8];
    let resul = coleccion(arr, 'ASC');
    expect(resul).toStrictEqual([2,3,6,8,10]);
});


test('ordenar valores desc', () => {
    let arr = [6,2,3,8,10];
    let resul = coleccion(arr, 'DESC');
    expect(resul).toStrictEqual([10,6,3,2]);
});

test('array vacio', () => {
    let arr = [];
    let resul = coleccion(arr, 'DESC');
    expect(resul).toBe('Lista vacia');
});

test('misma longitud', () => {
    let arr = [6,2,3,10];
    let resul = coleccion(arr, 'DESC');
    let len =resul.length; 
    expect(len).toBe(4);
});