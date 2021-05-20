import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTrainComponent } from './add-train/add-train.component';
import { EditTrainComponent } from './edit-train/edit-train.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    BookComponent,
    AddReservationComponent,
    AddTrainComponent,
    EditTrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
