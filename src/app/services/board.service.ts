import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

   board={
    title:'',
    cards:[{title:'',checkList:['task1','task2'],status:[true,false]}]
   }

   boards:Array<any>=[];

  constructor() {
    let data=localStorage.getItem('boards');
    if(data !== null){
      this.boards=JSON.parse(data);
    }
  }

  createBoard(title:string){
    let neeBoardObj={
      title:title,
      cards:[]
    };

    this.boards.push(neeBoardObj);
    localStorage.setItem('boards',JSON.stringify(this.boards));
  }

updateDataToLocalStorage(){
  localStorage.setItem('boards',JSON.stringify(this.boards))
}

}
