let cards = [// let projects [] with nameProjects, in the next release
    {
        'id' : 0,
        'nameCard' : 'Back-log',
        'colorCard' : '#ff0000',
        'listTasks' : []
    },
    {
        'id' : 1,
        'nameCard' : 'Doing',
        'colorCard' : '#0000ff',
        'listTasks' : []
    },
    {
        'id' : 2,
        'nameCard' : 'Done',
        'colorCard' : '#00ff00',
        'listTasks' : []
    },
]
// selecionar lista
let ulCards = $('#list-cards');
ulCards.addClass("white");

function builderCard(name, color = '000'){
    // let cardContainer = 
    let card = $('<li>'),
    nameCard = $('<p>').text(name).addClass('card-panel white-text center');
    nameCard.css("background-color", color);
    card.append(nameCard);
    card.attr("class", 'col s4 m4 l4');
    return card;
}

cards.forEach(element => {
    let newCard = builderCard(element.nameCard, element.colorCard);
    ulCards.append(newCard);
});