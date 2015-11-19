var _ = require('lodash')
  , db
  , responses = [
    'Sounds good',
    'Thanks for coming',
    'OK',
    'Sure, why not',
    'I understand'
  ];

module.exports.init = function(database) {
  db = database;
  db.rooms = db.rooms || [];
};

module.exports.toggleRoom = function(room) {
  if (_.contains(db.rooms, room)) {
    _.remove(db.rooms, room);
    return 'Goodbye Cinco Facetime Party Snoozer!';
  }

  db.rooms.push(room);
  return 'Cinco Facetime Party Snoozer is on! Go get some rest!';
};

module.exports.respondMaybe = function(room) {
  if (!_.contains(db.rooms, room)) {
    return;
  }

  if (_.random(1, 10) === 1) {
    return _.sample(responses);
  }
};

module.exports.debug = function() {
  return JSON.stringify(db.rooms, null, 2);
};
