import { Component, OnInit } from '@angular/core';
// import { FirebaseListObservable } from "angularfire2/database-deprecated";
// import { Observable } from 'rxjs';

import { FirebaseServiceService } from './../../firebase-service.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})


export class PackagesComponent implements OnInit {
  packages: Array<[object]>;
  firebaseService: any;



  constructor(firebaseService: FirebaseServiceService) {
    this.firebaseService =  firebaseService;
    this.packages = firebaseService.getPackages().subscribe(packages => {
      this.packages = packages;
    }).catch(err =>  {
      console.error('erro ao consultar banco de dados: ', err);
    });
    // this.packages = firebaseService.getPackages();
    
  }

  ngOnInit() {

  }

}
