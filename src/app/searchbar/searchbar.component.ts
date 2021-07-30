import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cn-searchbar',
 template:`<form class="d-flex">
 <input class="form-control me-2" type="search" [placeholder]="title" aria-label="Search">
 <button class="btn btn-outline-success" type="submit">Search</button>
</form>`,
  styles: []
})
export class SearchbarComponent implements OnInit {
  @Input() title:string="Search";

  constructor() { }

  ngOnInit(): void {
  }

}
