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

const clear = () => {
    const lista = document.getElementById('lista');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}


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

const addItem = (e) => {
    const key = e.key;
    const text = e.target.value;
    if (key === 'Enter' && text != '') {
        bd.push(
            {
                'descricao': text,
                'comprado': ''
            }
        );
        render();
        e.target.value = '';
    }
}

const render = () => {
    clear();
    bd.forEach(item => montarItem(item.descricao, item.comprado));
}

document.getElementById('novoItem').addEventListener('keypress', addItem);

render();