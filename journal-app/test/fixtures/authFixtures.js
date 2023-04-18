export const initialState = {
    status: 'checking', // authenticated, no-authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authenticatedState = {
    status: 'authenticated', // authenticated, no-authenticated, checking
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null
};

export const noAuthenticatedState = {
    status: 'no-authenticated', // authenticated, no-authenticated, checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const demoUser = {
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo-user.jpg',
};