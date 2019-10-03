(function() {
    function itReturnsAnEmptyListString() {
        const noteList = new NoteList();
        const noteListView = new NoteListView(noteList);

        assert.isEqual('Empty list', '<ul></ul>', noteListView.getView());
    }

    function itReturnsASingleElement() {
        const noteList = new NoteList();
        const text = 'Hello World!';
        noteList.addNote(text);

        const noteListView = new NoteListView(noteList);
        assert.isEqual('Single element', `<ul><li>${text}</li></ul>`, noteListView.getView());
    }

    function itReturnsADoubleElement() {
        const noteList = new NoteList();
        const text1 = 'Hello World!';
        const text2 = 'and hello you too';
        noteList.addNote(text1);
        noteList.addNote(text2);

        const noteListView = new NoteListView(noteList);
        assert.isEqual('Double element', `<ul><li>${text1}</li><li>${text2}</li></ul>`, noteListView.getView());
    }

    itReturnsAnEmptyListString();
    itReturnsASingleElement();
    itReturnsADoubleElement();
})();