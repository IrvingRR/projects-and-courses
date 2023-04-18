import { heroes } from '../../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)) {
        throw new Error('Invalid publisher, only you can use the next publishers: [Dc Comics, Marvel Comics]')
    }

    const heroesResult = heroes.filter(heroe => heroe.publisher === publisher);
    return heroesResult;

}