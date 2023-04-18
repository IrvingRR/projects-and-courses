import { getActiveUser, getUser } from "../../src/base-pruebas/05-funciones";

describe('05-funciones', () => { 

    test('getUser must to return an object', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);

    });

    test('getActiveUser must to return an object with the name received like parameter', () => {

        const name = 'Irving Romero';

        const activeUser = getActiveUser(name);

        expect(activeUser).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });

});