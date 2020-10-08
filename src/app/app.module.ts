import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableComponent} from './table/table.component';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormComponent} from './form/form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TableRowComponent} from './table/table-row/table-row.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
      TableComponent,
      FormComponent,
      TableRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      MatTableModule,
      MatCheckboxModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatIconModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
