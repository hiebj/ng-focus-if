# ng-focus-if
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![devDependency Status][david-image]][david-url]

A simple attribute directive that will trigger focus on an element under specified conditions. It can also be used as a cross-browser replacement for the `autofocus` attribute.

It is available through NPM:

```shell
npm install ng-focus-if
```

Or, via bower:

```shell
bower install hiebj/ng-focus-if --save
```

## Usage

Include `focusIf.min.js` in your build or directly with a `<script>` tag and require the module in your module definition:

```js
angular  
    .module('App', [  
        'focus-if',  
        ... // other dependencies  
    ]);
```

To immediately focus an element upon rendering (similar to `autofocus`):

```html
<input focus-if />
```

To focus an element when a specified conditional `$scope` property becomes truthy:

```html
<input focus-if="focusInput" />
```

To focus an element after a specified delay upon rendering:

```html
<input focus-if focus-delay="500" />
```

To focus an element after a specified delay when a specified conditional `$scope` property becomes truthy:

```html
<input focus-if="focusInput" focus-delay="500" />
```
[david-image]: https://david-dm.org/hiebj/ng-focus-if/dev-status.svg
[david-url]: https://david-dm.org/hiebj/ng-focus-if#info=devDependencies
[downloads-image]: http://img.shields.io/npm/dm/ng-focus-if.svg
[npm-image]: http://img.shields.io/npm/v/ng-focus-if.svg
[npm-url]: https://npmjs.org/package/ng-focus-if
