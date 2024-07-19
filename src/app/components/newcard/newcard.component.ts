import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss']
})
export class NewcardComponent {
title:string='';
tasks:Array<string>=[''];
tasksLoop:any=[false];
  constructor(private dialog:MatDialogRef<NewcardComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,public boardService:BoardService
  ){}

  ngOnInit(){
    console.log("edit",this.data.editMode);
    if(this.data.editMode===true){
      this.title=this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasksLoop= this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
      this.tasks=this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checkList;
      
    }
  }

  close(){
    this.dialog.close();
  }

  createTask(){
    this.tasksLoop.push(false);
    this.tasks.push('');
  }
  deleteTask(i:any){
    this.tasks.splice(i,1);
    this.tasksLoop.splice(i,1);
  }
  create() {
    if(this.data.editMode===false){
    this.boardService.boards[this.data.boardIndex].cards.push({
      title: this.title,
      checkList: this.tasks,
      status: this.tasksLoop
    })
  }
    else{
      this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title=this.title;
       this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status=this.tasksLoop;
      this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checkList=this.tasks;
    }
    this.boardService.updateDataToLocalStorage();
    this.close();
  }
}
