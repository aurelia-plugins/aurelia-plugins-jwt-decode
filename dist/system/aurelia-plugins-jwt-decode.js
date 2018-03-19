'use strict';

System.register(['jwt-decode'], function (_export, _context) {
  "use strict";

  var jwt_decode, JwtDecode;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_jwtDecode) {
      jwt_decode = _jwtDecode.default;
    }],
    execute: function () {
      _export('JwtDecode', JwtDecode = function () {
        function JwtDecode() {
          _classCallCheck(this, JwtDecode);
        }

        JwtDecode.decode = function decode(token) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { header: true };

          return jwt_decode(token, options);
        };

        return JwtDecode;
      }());

      _export('JwtDecode', JwtDecode);
    }
  };
});