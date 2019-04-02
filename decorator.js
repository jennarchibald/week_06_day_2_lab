const Decorator = function(){
  this.paintStock = [];
};

Decorator.prototype.addCan = function(can){
  this.paintStock.push(can);
};

Decorator.prototype.totalPaintVolume = function(){
  let total = 0;
  for (can of this.paintStock){
    total += can.volume;
  };
  return total;
};

Decorator.prototype.enoughPaint = function(room){
  let paintvolume = this.totalPaintVolume();
    if (paintvolume >= room.area){
      return true
    } else {
      return false
    };
};

Decorator.prototype.paintRoom = function(room){
  if (this.enoughPaint(room)){
    room.paintRoom();
  }
};
module.exports = Decorator;
