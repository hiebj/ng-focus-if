# ng-autofocus
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![devDependency Status][david-image]][david-url]

A simple attribute directive that will trigger focus on an element under specified conditions.

It is available through NPM:

```shell
npm install ng-autofocus
```

Or, via bower:

```shell
bower install hiebj/ng-autofocus --save
```

## Usage

Include `autofocus.min.js` in your build or directly with a `<script>` tag and require the module in your module definition:

```js
angular  
    .module('App', [  
        'autofocus',  
        ... // other dependencies  
    ]);
```

To immediately focus an element upon rendering:

```html
<input autofocus />
```

To focus an element when a specified conditional `$scope` property becomes truthy:

```html
<input autofocus="focusInput" />
```

To focus an element after a specified delay upon rendering:

```html
<input autofocus autofocus-delay="500" />
```

To focus an element after a specified delay when a specified conditional `$scope` property becomes truthy:

```html
<input autofocus="focusInput" autofocus-delay="500" />
```
[david-image]: https://david-dm.org/hiebj/ng-autofocus/dev-status.svg
[david-url]: https://david-dm.org/hiebj/ng-autofocus#info=devDependencies
[downloads-image]: http://img.shields.io/npm/dm/ng-autofocus.svg
[npm-image]: http://img.shields.io/npm/v/ng-autofocus.svg
[npm-url]: https://npmjs.org/package/ng-autofocus
