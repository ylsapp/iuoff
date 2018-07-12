import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    PartnersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), 
    AngularFireModule.initializeApp(environment.firebase, 'iuoff-fire'),
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireModule,
    AngularFireDatabaseModule, 
    AngularFireDatabase
    // FirebaseListObservable, 
    // FirebaseObjectObservable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
