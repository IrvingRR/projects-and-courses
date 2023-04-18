import { returnArray } from "../../src/base-pruebas/07-deses-arr";

describe('Tests in 07-deses-arr', () => { 

    test('Must to return a string and one number', () => {

        const [letters, numbers] = returnArray();

        // We have many ways to do this

        // First way
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        // Second way
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // Third way
        expect(letters).toEqual(expect.any(String));

    });

});