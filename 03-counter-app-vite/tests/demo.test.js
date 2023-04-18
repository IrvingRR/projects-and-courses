describe('Tests in <DemoComponents/>', () => { 
    test('This test must not fail', () => {

        // Initialization
        const message1 = 'Hello World';
    
        // Estimulate
        const message2 = message1.trim();
    
        // Analyze the behaviour...wating
        expect(message1).toBe(message2);
    
    });
});
