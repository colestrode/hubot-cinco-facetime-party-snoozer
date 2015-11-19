var _ = require('lodash')
  , responses = [
    'Sounds good',
    'Thanks for coming',
    'OK',
    'Sure, why not',
    'I understand'
  ];

module.exports.random = function() {
  return _.sample(responses);
};

