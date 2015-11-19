var snoozer = require('./lib/snoozer');

module.exports = function(robot) {
  robot.brain.on('loaded', function() {
    robot.brain.snoozer = robot.brain.snoozer || {};
    snoozer.init(robot.brain.snoozer);
  });

  robot.respond(/cinco (facetime)? (party)? snoozer/i, function(msg) {
    var room = msg.message.room;
    snoozer.toggleRoom(room);
  });

  robot.respond(/.*/i, function(msg) {
    var room = msg.message.room
      , response = snoozer.respondMaybe(room);

    if (response) {
      msg.send(response);
    }
  });
};
