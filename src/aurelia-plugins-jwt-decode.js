// PUBLIC CLASS
export class JwtDecode {

  // PUBLIC STATIC METHODS
  static decode(token, options = { header: true }) {
    const position = options.header ? 1 : 0;
    try {
      return JSON.parse(atob(token.split('.')[position]));
    }
    catch (e) {
      return null;
    }
  }
}