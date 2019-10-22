import { Injectable , Component, OnInit } from '@angular/core';
import { AngularFirestore }  from "@angular/fire/firestore";
@Component({
  selector: 'app-pending-chef-for-verification',
  templateUrl: './pending-chef-for-verification.component.html',
  styleUrls: ['./pending-chef-for-verification.component.sass']
})

export class PendingChefForVerificationComponent implements OnInit {

  constructor( private db: AngularFirestore) { }
  ngOnInit() {
  
  }
  
}
