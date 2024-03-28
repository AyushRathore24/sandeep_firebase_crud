import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredText:string=''
  @Output()
  onenteringText:EventEmitter<string> = new EventEmitter<string>()
  textChanged(){
    this.onenteringText.emit(this.enteredText);
  }

}
