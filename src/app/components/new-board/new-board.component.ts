import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent {
title:string='';
  constructor(private dialogRef:MatDialogRef<NewBoardComponent>,public boardService:BoardService,private route:Router){}

  close(){
    this.dialogRef.close()
  }

  create(){
      this.boardService.createBoard(this.title);
      this.route.navigate(['/viewboard',this.boardService.boards.length-1]);
    this.dialogRef.close()

  }
}
