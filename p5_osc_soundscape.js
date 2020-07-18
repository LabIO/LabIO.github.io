// hack this to leave a point playing and slowly disappear any time you click in the 
// canvas. To create like a star soundscape

let osc, playing, freq, amp, stroke_color;

function setup() {
  let cnv = createCanvas(1000,800);
  cnv.mousePressed(playOscillator);
  //cnv.style.position = 'static';
  //cnv.style.z-index(-1);
  // how to set the canvas in the background??
  osc = new p5.Oscillator('sine');

  choose_wave = createSelect();
  choose_wave.option('sine');
  choose_wave.option('triangle');
  choose_wave.option('sawtooth');
  choose_wave.option('square');
  
  choose_wave.changed( function() {
    
    osc.setType(choose_wave.value() );
    
  } );
}

function draw() {
   //background(10, 30, 150); // how to set the background in the background? the strokes are not visible!
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  //text('freq: ' + freq, 20, 40);
  //text('amp: ' + amp, 20, 60);
  

  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  // SHOULD IT DRAW A POINT, NO? 
  osc.start();
  playing = true;
  //stroke('yellow'); // Change the color
  if (choose_wave.value() == 'sine') {
        stroke('yellow');
        } 
    else if (choose_wave.value() == 'triangle') {
        stroke('pink');
        }
    else if (choose_wave.value() == 'sawtooth') {
        stroke('red');
        }
    else if (choose_wave.value() == 'square') {
        stroke('orange');
        } // Change the color
  strokeWeight(10);
  point(mouseX,mouseY);
}

function mouseReleased() {
  // ramp amplitude to 0 over 2 seconds
  osc.amp(0, 2);
  playing = false;
}
