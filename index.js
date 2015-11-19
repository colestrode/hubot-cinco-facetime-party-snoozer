var snoozer = require('./lib/snoozer')
  , volume = require('./lib/volume')
  , rooms = require('./lib/rooms')
  , responses = require('./lib/responses')
  , helptext = require('./lib/helptext');

module.exports = function(robot) {
  robot.brain.on('loaded', function() {
    robot.brain.snoozer = robot.brain.snoozer || {};
    snoozer.init(robot.brain.snoozer);
  });

  robot.respond(/cinco help/, helptext);

  robot.respond(/cinco (facetime )?(party )?snoozer/i, function(msg) {
    var room = msg.message.room;

    if(rooms.has(room)) {
      rooms.remove(room);
      msg.send('Cinco Facetime Party Snoozer is powered off! You\'ll have to make your own conversation now');
    } else {
      rooms.add(room);
      msg.send('Cinco Facetime Party Snoozer is on! Now get to talking about whatever boring thing you want!');
    }
  });

  robot.respond(/cinco status/i, function(msg) {
    var room = msg.message.room;
    if(rooms.has(room)) {
      msg.send('Cinco Facetime Party Snoozer is on and ready to talk!');
    } else {
      msg.send('Cinco Facetime Party Snoozer is off, maybe you should turn it on so this place feels lively!');
    }
  });

  robot.respond(/cinco louder/i, volume.louder.bind(volume));
  robot.respond(/cinco loudest/i, volume.loudest.bind(volume));
  robot.respond(/cinco quieter/i, volume.quieter.bind(volume));
  robot.respond(/cinco quietest/i, volume.quietest.bind(volume));


  // the magic
  robot.hear(/.*/i, function(msg) {
    var room = msg.message.room;

    if (rooms.has(room) && _.random(volume.min, volume.max) <= volume.value()) {
      msg.send(responses.random());
    }
  });

  robot.respond(/cinco debug/i, function(msg) {
    msg.send(JSON.stringify(robot.brain.snooze, null, 2));
  });
};
