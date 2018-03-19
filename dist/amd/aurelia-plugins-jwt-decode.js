define(['exports', 'jwt-decode'], function (exports, _jwtDecode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.JwtDecode = undefined;

  var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

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

  var JwtDecode = exports.JwtDecode = function () {
    function JwtDecode() {
      _classCallCheck(this, JwtDecode);
    }

    JwtDecode.decode = function decode(token) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { header: false };

      return (0, _jwtDecode2.default)(token, options);
    };

    return JwtDecode;
  }();
});