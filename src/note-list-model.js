(function(exports) {
    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.addNote = function(text) {
        this.notes.push(new Note(text));
    }   

    NoteList.prototype.allNotes = function() {
        return this.notes;
    }

    exports.NoteList = NoteList;
})(this);