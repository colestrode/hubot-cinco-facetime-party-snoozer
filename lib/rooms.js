var _ = require('lodash')
  , db;

module.exports.init = function(brain) {
  db = brain;
  db.rooms = db.rooms || [];
};

module.exports.add = function(room) {
  if (!has(room)) {
    db.rooms.push(room);
  }
};

module.exports.remove = function(room) {
  _.remove(db.rooms, room);
};

module.exports.has = has;

module.exports.debug = function() {
  return JSON.stringify(db.rooms, null, 2);
};


function has(room) {
  return _.contains(db.rooms, room);
}
