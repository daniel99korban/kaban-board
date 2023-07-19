let frames = [// let projects [] with nameProjects, in the next release
    {
        'id' : 0,
        'nameFrame' : 'Back-log',
        'colorFrame' : '#C74844',
        'listTasks' : []
    },
    {
        'id' : 1,
        'nameFrame' : 'Doing',
        'colorFrame' : '#2631AB',
        'listTasks' : []
    },
    {
        'id' : 2,
        'nameFrame' : 'Done',
        'colorFrame' : '#5B9C35',
        'listTasks' : []
    },
]
// selecionar lista
let ulFrames = $('#list-frames');
ulFrames.addClass("white");

function builderFrame(name, color = '#000'){
    let titleContainer = $('<div>').addClass('row card-panel white-text'),
        frame = $('<li>'),
        addButton = $('<i>').text('add_circle').addClass('medium material-icons right col s4 m4 l4'),
        nameframe = $('<p>').text(name).addClass('center col s8 m8 l8');

    titleContainer.css("background-color", color);
    titleContainer.append(nameframe);
    titleContainer.append(addButton);
    frame.attr("class", 'col s4 m4 l4 row');
    frame.append(titleContainer);
    return frame;
}

frames.forEach(element => {
    let newFrame = builderFrame(element.nameFrame, element.colorFrame);
    // ulFrames.addClass('padding-s');
    ulFrames.append(newFrame);
});