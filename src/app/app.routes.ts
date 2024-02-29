import { Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {InspectorComponent} from "./components/inspector/inspector.component";


export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'inspector', component: InspectorComponent },
  // TODO
  // { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];
