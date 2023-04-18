import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const getData = async () => {

        try {
            
            setState({
                ...state,
                isLoading: true
            });

            const request = await fetch(url);
            const response = await request.json();

            setState({
                data: response,
                isLoading: false,
                error: null
            });

        } catch (error) {
            
            setState({
                ...state, error
            });

        }
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };

};