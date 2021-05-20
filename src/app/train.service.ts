import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private webReqService : WebRequestService) { }

getTrains(){
  //envoyer une requete http pour récupérer la liste des trains
    return this.webReqService.get('trains');
  }

getTrainById(id:number){
  //envoyer une requete http pour récupérer la liste des trains
  return this.webReqService.get(`trains/${id}`);
}

  //obtenir la liste des reservations de l'api
getBookTrains(){
    return this.webReqService.get('booktrains');
  }


addBooking(currentTrain:string, numberPlaces:number){
  return this.webReqService.add('booktrains',{currentTrain, numberPlaces});
}

addTrain(numTrain:string, villeDepart:string, villeArrivee:string, heureDepart:number){
  return this.webReqService.add('trains',{numTrain, villeDepart,villeArrivee,heureDepart});
}

updateTrain(id:number, numTrain: string, villeDepart:string, villeArrivee:string, heureDepart:number) {
  // We want to send a web request to update a list
  return this.webReqService.patch(`trains/${id}`, {id,numTrain,villeDepart,villeArrivee,heureDepart});
}

  //supprimer une reservation
deleteBookTrain(id: number) {
    return this.webReqService.delete(`booktrains/${id}`);
  }

    //supprimer un train
deleteTrain(id: number) {
  return this.webReqService.delete(`trains/${id}`);
}


}


