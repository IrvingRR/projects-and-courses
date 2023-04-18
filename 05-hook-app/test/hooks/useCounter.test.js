import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter';

describe('[useCount] - Testing', () => {

    test('Should to return the default values when hook is rendered', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, incrementCounter, decrementCounter, resetCounter } = result.current;

        expect(counter).toBe(0);
        expect(incrementCounter).toEqual(expect.any( Function ));
        expect(decrementCounter).toEqual(expect.any( Function ));
        expect(resetCounter).toEqual(expect.any( Function ));

    });

    test('Should to generate the counter with the 100 value', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('Should to increment the counter value', () => {

        const { result } = renderHook(() => useCounter());
        const { incrementCounter } = result.current;

        act(() => {
            incrementCounter();
            incrementCounter();
        });

        expect(result.current.counter).toBe(2);

    });

    test('Should to decrement the counter value', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrementCounter } = result.current;

        act(() => {
            decrementCounter();
            decrementCounter();
            decrementCounter();
        });

        expect(result.current.counter).toBe(97);

    });

    test('Should to reset the counter value', () => {

        const { result } = renderHook(() => useCounter(100));
        const { incrementCounter, resetCounter } = result.current;

        act(() => {
            incrementCounter(5);
            incrementCounter(10);
            resetCounter();
        });

        expect(result.current.counter).toBe(100);

    });

});