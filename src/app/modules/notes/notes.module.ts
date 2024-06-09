import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NotesDetailComponent } from './pages/notes-detail/notes-detail.component';
import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NoteService } from './services/notes.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NotesDetailComponent,
    NotesComponent, 
    NotesListComponent, 
    ToolbarComponent
  ],
  imports: [
    CommonModule, 
    NotesRoutingModule, 
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule, 
    TextFieldModule,
    FormsModule, 
    MatToolbarModule,
    ReactiveFormsModule
  ], 
  providers: [NoteService]
})
export class NotesModule { }
