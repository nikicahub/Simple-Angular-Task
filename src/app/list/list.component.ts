import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  styleUrls: ['list.scss'],
  templateUrl: 'list.html',
})
export class ListComponent implements OnInit{
  
formData !: any;
original !: any;

constructor(private api: ApiService){

}
  ngOnInit(){
    this.getAllContacts();
  }

 //get all the contacts from database
 getAllContacts() {
  this.api.getForm()
    .subscribe(res => {
      this.original = res;
      this.formData = this.original;
    })
}
}
