import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { BookTrain } from '../models/book.model';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

   //empty array declaration
  Trains: Train[];


   //formBuilder declaration via formControlName
  currentTrain : FormControl;
  numberPlaces: FormControl;
  addBookForm:FormGroup;
 

  constructor(private trainService : TrainService, private router:Router, private fb:FormBuilder) { 

  
  this.currentTrain = this.fb.control("", [
    Validators.required
  ]);
  
  this.numberPlaces = this.fb.control("", [
    Validators.required
  ]);


  this.addBookForm = fb.group({
    currentTrain:this.currentTrain,
    numberPlaces:this.numberPlaces
  });
  
}
  
  ngOnInit(): void {
    this.getTrains();
  }



//récupere la liste des trains
getTrains(){
  this.trainService.getTrains().subscribe((Trains: Train[]) => {
    this.Trains = Trains;
    console.log(Trains);
})
}


//permet de rajouter les réservations en base
  onSubmit(){
    if(this.addBookForm.valid){
      let book = this.addBookForm.value as BookTrain;
      this.trainService.addBooking(this.currentTrain.value, this.numberPlaces.value)
        .subscribe(
          (data)=> console.log(data),
          error=> console.log(error) 
        );
      console.log(book);
      alert('reservation effectuée avec succès');
      this.router.navigate(['booktrains']);
    }

  }

  
  
}
