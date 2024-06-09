import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/notes.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'], 
})
export class NotesListComponent implements OnDestroy {

  protected isDrawerOpen = true;
  protected selectedNote: Note = null;


  protected readonly destroy$ = new Subject<void>();


  constructor(private noteService: NoteService, private cdRef: ChangeDetectorRef) {
    noteService.noteAddedListener$.pipe(takeUntil(this.destroy$)).subscribe((note) => this.selectNote(note));
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  public get notes(): Note[] {
    return this.noteService.getNotes();
  }


  protected trackNote(index: number, note: Note) {
    return note.id;
  };

  protected updateNote(note: Note) {
    this.noteService.updateNote(note);
  }

  protected selectNote(note: Note) {
    this.selectedNote = note;
    this.cdRef.detectChanges();
  }

  protected deleteNote(note: Note) {
    this.noteService.deleteNote(note.id);
    if (this.notes.length) {
      this.selectedNote = this.notes[0];
    } else {
      this.selectedNote = null;
    }
  }



}
