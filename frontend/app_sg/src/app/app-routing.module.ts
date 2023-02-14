import { JobsComponent } from './modules/jobs/components/jobs/jobs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/jobs",
    pathMatch: "full",
  },
  {
    path: "jobs",
    component: JobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
