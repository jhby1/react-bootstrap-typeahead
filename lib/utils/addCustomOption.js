'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

function addCustomOption(results, props) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey,
      text = props.text;


  if (!allowNew || !text.trim()) {
    return false;
  }

  // If the consumer has provided a callback, use that to determine whether or
  // not to add the custom option.
  if (typeof allowNew === 'function') {
    return allowNew(results, props);
  }

  // By default, don't add the custom option if there is an exact text match
  // with an existing option.
  return !results.some(function (o) {
    return (0, _index.getOptionLabel)(o, labelKey) === text;
  });
}

exports.default = addCustomOption;