const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe("Decorator", function(){

  let decorator;
  let paintcan;
  let emulsion;
  let room;

  beforeEach(function(){
    decorator = new Decorator();
    paintcan = new PaintCan(2);
    emulsion = new PaintCan(10);
    room = new Room(8);
  });

  it("should start with an empty paint stock", function(){
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a can of paint to paint stock", function(){
    decorator.addCan(paintcan);
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [paintcan]);
  });

  it("should be able to calculate total volume of paint in stock", function(){
    decorator.addCan(paintcan);
    decorator.addCan(emulsion);
    const actual = decorator.totalPaintVolume();
    assert.strictEqual(actual, 12);
  });

  it("falsey - should be able to calculate whether it has enough paint to paint a room", function(){
    const actual = decorator.enoughPaint(room);
    assert.strictEqual(actual, false);
  });

  it("truesy - should be able to calculate whether it has enough paint to paint a room", function(){
    decorator.addCan(emulsion);
    const actual = decorator.enoughPaint(room);
    assert.strictEqual(actual, true);
  });

  it('should be able to paint a room if it has enough paint in stock', function(){
    decorator.addCan(emulsion);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  });


});
