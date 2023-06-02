import { TIC_TAC_ROUTES } from './tictac/tictac-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'tictac',children:TIC_TAC_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
