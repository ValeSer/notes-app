(function() {
    function itSavesTheText() {
        const text = 'Hello World!';
        const note = new Note(text);

        assert.isEqual('Text note', text, note.getText());
    }

    itSavesTheText();
})();