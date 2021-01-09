const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const favFilmakers = [
    'Stanley Kubrick',
    'Francis Ford Coppola',
    'Quentin Tarantino',
    'David Lynch',
    'Martin Scorcese',
    'John Carpenter',
    'Spike Lee',
    'Richard Linklater',
    'PT Anderson',
    'David Cronenberg'
];

// store listitems
const listItems = [];

let dragStartIndex;

createList();

// insert list items into dom
function createList() {
    [...favFilmakers]
        .map(a => ( { value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"</i>
            </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);

        });
}