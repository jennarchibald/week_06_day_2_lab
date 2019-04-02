const Room = require('../room.js');
const assert = require('assert');

describe('Room', function(){

  let room;

  beforeEach(function(){

    room = new Room(20)

  });

  it("should have an area in square meters", function(){

    const actual = room.area;

    assert.strictEqual(actual, 20);

  });

  it('should start not painted', function(){

    const actual = room.painted

    assert.strictEqual(actual, false)
  });


  it('should be able to be painted', function(){

    room.paintRoom()
    const actual = room.painted

    assert.strictEqual(actual, true)
  });

});
