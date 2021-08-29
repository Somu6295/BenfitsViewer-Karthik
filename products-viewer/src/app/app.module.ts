import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './component/productlist/productlist.component';

import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { FormsModule }   from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    TableModule,
    CardModule,
    FormsModule,
    AutoCompleteModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
