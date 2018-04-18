# aurelia-plugins-jwt-decode

A JWT Decode plugin for Aurelia.

**This plugin uses [jwt-decode](https://github.com/auth0/jwt-decode) from Auth0 under the hood.**

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-jwt-decode --save
```

When using Aurelia CLI add the following dependency to `aurelia.json` as described in the [documentation](http://aurelia.io/docs/build-systems/aurelia-cli#adding-client-libraries-to-your-project):

```json
{
  "name": "aurelia-plugins-jwt-decode",
  "path": "../node_modules/aurelia-plugins-jwt-decode/dist/amd",
  "main": "aurelia-plugins-jwt-decode"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

For projects using Webpack, please add `babel-polyfill` to your `webpack.config.js` as documented by [babeljs.io](https://babeljs.io/docs/usage/polyfill/#usage-in-node--browserify--webpack).

**JSPM**

```shell
jspm install aurelia-plugins-jwt-decode
```

**Bower**

```shell
bower install aurelia-plugins-jwt-decode
```

## Configuration

It is not necessary to load the plugin inside of the configure method of your `main.js` or `main.ts`, because this plugin doesn't use any dependencies of Aurelia. The only thing you need to be sure of, is that the library is loaded in your project.

## Usage

The plugin is used as a class with static methods. No dependency injection is necessary. Just import it in your own class.

The following method is provided:

```javascript
import {JwtDecode} from 'aurelia-plugins-jwt-decode';

export class App {
  // Returns the deserialized value (object) of the given token
  JwtDecode.decode(token, [options]);
}
```

## Options

### Header

A `boolean` indicating if the header part of the JWT is not present. By default the header option is `false`, and present.

This example uses the default option because the token contains besides the payload also the header and the signature.

```javascript
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

JwtDecode.decode(token);
```

The following example has a token which only contains a payload. Use the option `header: true` to decode the token which has no header.

```javascript
const token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';

JwtDecode.decode(token, { header: true });
```