let frames = [// let projects [] with nameProjects, in the next release
    {
        'id' : 0,
        'nameFrame' : 'Back-log',
        'colorFrame' : '#ff0000',
        'listTasks' : []
    },
    {
        'id' : 1,
        'nameFrame' : 'Doing',
        // 'colorFrame' : '#0000ff',
        'listTasks' : []
    },
    {
        'id' : 2,
        'nameFrame' : 'Done',
        // 'colorFrame' : '#00ff00',
        'listTasks' : []
    },
]
// selecionar lista
let ulFrames = $('#list-frames');
ulFrames.addClass("white");

function builderFrame(name, color = '#000'){
    // let cardContainer = 
    let frame = $('<li>'),
    divAdd = $('<div>').addClass('add_circle right'),
    nameframe = $('<p>').text(name).addClass('card-panel white-text center');
    nameframe.css("background-color", color);
    frame.append(nameframe);
    frame.append(divAdd);
    frame.attr("class", 'col s4 m4 l4');
    return frame;
}

frames.forEach(element => {
    let newFrame = builderFrame(element.nameFrame, element.colorFrame);
    ulFrames.append(newFrame);
});