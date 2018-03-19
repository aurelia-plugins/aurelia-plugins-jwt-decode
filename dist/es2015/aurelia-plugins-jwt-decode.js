
import jwt_decode from 'jwt-decode';

export let JwtDecode = class JwtDecode {
  static decode(token, options = { header: false }) {
    return jwt_decode(token, options);
  }
};