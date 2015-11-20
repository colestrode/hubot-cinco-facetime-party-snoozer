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
  return _.remove(db.rooms, function(r) {
    return r === room;
  });
};

module.exports.has = has;

function has(room) {
  return _.contains(db.rooms, room);
}
