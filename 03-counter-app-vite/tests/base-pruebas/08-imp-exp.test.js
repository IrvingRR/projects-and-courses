import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Tests in 08-imp-exp', () => { 

    test('getHeroeById must to return one hero by ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHoreById must to return undefined if does not exist the id', () => { 

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();

    });

    test('Must to return an array with the hores of DC', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        // Other way - THIS IS BETTER
        expect(heroesDC).toEqual(heroes.filter( (heroe) => heroe.owner.toLowerCase() === owner.toLowerCase() ));

    });


    test('Must to return an array with the heroes of Marvel', () => { 

        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        // Other way - THIS IS BETTER
        expect(heroesMarvel).toEqual(heroes.filter( (heroe) => heroe.owner.toLowerCase() === owner.toLowerCase() ));

    });

});