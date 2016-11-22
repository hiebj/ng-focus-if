(function() {
    'use strict';
    angular
        .module('focus-if', [])
        .directive('focusIf', focusIf);

    focusIf.$inject = ['$timeout'];

    function focusIf($timeout) {
        function link($scope, $element, $attrs) {
            var dom = $element;
            if ($attrs.focusIf) {
                $scope.$watch($attrs.focusIf, focus);
            } else {
                focus(true);
            }
            function focus(condition) {
                if (condition) {
                    $timeout(function() {
                        var currVal = dom.val();
                        dom.focus().val('').val(currVal);
                    }, $scope.$eval($attrs.focusDelay) || 0);
                }
            }
        }
        return {
            restrict: 'A',
            link: link
        };
    }
})();
