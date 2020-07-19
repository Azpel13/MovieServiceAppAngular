import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

const routes: Routes = [
  {path:'',component: ListMovieComponent},
  {path:'createMovie',component: AddMovieComponent},
  {path:'editMovie/:id',component: AddMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
