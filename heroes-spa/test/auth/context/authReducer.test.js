import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('[authReducer] - testing', () => {

    test('Should to return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Should to call the login action and set the user (login)', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Ulises Romero',
                id: '123'
            }
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('Should to delete the name of the user and logged to false (logout)', () => {
        const action = { type: types.logout};

        const stateLogged = {
            logged: true,
            user: {
                name: 'Pedro Montana',
                id: '123'
            }
        };

        const state = authReducer(stateLogged, action);
        expect(state).toEqual({ logged: false });
    });

});