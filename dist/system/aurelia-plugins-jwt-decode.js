'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var JwtDecode;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('JwtDecode', JwtDecode = function () {
        function JwtDecode() {
          _classCallCheck(this, JwtDecode);
        }

        JwtDecode.decode = function decode(token) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { header: true };

          var position = options.header ? 1 : 0;
          try {
            return JSON.parse(atob(token.split('.')[position]));
          } catch (e) {
            return null;
          }
        };

        return JwtDecode;
      }());

      _export('JwtDecode', JwtDecode);
    }
  };
});