(function() {
    function itSavesTheNote() {
        const text = 'Hello World!';
        const noteList = new NoteList();

        noteList.addNote(text);
        const savedNotes = noteList.allNotes();
        const firstNote = savedNotes[0];

        assert.isEqual('First note', text, firstNote.getText());
    }

    function itStartsEmpty() {
        const noteList = new NoteList();
        assert.isEqual('Empty new list', 0, noteList.allNotes().length)
    }

    itSavesTheNote();
    itStartsEmpty();
})();