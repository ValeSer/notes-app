(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.getView = function() {
        let html = '<ul>';
        this.noteList.allNotes().forEach(note => {
            html += `<li>${note.getText()}</li>`;
        });
        html += '</ul>';
        return html;
    }

    exports.NoteListView = NoteListView;
})(this);