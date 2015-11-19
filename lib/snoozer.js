var _ = require('lodash')
  , db
  , responses = [
    'Sounds good',
    'Thanks for coming',
    'OK',
    'Sure, why not',
    'I understand'
  ];

module.exports.init = function(db) {
  db.rooms = db.rooms || [];
};

module.exports.toggleRoom = function(room) {
  if (_.contains(db.rooms, room)) {
    _.remove(db.rooms, room);
  } else {
    db.rooms.push(room);
  }
};

module.exports.respondMaybe = function(room) {
  if (!_.contains(db.rooms, room)) {
    return;
  }

  if (_.random(1, 100) === 1) {
    return _.sample(responses);
  }
};

module.exports.debug = function() {
  return JSON.stringify(db.rooms, null, 2);
};
