(function(exports) {
    const assert = {
        isTrue: function (text, assertion) {
            if (!assertion) {
                addFailure(text + ' was false');
            } else {
                addSuccess(text);
            }
        },
        isEqual: function(text, expected, actual) {
            if (expected !== actual) {
                addFailure(`${text} Expected: "${expected}" Actual: "${actual}"`); 
            } else {
                addSuccess(text);
            }
        }
    };

    function addSuccess(text) {
        document.getElementById('spec_success').append(
            `Success: ${text}`
        );
    }

    function addFailure(text) {
        document.getElementById('spec_errors').append(
            `Failed: ${text}`
        );  
    }

    exports.assert = assert;
})(this);