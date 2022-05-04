import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentFieldComponent } from './parent-field/parent-field.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  {path:'',component:ChildComponent},
  {path:'child',component:ChildComponent},
  {path:'parent',component:ParentFieldComponent},
  {path:'link/',component:LinkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }