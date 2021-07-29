import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-searchbar',
 template:`<form class="d-flex">
 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
 <button class="btn btn-outline-success" type="submit">Search</button>
</form>`,
  styles: []
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
