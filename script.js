'use strict';

let bd = [
    {
        'descricao': 'Coca-Cola',
        'comprado': ''
    },
    {
        'descricao': 'Cheetos Queijo',
        'comprado': 'checked'
    },
    {
        'descricao': 'Danone',
        'comprado': ''
    }
];


const montarItem = (descricao, comprado) => {
    const item = document.createElement('label');
    item.classList.add('item_lista');
    item.innerHTML = `
    <input type="checkbox" ${comprado}>
    <div>${descricao}</div>
    <input type="button" value="X">
    `
    document.getElementById('lista').appendChild(item);
}

const render = () => {
    bd.forEach(item => montarItem(item.descricao, item.comprado));
}

render();