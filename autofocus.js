(function() {
    'use strict';
    angular
        .module('autofocus', [])
        .directive('autofocus', Autofocus);

    function Autofocus($timeout) {
        function link($scope, $element, $attrs) {
            var dom = $element[0],
                delay = $attrs.autofocusDelay;

            if ($attrs.autofocus) {
                focusIf($scope[$attrs.autofocus]);
                $scope.$watch($attrs.autofocus, focusIf);
            } else {
                focusIf(true);
            }

            function focusIf(condition) {
                delay = delay || 0;
                if (condition) {
                    $timeout(function() {
                        dom.focus();
                    }, delay);
                }
            }
        }

        return {
            restrict: 'A',
            link: link
        };
    }
})();
