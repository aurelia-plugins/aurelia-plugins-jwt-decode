# aurelia-plugins-jwt-decode

A JWT Decode plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-jwt-decode --save
```

When using Aurelia CLI add the following dependency to `aurelia.json`:

```json
{
  "name": "aurelia-plugins-jwt-decode",
  "path": "../node_modules/aurelia-plugins-jwt-decode/dist/amd",
  "main": "aurelia-plugins-jwt-decode"
}
```

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

A `boolean` indicating if the header part of the JWT is present. By default the header option is `true`.

This example uses the default option because the token contains besides the payload also the header and the signature.

```javascript
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

JwtDecode.decode(token);
```

The following example has a token which only contains a payload. Use the option `header: false` to decode the token.

```javascript
const token = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9';

JwtDecode.decode(token, { header: false });
```