var db
  , min = 1
  , max = 10;

module.exports.min = min;
module.exports.max = max;

module.exports.init = function(brain) {
  db = brain;
  db.volume = 3;
};

module.exports.value = function() {
  return db.volume;
};

module.exports.louder = function() {
  db.volume++;
  if (db.volume > max) {
    db.volume = max;
  }
};

module.exports.loudest = function() {
  db.volume = 10;
};

module.exports.quieter = function() {
  db.volume--;
  if (db.volume < min) {
    db.volume = min;
  }
};

module.exports.quietest = function() {
  db.volume = 1;
};
