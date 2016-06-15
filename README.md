# ng-focus-if
[![Bower version][bower-image]][github-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![devDependency Status][david-image]][david-url]
[![GitHub stars][stars-image]][github-url]

An attribute directive that will trigger focus on an element under specified conditions. It can also be used as a cross-browser replacement for the `autofocus` attribute.

View a live demo on [Plnkr][plnkr-url].

It is available through NPM:

```text
npm install ng-focus-if
```

Or, via bower:

```text
bower install ng-focus-if --save
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

To immediately focus an element upon rendering (similar to [input][mdn-input-url] `autofocus`):

```html
<input focus-if />
```

To focus an element when a specified Angular [expression][expression-url] becomes truthy:

```html
<input focus-if="focusInput" />
```

To focus an element after a specified delay upon rendering:

```html
<input focus-if focus-delay="500" />
```

To focus an element after a specified delay when a specified Angular expression becomes truthy:

```html
<input focus-if="focusInput" focus-delay="500" />
```

**Caveat: reapply focus**

Like any other Angular directive using a `$watch` callback, this directive's ability to reapply focus is limited by Angular's change detection. Users looking to apply focus to a given element more than once may find [this thread][change-detection-url] useful.

[bower-image]: https://img.shields.io/bower/v/ng-focus-if.svg
[github-url]: https://github.com/hiebj/ng-focus-if/stargazers
[npm-image]: http://img.shields.io/npm/v/ng-focus-if.svg
[npm-url]: https://npmjs.org/package/ng-focus-if
[downloads-image]: http://img.shields.io/npm/dm/ng-focus-if.svg
[david-image]: https://david-dm.org/hiebj/ng-focus-if/dev-status.svg
[david-url]: https://david-dm.org/hiebj/ng-focus-if#info=devDependencies
[stars-image]: https://img.shields.io/github/stars/hiebj/ng-focus-if.svg?style=social
[plnkr-url]: http://plnkr.co/edit/MJS3zRk079Mu72o5A9l6?p=preview
[mdn-input-url]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input 
[expression-url]: https://docs.angularjs.org/guide/expression
[change-detection-url]: https://github.com/hiebj/ng-focus-if/issues/22#issuecomment-226221602
