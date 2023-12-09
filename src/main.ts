// import type {p5Type} from "p5"
import * as P5 from "p5";
import { Color } from "./Color";
import { randomValueIn } from "./utils";

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const getCurrentURLInformation = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return {
    width: parseInt(urlParams.get("w") || "") || CANVAS_WIDTH,
    height: parseInt(urlParams.get("h") || "") || CANVAS_HEIGHT
  };
};
const { width, height } = getCurrentURLInformation()

const NUMBER_OF_SQUARE = 30;
const MARGIN_SPACE = 0;

const SIZE = width / NUMBER_OF_SQUARE;

const colors: Color[] = [
  new Color("#FFFFFF"),
  new Color("#00000")
];

let squares: any[] = [];
for (let y = 0; y < NUMBER_OF_SQUARE; y++) {
  for (let x = 0; x < NUMBER_OF_SQUARE; x++) {
    squares.push({
      x: (x * (SIZE - MARGIN_SPACE) + (x * MARGIN_SPACE)),
      y: (y * (SIZE - MARGIN_SPACE) + (y * MARGIN_SPACE)),
      size: SIZE - MARGIN_SPACE,
      color: randomValueIn(colors)
    });
  };
};

const backgroundColor = new Color("#FFFFFF");
const squareStrokeColor = new Color("#00000");

const makeSetup = (p5: P5) => () => {
  p5.createCanvas(width, height)
  p5.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
};

const makeDraw = (p5: P5) => () => {
  p5.frameRate(60);
  p5.background(backgroundColor.r, backgroundColor.g, backgroundColor.b);
  const frameCount = p5.frameCount / 80;


  squares.forEach((square) => {

    p5.square(
      square.x,
      square.y,
      p5.abs(
        square.size * p5.sin(frameCount - (square.x / 1000))
      )
    );
    p5.fill(
      square.color.r,
      square.color.g,
      square.color.b,
    );
    p5.stroke(
      squareStrokeColor.r,
      squareStrokeColor.g,
      squareStrokeColor.b,
      80
    );
  });
}

export const p5js = new P5(
  (p5: P5) => {
    p5.setup = makeSetup(p5);
    p5.draw = makeDraw(p5);
  }, document.body);