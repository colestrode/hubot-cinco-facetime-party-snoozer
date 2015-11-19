var _ = require('lodash')
  , db;

module.exports.init = function(brain) {
  db = brain;
  db.rooms = db.rooms || [];
};

module.exports.add = function(room) {
  if (!module.exports.contains(room)) {
    db.rooms.push(room);
  }
};

module.exports.remove = function(room) {
  _.remove(db.rooms, room);
};

module.exports.has = function(room) {
  return _.contains(db.rooms, room);
};

module.exports.debug = function() {
  return JSON.stringify(db.rooms, null, 2);
};
