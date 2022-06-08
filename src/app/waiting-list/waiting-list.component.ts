import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {

  firstName:string = '';
  lastName:string = '';
  email:string = '';
  message:string = '';

  onSubmit(){
    alert('Email Sent! You have been added to the wait list. Please wait to be contacted for your request')
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
