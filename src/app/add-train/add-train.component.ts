import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.scss']
})
export class AddTrainComponent implements OnInit {

   //formBuilder declaration via formControlName
   numTrain : FormControl;
   villeDepart: FormControl;
  villeArrivee:FormControl;
  heureDepart:FormControl;
  addTrainForm:FormGroup;

  constructor(private trainService : TrainService, private router:Router, private fb:FormBuilder) { 

   

    this.numTrain = this.fb.control("", [
      Validators.required
    ]);
    
    this.villeDepart = this.fb.control("", [
      Validators.required
    ]);

    
    this.villeArrivee =this.fb.control("", [
      Validators.required
    ]);

    this.heureDepart =this.fb.control("", [
      Validators.required
    ]);


    this.addTrainForm = fb.group({
      numTrain:this.numTrain,
      villeDepart:this.villeDepart,
      villeArrivee:this.villeArrivee,
      heureDepart:this.heureDepart
    });
    

  }

  ngOnInit(): void {
  }



  //permet de rajouter les trains en base
  onSubmit(){
    if(this.addTrainForm.valid){
      let train = this.addTrainForm.value as Train;
      this.trainService.addTrain(this.numTrain.value, this.villeDepart.value,this.villeArrivee.value, this.heureDepart.value)
        .subscribe(
          (data)=> console.log(data),
          error=> console.log(error) 
        );
      console.log(train);
      alert('reservation effectuée avec succès');
      this.router.navigate(['trains']);
    }

  }

}
