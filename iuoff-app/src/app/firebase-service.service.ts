import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  // db: AngularFireDatabase;
  packages: Array<[object]>;
  
  appFirebase = firebase.initializeApp({
    apiKey: "AIzaSyBKS674gkztNLv5QLxYnGquo9sxNmhkO5M",
    authDomain: "iuoff-fire.firebaseapp.com",
    databaseURL: "https://iuoff-fire.firebaseio.com",
    projectId: "iuoff-fire",
    storageBucket: "",
    messagingSenderId: "187560743950"
  });  

  db:  any;
  packagesRef: any;


  constructor() {
    this.db  = this.appFirebase.database();
    this.packagesRef = this.db.ref('packages');
   }

  getPackages(){
    
   this.packages =  this.packagesRef;
   console.log('getPackages appFirebase: ', this.appFirebase , this.packages );
   return this.packagesRef;
  }
  addPackage(task: any) {  
    task.done = false;   
    this.packages.push(task);
  }
 
  updatePackage(task: any) {
    // Atualizando o item na lista.
    // Para isso passamos por parametro qual é o id do item no Firebase
    // e quais são os novos valores.
    //this.packages.update(task.$key, task);
  }
 
  savePackage(task: any) {
    // Metodo criado para facilitar a inclusão/alteração e um item.
    // Verifico se o item tem o Id para saber se é uma inclusão ou alteração.
    if (task.$key == null) {
      this.addPackage(task);
    } else {
      this.updatePackage(task);
    }
  }
 
  removePackage(task: any) {
    //this.packages.remove(task.$key);
  }
  
}
