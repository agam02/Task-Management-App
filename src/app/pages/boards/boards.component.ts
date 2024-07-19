import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardComponent } from 'src/app/components/new-board/new-board.component';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {

  constructor(private matDialog:MatDialog,public boardService:BoardService){}

  openNewBoard(){
    const matRef = this.matDialog.open(NewBoardComponent,{
      width:'500px'
    })
  }
}
