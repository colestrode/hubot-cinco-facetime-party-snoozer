var db
  , min = 1
  , max = 10
  , defaultVal = 7;

module.exports.min = min;
module.exports.max = max;

module.exports.init = function(brain) {
  db = brain;
  db.volume = db.volume || {};
};

module.exports.value = function(room) {
  return db.volume[room] || (min - 1);
};

module.exports.louder = function(room) {
  db.volume[room]++;
  if (db.volume[room] > max) {
    db.volume[room] = max;
  }
};

module.exports.loudest = function(room) {
  db.volume[room] = 10;
};

module.exports.quieter = function(room) {
  db.volume[room]--;
  if (db.volume[room] < min) {
    db.volume[room] = min;
  }
};

module.exports.quietest = function(room) {
  db.volume[room] = 1;
};

module.exports.setToDefault = function(room) {
  db.volume[room] = defaultVal;
};
