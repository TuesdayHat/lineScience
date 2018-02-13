import {Line} from './../src/Line.js';
import * as sinon from 'sinon';
const assert = require("assert");


describe('Line', function(){
  var clock;
  let game = new Line(10, 1);

  beforeEach(function(){
    clock = sinon.useFakeTimers();
  });
  afterEach(function(){
    clock.restore();
  });

  it('should have a size and speed when it is created', function(){
    assert(game.display.length === 10 && game.speed === 1000)
  });
});
