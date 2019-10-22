import { Component, OnInit } from '@angular/core';
import { AngularFirestore }  from "@angular/fire/firestore";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  pendingChefList:any;
  issuesList:any;
  ngOnInit() {
    this.getPendingChefList();
    this.getPendingIssuesList();
  }
  getPendingChefList(){
    this.pendingChefList=[]
    this.db.collection("chef",ref=> ref.where("isKYCDone","==",false))
    .valueChanges()
    .subscribe(result=>{
      var a = result.length;
      if (a > 0) {
        this.pendingChefList = result;
      }
      console.log(this.pendingChefList);
    });
   }

   getPendingIssuesList(){
    this.issuesList=[]
    this.db.collection("issue",ref=> ref.where("acknowledge","==",false))
    .valueChanges()
    .subscribe(result=>{
      var a = result.length;
      if (a > 0) {
        this.issuesList = result;
      }
      console.log(this.issuesList);
    });
   }



   activateChef(id: string) {
    this.db
      .collection("chef")
      .doc(id)
      .update({
        isKYCDone: true
      });
    window.alert("Chef is Activated");
    this.pendingChefList = this.pendingChefList.filter(
      item => item.uid!== id
    );
  }
  acknowledge(id: string) {
    this.db
      .collection("issue")
      .doc(id)
      .update({
        acknowledge: true
      });
    window.alert("Issue is Acknowleged ");
    this.issuesList = this.issuesList.filter(
      item => item.issueid!== id
    );
  }
}
