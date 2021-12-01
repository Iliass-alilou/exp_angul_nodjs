import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<User>();
  @Input() title;
  constructor() { }

  ngOnInit(): void {
  }


  sendData(email,password){
   
    this.submitForm.emit(new User(email.value,password.value))
  }

}
