import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';


const routes: Routes = [
  {
    path: "",
    component: FullLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        component: HomeComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
