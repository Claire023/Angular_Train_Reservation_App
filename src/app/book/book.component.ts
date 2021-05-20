import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTrain } from '../models/book.model';
import { Train } from '../models/train.model';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // BookTrains:BookTrain[];
  BookTrains:{};
  trains:Train[];
  currentTrain:any[]=[];


  constructor(private trainService : TrainService, private router: Router) { }

  ngOnInit(): void {
    this.getBookTrains();
 
  }


//récupere la liste des réservations
getBookTrains() {
  //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
  this.trainService.getBookTrains().subscribe(
    (BookTrains: any) => {
      this.BookTrains = BookTrains;
      console.log(BookTrains);
    }
  )
}



//supprimer une reservation
onDeleteBookClick(BookTrain: BookTrain) {
  this.trainService.deleteBookTrain(BookTrain._id).subscribe(data => {
    console.log(data);
    alert('reservation supprimée avec succès');
    this.router.navigate(['trains']);
  })
}



}
