// beforeAll(()=>{

// });

// // test('Adding 1 + 1 equals 2', () => {
// //     expect(sum(1, 1)).toBe(2)
// // });

// // test('Adding 2 + 2 equals 4', () => {
// //     expect().tobe(4)
// // });

// test('Validar creación de Usuario (Objeto Bien Formado)', () => {
//     expect(typeof(respuestaServidor)).toBe('string');
// });

// // test('Multiplying 1 * 1 equals 1', () => {
// // expect(mul(1, 1)).toBe(1)
// // });

// // test('Subtracting 1 - 1 equals 0', () => {
// // expect(sub(1, 1)).toBe(0)
// // });

// // test('Dividing 1 / 1 equals 1', () => {
// // expect(div(1, 1)).toBe(1)
// // });

// describe('Primer set de pruebas', () => {
//     beforeEach(() => {
//       console.log("Conectando a base de datos de pruebas y mockeando llamadas a API's")
//     });
//     afterAll(() => {
//       console.log("Limpiando base de datos de pruebas...");
//     });
//     test('Retorno un json', () => {
//         expect(1+1).toBe(2)
//     });
//     test('Retorno las claves del objeto corrextamente', () => {
//         expect(1+1).toBe(2)
//     });
// });

describe('Segundo set de pruebas', () => {
    beforeEach(() => {
      console.log("Conectando a base de datos de pruebas y mockeando llamadas a API's")
    });
    afterAll(() => {
      console.log("Limpiando base de datos de pruebas...");
    });
    test('Adding 2 + 2 equals 4', () => {
        expect(2+2).toBe(4)
    });
});