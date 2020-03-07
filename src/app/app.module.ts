import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, Routes , RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
const appRoutes:Routes=[
  {
    path:"",
    component:AppComponent,
    data:{title:"Home"}
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
