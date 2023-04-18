import { heroes } from "../../data/heroes";

export const getHeroById = (id) => {
    const heroResult = heroes.find(heroe => heroe.id === id);
    return heroResult;
}