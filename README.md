# ng-autofocus

A simple attribute directive that will trigger focus on an element under specified conditions.

## Usage

To immediately focus an element upon rendering:
```html
<input autofocus />
```
To focus an element when a specified conditional `$scope` property becomes truthy:
```html
<input autofocus="$scope.focusInput" />  
<!-- controllerAs -->  
<input autofocus="focusInput" />
```
To focus an element after a specified delay upon rendering:
```
<input autofocus autofocus-delay="500" />
```
To focus an element after a specified delay when a specified conditional `$scope` property becomes truthy:
```
<input autofocus="$scope.focusInput" autofocus-delay="500" />  
<!-- controllerAs -->  
<input autofocus="focusInput" autofocus-delay="500" />
```

