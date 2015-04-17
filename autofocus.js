(function() {
    'use strict';
    angular
        .module('autofocus', [])
        .directive('autofocus', Autofocus);

    function Autofocus($timeout) {
        function link($scope, $element, $attrs) {
            var dom = $element[0];

            if ($attrs.autofocus) {
                $scope.$watch($attrs.autofocus, focusIf);
            } else {
                focusIf(true);
            }

            function focusIf(condition) {
                if (condition) {
                    $timeout(function() {
                        dom.focus();
                    }, $scope.$eval($attrs.autofocusDelay) || 0);
                }
            }
        }

        return {
            restrict: 'A',
            link: link
        };
    }
})();
