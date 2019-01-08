import { Book } from './../../models/book.model';
import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-book-listt',
  templateUrl: 'book-listt.html',
})
export class BookListtPage {

  books:Book;
  category:string

  constructor(public bookrest:BookRestProvider, public NavController:NavController, public NavParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.NavParams.get("category");
    this.bookrest.getbookList().subscribe(data=>{
      this.books=data.filter(book => book.category == this.category);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListtPage');
  }

}
