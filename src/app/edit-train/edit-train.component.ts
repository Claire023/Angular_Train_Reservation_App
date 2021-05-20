import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.scss']
})
export class EditTrainComponent implements OnInit {

  train:Train ;

   //formBuilder declaration via formControlName
   _id : FormControl;
   numTrain : FormControl;
   villeDepart: FormControl;
  villeArrivee:FormControl;
  heureDepart:FormControl;
  editTrainForm:FormGroup;

  constructor(private trainService : TrainService, private router:Router, private fb:FormBuilder,private route: ActivatedRoute) {
    
    this._id =this.fb.control("", [
      Validators.required
    ]);
    
  
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


    this.editTrainForm = fb.group({
      _id:this._id,
      numTrain:this.numTrain,
      villeDepart:this.villeDepart,
      villeArrivee:this.villeArrivee,
      heureDepart:this.heureDepart
    });
    
   }

  ngOnInit(): void {
    //pour récupérer un parametre dans une url la mon ID 
    let id = this.route.snapshot.params['id'];
    this.getTrainById(id);
  }



  getTrainById(id:number){
    this.trainService.getTrainById(id).subscribe(
      (train:Train) => {
        this.train = train;
        this.editTrainForm.get('_id').setValue(train._id);
        this.editTrainForm.get('numTrain').setValue(train.numTrain);
        this.editTrainForm.get('villeDepart').setValue( train.villeDepart);
        this.editTrainForm.get('villeArrivee').setValue( train.villeArrivee);
        this.editTrainForm.get('heureDepart').setValue( train.heureDepart);
      })
    }


  

  onSubmit(){
    if(this.editTrainForm.valid){
      let train = this.editTrainForm.value as Train;
      this.trainService.updateTrain(this.train._id,this.numTrain.value, this.villeDepart.value,this.villeArrivee.value, this.heureDepart.value)
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
