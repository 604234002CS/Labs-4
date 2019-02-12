import { BookEditPage } from './../pages/book-edit/book-edit';
import { BookdetailPage } from './../pages/bookdetail/bookdetail';
import { BookListtPage } from './../pages/book-listt/book-listt';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookRestProvider } from '../providers/book-rest/book-rest';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListtPage,
    BookdetailPage,
    BookEditPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListtPage,
    BookdetailPage,
    BookEditPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookRestProvider
  ]
})
export class AppModule {}
