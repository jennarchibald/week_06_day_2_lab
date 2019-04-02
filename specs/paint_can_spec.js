const assert = require('assert')

const PaintCan = require('../paint_can.js')

describe("PaintCan", function(){

  let paintcan;

  beforeEach(function(){

    paintcan = new PaintCan(2);

  });

  it('should have a volume of paint in litres', function(){

    const actual = paintcan.volume

    assert.strictEqual(actual, 2)
  });

  it('should be able to check if it is empty', function(){

    const actual = paintcan.checkEmpty()

    assert.strictEqual(actual, false)
  });

  it('should be able to empty itself of paint', function(){

    paintcan.emptyPaint()
    const actual = paintcan.checkEmpty()
    assert.strictEqual(actual, true)

  })


});
