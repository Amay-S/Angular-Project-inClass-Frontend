import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit  {
  bid : string='';
  bname : string='';
  price : string='';
  constructor() {}

  ngOnInit(): void {
  }
  onClickSubmit(book : any)
  {
    this.bid = book.bid;
    this.bname = book.bname;
    this.price = book.price;
  }
}
