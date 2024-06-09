import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";


const APP_ROUTES: Route[] = [{
    path: '', 
    component: AppComponent, 
    children: [
      {
        path: '', 
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes', 
        loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule)
      }
    ]

  }] 

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}