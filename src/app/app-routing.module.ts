import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'Home', component : HomeComponent},
  {path:'Services',component:ServicesComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'project',component:ProjectComponent},
  {path:'Contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
