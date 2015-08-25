(function() {
    'use strict';
    angular
        .module('focus-if', [])
        .directive('focusIf', focusIf);

    function focusIf($timeout) {
        function link($scope, $element, $attrs) {
            var dom = $element[0];
            if ($attrs.focusIf) {
                $scope.$watch($attrs.focusIf, focus);
            } else {
                focus(true);
            }
            function focus(condition) {
                if (condition) {
                    $timeout(function() {
                        dom.focus();
                        if ($attrs.focusCaretIndex && (typeof dom.value === 'string')) {
                            var index = Math.min(parseInt($attrs.focusCaretIndex), dom.value.length);
                            dom.setSelectionRange(index, index);
                        }
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
