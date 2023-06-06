import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/model/posts';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent {

  post: Posts[] = [];
  user: User[] = []

  idDaUrl: number = 0


  constructor(
    public router: Router
  ) {}



}
