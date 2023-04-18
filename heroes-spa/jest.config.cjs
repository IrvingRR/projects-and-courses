module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
}