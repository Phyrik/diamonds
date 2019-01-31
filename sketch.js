var initialLoad = true;
var positionsOfPlayersOnes = [[150, 40, 150, 110], [300, 40, 300, 110], [450, 40, 450, 110], [600, 40, 600, 110], [225, 115, 225, 185], [375, 115, 375, 185], [525, 115, 525, 185]];
var positionsOfPlayersZeroes = [[150, 750 - 75, 50, 50], [300, 750 - 75, 50, 50], [450, 750 - 75, 50, 50], [600, 750 - 75, 50, 50], [225, 750 - 150, 50, 50], [375, 750 - 150, 50, 50], [525, 750 - 150, 50, 50]];
var players = [];

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

function updateGame(positionsOfPlayersOnes, positionsOfPlayersZeroes) {
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

    for (let i = 0; i < positionsOfPlayersOnes.length; i++) {
        line(positionsOfPlayersOnes[i][0], positionsOfPlayersOnes[i][1], positionsOfPlayersOnes[i][2], positionsOfPlayersOnes[i][3]);
    }

    fill(200);

    for (let i = 0; i < positionsOfPlayersZeroes.length; i++) {
        ellipse(positionsOfPlayersZeroes[i][0], positionsOfPlayersZeroes[i][1], positionsOfPlayersZeroes[i][2], positionsOfPlayersZeroes[i][3]);
    }
}

function setup() {
    createCanvas(750, 750);
}

function draw() {
    background(200);
    createBoard(5);
    updateGame(positionsOfPlayersOnes, positionsOfPlayersZeroes);
    initialLoad = false;
    //updatePlayers();
}
