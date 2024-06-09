import { NgModule } from "@angular/core";
import { Route,  RouterModule } from "@angular/router";
import { NotesComponent } from "./notes.component";
import { NotesListComponent } from "./pages/notes-list/notes-list.component";


const ROUTES: Route[] = [
    {
      path: '', 
      component: NotesComponent,
      children: [
        {
          path: '', 
          component: NotesListComponent, 
        }
      ]
    }
  ];


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ], 
    exports: [RouterModule]
})
export class NotesRoutingModule {
    
}