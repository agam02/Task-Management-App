import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NewcardComponent } from 'src/app/components/newcard/newcard.component';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent {
index=0;
  constructor(private dialog:MatDialog,private route:ActivatedRoute,public boardService:BoardService){}

  ngOnInit(){
this.index=Number(this.route.snapshot.paramMap.get('boardIndex'));
  }
  newCard(){
     this.dialog.open(NewcardComponent,{width:'500px',data:{boardIndex:this.index,editMode:false,cardIndex:-1}});
  }

  editCard(cardIndex:any){
    this.dialog.open(NewcardComponent,{width:'500px',data:{boardIndex:this.index,editMode:true,cardIndex:cardIndex}});
    
  }

  deleteCard(cardIndex:any){
    this.boardService.boards[this.index].cards.splice(cardIndex,1);
    this.boardService.updateDataToLocalStorage();
  }
}
