let beat, analyzer;

function preload() {

    beat = loadSound('beat.mp3');

}

function setup() {

    let myCanvas = createCanvas(600, 400);

    myCanvas.parent('myContainer');

    analyzer = new p5.Amplitude();

    analyzer.setInput(beat);

}

function mousePressed() {

    if (beat.isPlaying()) {

        beat.stop();

    } else {

        beat.loop();

    }

}

function draw() {

    let rms = 0;

    if (analyzer.getLevel()) {

        rms = analyzer.getLevel();

    }

    fill(127);

    stroke(0);

    ellipse(
    width / 2,
    height / 2,
    20 + rms * 400,
    20 + rms * 400
    );

}
