var snoozer = require('./lib/snoozer');

module.exports = function(robot) {
  robot.brain.on('loaded', function() {
    robot.brain.snoozer = robot.brain.snoozer || {};
    snoozer.init(robot.brain.snoozer);
  });

  robot.respond(/cinco (facetime)? (party)? snoozer/i, function(msg) {
    var room = msg.message.room;

    msg.send(snoozer.toggleRoom(room));
  });

  robot.hear(/.*/i, function(msg) {
    var room = msg.message.room
      , response = snoozer.respondMaybe(room);

    if (response) {
      msg.send(response);
    }
  });

  robot.respond(/cinco debug/i, function(msg) {
    msg.send(snoozer.debug());
  });
};
