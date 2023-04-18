import { getGift } from "../../src/base-pruebas/11-async-await";

describe('Tests in 11-async-await', () => {

    test('getGift must to return the URL of the gift', async () => {

        const url = await getGift();
        expect(typeof url).toBe('string');
    });

});