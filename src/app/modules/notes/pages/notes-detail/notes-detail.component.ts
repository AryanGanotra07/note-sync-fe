import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NoteService } from '../../services/notes.service';
import { Note } from '../../models/note';
import { YjsService } from '../../services/yjs.service';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnDestroy {

  @ViewChild('noteTextArea') noteContent: ElementRef<HTMLTextAreaElement>;

  @Input({required: true}) note: Note;
  @Output() updateNoteEmitter = new EventEmitter<Note>();
  @Output() deleteNoteEmitter = new EventEmitter<Note>();


  protected enableEdit = false;

  protected readonly destroy$ = new Subject<void>();

  constructor(private noteService: NoteService) {
    noteService.noteUpdatedListener$
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.note = this.noteService.getNoteById(this.note.id.toString());
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
