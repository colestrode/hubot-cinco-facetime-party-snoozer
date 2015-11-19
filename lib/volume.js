var db
  , min = 1
  , max = 10
  , defaultVal = 3;

module.exports.min = min;
module.exports.max = max;

module.exports.init = function(brain) {
  db = brain;
  db.volume = db.volume || {};
};

module.exports.value = function(room) {
  if (has(room)) {
    setDefaultIfNeeded(room);
    return db.volume[room];
  } else {
    return min - 1;
  }
};

module.exports.louder = function(room) {
  setDefaultIfNeeded(room);
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

function setDefaultIfNeeded(room) {
  if (!db.volume[room]) {
    db.volume[room] = defaultVal;
  }
}
