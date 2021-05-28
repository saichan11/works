import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public myResponse;
  constructor() { }

  ngOnInit() {
    /*parsing data from localstorage*/
    this.myResponse = JSON.parse(localStorage.getItem('fav'));
    console.log(this.myResponse)
    return this.myResponse;
  }
}
