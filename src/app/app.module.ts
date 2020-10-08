import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableComponent} from './table/table.component';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
      TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      MatTableModule,
      MatCheckboxModule,
      MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
