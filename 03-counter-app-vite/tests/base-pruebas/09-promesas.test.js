import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Tests in 09-promesas', () => {

    test('getHeroesByIdAsync must to return one hero', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });

    });

    test('getHeroesByIdAsync must to return an error if the hero does not exist', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {
                console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });

    });

});