// IMPORTS
import jwt_decode from 'jwt-decode';


// PUBLIC CLASS
export class JwtDecode {
  // PUBLIC STATIC METHODS
  static decode(token, options = { header: false }) {
    return jwt_decode(token, options)
  }
}