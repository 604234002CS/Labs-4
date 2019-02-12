import { BookEditPage } from './../book-edit/book-edit';
import { BookdetailPage } from './../bookdetail/bookdetail';
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

  constructor(public bookrest:BookRestProvider, public navCtrl:NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.bookrest.getbookList().subscribe(data=>{
      this.books=data.filter(book => book.category === this.category);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListtPage');
  }


  BookEdit(bookId:number) {
    this.navCtrl.push(BookEditPage,
      {bookid:bookId}
      );
  }
  

  goBack(){
    this.navCtrl.pop();
  }

  ShowDetail(bookid:number){
    this.navCtrl.push(BookdetailPage,
      {bookid:bookid}
    );

  }

}
