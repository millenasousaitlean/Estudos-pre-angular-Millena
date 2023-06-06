import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/service/users.service';
import { Albums } from 'src/app/model/albums';
import { AlbumsService } from 'src/app/service/albums.service';
import { Photos } from 'src/app/model/photos';
import { PhotosService } from 'src/app/service/photos.service';



@Component({
  selector: 'app-interna-usuarios',
  templateUrl: './interna-usuarios.component.html',
  styleUrls: ['./interna-usuarios.component.scss'],

})
export class InternaUsuariosComponent implements OnInit {

  users: User[] = []
  albums: Albums[] = []
  photos: Photos[] = []
  idDaUrl: number = 0
  mostrarModal: boolean = false

  userId: User = {
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

  albumsPhotos: Albums = {
    userId: 0,
    id: 0,
    title: ''
  }




  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiUser: UsersService,
    private apiAlbum: AlbumsService,
    private apiPhotos: PhotosService

  ) { }


  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.mostrarUser();
    this.mostrarPhotos()
  }

  mostrarUser(): void {
    this.apiUser.getTodosUsuarios().subscribe((data) => {
      this.users = data
      this.apiUser.getUsuariosPeloId(this.idDaUrl).subscribe((dataId) => {
        this.userId = dataId
        this.apiAlbum.getTodosAlbuns().subscribe((dataAlb) => {
          this.albums = dataAlb
        })
      })
    })
  }

  mostrarPhotos(): void {
    this.apiPhotos.getTodosPhotos().subscribe((dataPng) => {
      this.photos = dataPng
    })

  }


  puxaPhoto(id: number): string {
    let n = this.photos.filter((changePng) => changePng.albumId == id)
    return n[0].thumbnailUrl
  }



  openModal(): void {
    this.mostrarModal = true
    // 
  }

  closeModal(): void {
    this.mostrarModal = false


  }


  showPhotosModal(): void {
    // this.apiPhotos.getTodosPhotos().subscribe({
      //   next: (resposta) => {
      //     for(let newPho of resposta){
      //       if(this.album.userId == this.idDaUrl)
      //     }
      //   }
      // })
    }
  


  pegarImg(): void {

    }

  





}
