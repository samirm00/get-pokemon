const createAbilitiesList = (abilities) => {
    const ul = document.createElement('ul');
    ul.id = 'ability-list';
    abilities.forEach((ability) => {
        const li = document.createElement('li');
        li.innerText = ability.ability.name;
        ul.append(li);
    });
    return ul;
};

export default createAbilitiesList;
