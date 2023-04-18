import { types } from "../../../src/auth/types/types";

describe('[types] - testing', () => {

    test('Should to return the correct types', () => {

        const correctTypes = {
            login: '[Auth]: Login',
            logout: '[Auth]: Logout'
        };

        expect(types).toEqual(correctTypes);

    });

});