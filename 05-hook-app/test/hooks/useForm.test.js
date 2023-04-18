import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('[useForm] - Testing', () => {

    const initialForm = {
        name: 'Irving Romero',
        email: 'irving@gmail.com'
    };

    test('Should to return the default values', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            form: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('Should to change the name of the form', () => {

        const newValue = 'Pablo Montero';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.form).toEqual({
            name: newValue,
            email: initialForm.email
        });
    });

    test('Should to reset the form value', () => {
        
        const newValue = 'Guillermo del Toro';

        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;


        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm({ preventDefault: Function });
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.form).toEqual(initialForm);

    })

});