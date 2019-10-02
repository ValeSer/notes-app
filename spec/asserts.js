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
        const el = document.createElement('div');
        el.innerText = `Success: ${text}`;
        document.getElementById('spec_success').append(el);
    }

    function addFailure(text) {
        const el = document.createElement('div');
        el.innerText = `Failed: ${text}`;
        document.getElementById('spec_errors').append(el);  
    }

    exports.assert = assert;
})(this);