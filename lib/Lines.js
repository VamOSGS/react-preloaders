(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './css/Lines.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./css/Lines.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Lines);
    global.Lines = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Lines = function (_Component) {
    _inherits(Lines, _Component);

    function Lines() {
      _classCallCheck(this, Lines);

      return _possibleConstructorReturn(this, (Lines.__proto__ || Object.getPrototypeOf(Lines)).apply(this, arguments));
    }

    _createClass(Lines, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        document.onreadystatechange = function () {
          if (document.readyState === 'complete') {
            setTimeout(function () {
              document.getElementById('preloader').classList.add('close');
            }, _this2.props.time);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { style: { backgroundColor: this.props.bgColor }, id: 'preloader' },
          _react2.default.createElement(
            'div',
            { id: 'loader' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } }),
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } }),
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } }),
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } }),
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } }),
              _react2.default.createElement('li', { style: { backgroundColor: this.props.color } })
            )
          )
        );
      }
    }]);

    return Lines;
  }(_react.Component);

  Lines.defaultProps = { time: 1600, bgColor: '#f7f7f7', color: '#2D2D2D' };

  exports.default = Lines;
});