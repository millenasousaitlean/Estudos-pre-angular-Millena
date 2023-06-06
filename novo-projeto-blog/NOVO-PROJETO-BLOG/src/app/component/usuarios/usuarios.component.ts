import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: User[] = []

  haveUsers: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
}


  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiUser: UsersService
  ) { }

  ngOnInit(): void {
    this.mostrarUsers()
  }

  mostrarUsers(): void{
    this.apiUser.getTodosUsuarios().subscribe((data) => {
      this.users = data
    })
  }



}
