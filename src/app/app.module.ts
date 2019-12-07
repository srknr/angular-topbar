import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {path: "", component: ListComponent}
    ])
     ],
  declarations: [ AppComponent, ListComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
