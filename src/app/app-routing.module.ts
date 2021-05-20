import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { BookComponent } from './book/book.component';
import { EditTrainComponent } from './edit-train/edit-train.component';
import { TrainComponent } from './train/train.component';

const routes: Routes = [
  { path: '', component: TrainComponent},
  { path: 'trains', component: TrainComponent},
  { path: 'add-trains', component: AddTrainComponent},
  { path: 'edit-train/:id', component: EditTrainComponent},
  { path: 'booktrains', component: BookComponent},
  { path: 'add-booking', component: AddReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
