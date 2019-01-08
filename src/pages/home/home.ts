import { BookListtPage } from './../book-listt/book-listt';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showBookList(categoryName:string){
    this.navCtrl.push(BookListtPage,
      {category:categoryName}
      );
  }

}
