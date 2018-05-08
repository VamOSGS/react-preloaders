(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Circle", "./Zoom", "./Dots", "./Lines", "./Circle2", "./Cube"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Circle"), require("./Zoom"), require("./Dots"), require("./Lines"), require("./Circle2"), require("./Cube"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Circle, global.Zoom, global.Dots, global.Lines, global.Circle2, global.Cube);
    global.index = mod.exports;
  }
})(this, function (exports, _Circle, _Zoom, _Dots, _Lines, _Circle3, _Cube) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Cube = exports.Circle2 = exports.Lines = exports.Dots = exports.Zoom = exports.Circle = undefined;

  var _Circle2 = _interopRequireDefault(_Circle);

  var _Zoom2 = _interopRequireDefault(_Zoom);

  var _Dots2 = _interopRequireDefault(_Dots);

  var _Lines2 = _interopRequireDefault(_Lines);

  var _Circle4 = _interopRequireDefault(_Circle3);

  var _Cube2 = _interopRequireDefault(_Cube);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Circle = _Circle2.default;
  exports.Zoom = _Zoom2.default;
  exports.Dots = _Dots2.default;
  exports.Lines = _Lines2.default;
  exports.Circle2 = _Circle4.default;
  exports.Cube = _Cube2.default;
});