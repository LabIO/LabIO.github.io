// hack this to leave a point playing and slowly disappear any time you click in the 
// canvas. To create like a star soundscape

let osc, playing, freq, amp, stroke_color, som, mouseX_, mouseY_, ctx;

function setup() {
  //let cnv = createCanvas(window.innerWidth,window.innerHeight);
  let cnv = createCanvas(window.innerWidth,window.innerHeight);
  cnv.mousePressed(playOscillator);
  //cnv.style.position = 'static';
  //cnv.style.z-index(-1);
  // how to set the canvas in the background??
  osc = new p5.Oscillator('sine');
  ctx = cnv.getContext("2d");
  mouseY_ = window.innerHeight / 2;
  mouseY_ = window.innerWidth / 2;

}

function draw() {

   //background(10, 30, 150); // how to put the background in the background? the strokes are not visible!
  // that is done in .css
  freq =  864 + (Math.random() * 1969) ;
  amp = 0.3 + (Math.random() * 0.3);

  //text('freq: ' + freq, 20, 40);
  //text('amp: ' + amp, 20, 60);
  

  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator with a sound based on the random number 
  som = Math.floor( Math.random() * 4 );
  if (som == 0) osc.setType( 'sine'  );
  if (som == 1) osc.setType( 'triangle'  );
  if (som == 2) osc.setType( 'sawtooth'  );
  if (som == 3) osc.setType( 'square'  );
  
  osc.start();
  playing = true;
  //Change the color of the stroke on another random number

  stroke_color = Math.floor( Math.random() * 12 );

  if (stroke_color == 0) stroke('aqua');
  if (stroke_color == 1) stroke('BlueViolet');
  if (stroke_color == 2) stroke('Crimson');
  if (stroke_color == 3) stroke('DarkGoldenRod');
  if (stroke_color == 4) stroke('LimeGreen');
  if (stroke_color == 5) stroke('Indigo');
  if (stroke_color == 6) stroke('HotPink');
  if (stroke_color == 7) stroke('OrangeRed');
  if (stroke_color == 8) stroke('Red');
  if (stroke_color == 9) stroke('Yellow');
  if (stroke_color == 10) stroke('Olive');
  if (stroke_color == 11) stroke('Ivory');

  strokeWeight(10);
  point(mouseX,mouseY);
  ctx.moveTo(mouseX_, mouseY_);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
  mouseX_ = mouseX;
  mouseY_ = mouseY;

}

function mouseReleased() {
  // ramp amplitude to 0 over 2 seconds
  osc.amp(0, 3);
  playing = false;
}
