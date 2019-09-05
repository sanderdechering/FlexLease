"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPooledMoment;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var momentPool = new Map();

function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, (0, _moment["default"])(dayString));
  }

  return momentPool.get(dayString);
}