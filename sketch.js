function createBoard(size) {
    for (let i = 1; i < size + 1; i++) {
        line(width / 5 * i, 0, 0, width / 5 * i);
    }
    for (let i = 0; i < size + 1; i++) {
        line(0, height / 5 * i, width / 5 * (5 - i), height);
    }
    for (let i = 1; i < size + 1; i++) {
        line(width / 5 * i, height, width, height / 5 * i);
    }
    for (let i = 1; i < size + 1; i++) {
        line(width, height / 5 * (5 - i), width / 5 * i, 0);
    }
}

function createPlayersAndCamps() {
    line(60, 12.5, 90, 42.5);
    line(60, 42.5, 90, 12.5);

    line(60 + 150, 12.5, 90 + 150, 42.5);
    line(60 + 150, 42.5, 90 + 150, 12.5);

    line(60 + 150 * 2, 12.5, 90 + 150 * 2, 42.5);
    line(60 + 150 * 2, 42.5, 90 + 150 * 2, 12.5);

    line(60 + 150 * 3, 12.5, 90 + 150 * 3, 42.5);
    line(60 + 150 * 3, 42.5, 90 + 150 * 3, 12.5);

    line(60 + 150 * 4, 12.5, 90 + 150 * 4, 42.5);
    line(60 + 150 * 4, 42.5, 90 + 150 * 4, 12.5);


    line(width - 60, height - 12.5, width - 90, height - 42.5);
    line(width - 60, height - 42.5, width - 90, height - 12.5);

    line(width - (60 + 150), height - 12.5, width - (90 + 150), height - 42.5);
    line(width - (60 + 150), height - 42.5, width - (90 + 150), height - 12.5);

    line(width - (60 + 150 * 2), height - 12.5, width - (90 + 150 * 2), height - 42.5);
    line(width - (60 + 150 * 2), height - 42.5, width - (90 + 150 * 2), height - 12.5);

    line(width - (60 + 150 * 3), height - 12.5, width - (90 + 150 * 3), height - 42.5);
    line(width - (60 + 150 * 3), height - 42.5, width - (90 + 150 * 3), height - 12.5);

    line(width - (60 + 150 * 4), height - 12.5, width - (90 + 150 * 4), height - 42.5);
    line(width - (60 + 150 * 4), height - 42.5, width - (90 + 150 * 4), height - 12.5);
}

function updatePlayers(positions) {
    
}

function setup() {
    createCanvas(750, 750);
    background(200);
    createBoard(5);
    createPlayersAndCamps();
}

function draw() {
    updatePlayers();
}
