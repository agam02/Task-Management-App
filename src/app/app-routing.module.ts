import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './pages/boards/boards.component';
import { ViewBoardComponent } from './pages/view-board/view-board.component';

const routes: Routes = [{
  path:'boards',component:BoardsComponent
},{
  path:'',redirectTo:'boards',pathMatch:'full'
},{
  path:'viewboard/:boardIndex',component:ViewBoardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
