import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test in 02-template-string', () => { 

    test('getSaludo must to return "Hola Irving"', () => {

        const name = 'Irving';
        const message = getSaludo(name);
        
        expect(message).toBe(`Hola ${name}`);

    });

 });