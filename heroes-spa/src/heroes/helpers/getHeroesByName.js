import { heroes } from '../../data/heroes';

export const getHeroesByName = (name = '') => {
    const nameHeroe = name.toLocaleLowerCase().trim();

    if(nameHeroe.length === 0) return [];

    const results = heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(nameHeroe));
    return results;
}