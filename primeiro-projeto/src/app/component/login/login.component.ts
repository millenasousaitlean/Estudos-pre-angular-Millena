import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  classesUser = [''];
  classesPass = [''];
  user: string = '';
  password: string = '';

  errors: any = {
    user: false,
    password: false
  }
    cadastro(){
      if (this.user.trim().length == 0){
        this.classesUser = ['inputRed']
      } else {
        this.classesUser = ['inputGreen']
      } if (this.password.trim().length == 0){
        this.classesPass = ['inputRed']
      } else{
        this.classesPass = ['inputGreen']
      }
    }

}
