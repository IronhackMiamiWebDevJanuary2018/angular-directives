import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// New
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    MySignupFormComponent,
    QuoteItemComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,

    // New
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
