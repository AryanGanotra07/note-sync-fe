import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NoteService } from '../../services/notes.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'], 
})
export class ToolbarComponent {


  constructor(private noteService: NoteService) {

  }


  protected createNewNote() {
    this.noteService.createNewNote();
  }


}
