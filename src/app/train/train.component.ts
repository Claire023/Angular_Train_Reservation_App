import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';
import { WebRequestService } from '../web-request.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  trains:Train[];

  constructor(private trainService : TrainService, private router: Router) { }

  ngOnInit(): void {
    this.getTrains();
  }

//récupere la liste des trains
  getTrains(){
    this.trainService.getTrains().subscribe((trains: Train[]) => {
      this.trains = trains;
      console.log(trains);
 })
}



editTrain(trainID:number){
  this.router.navigate(['edit-train', trainID]);
}


//supprimer un train
onDeleteTrainClick(Train: Train) {
  this.trainService.deleteTrain(Train._id).subscribe(data => {
    console.log(data);
    alert('train supprimée avec succès');
    this.router.navigate(['trains']);
  })
}


}
 