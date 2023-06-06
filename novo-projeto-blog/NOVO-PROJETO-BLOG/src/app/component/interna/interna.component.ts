import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/model/posts';
import { User } from 'src/app/model/user';
import { Comments } from 'src/app/model/comments';
import { PostsService } from 'src/app/service/posts.service';
import { UsersService } from 'src/app/service/users.service';
import { CommentsService } from 'src/app/service/comments.service';


@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {

  posts: Posts = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };
  
  // usersInterna: User = {
  //   id: 0,
  //   name: '',
  //   username: '',
  //   email: '',
  //   address: {
  //     street: '',
  //     suite: '',
  //     city: '',
  //     zipcode: '',
  //     geo: {
  //       lat: '',
  //       lng: ''
  //     }
  //   },
  //   phone: '',
  //   website: '',
  //   company: {
  //     name: '',
  //     catchPhrase: '',
  //     bs: ''
  //   }
  // };
  
  commentsInterna: Comments = {
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: ''
  }
  
  // postsInterna: Posts[] = []
  users: User[] = [];
  comments: Comments[] = [];
  idDaUrl: number = 0
  
  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiPost: PostsService,
    private apiUser: UsersService,
    private apiComments: CommentsService
  ) { }

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarInfos()
  }

  pegarInfos(): void {
    this.apiPost.getPostsPeloId(this.idDaUrl).subscribe((resp) => {
      this.posts = resp
      this.apiUser.getTodosUsuarios().subscribe((data) => {
        this.users = data
        this.apiUser.getTodosUsuarios().subscribe((auto) => {
          this.users = auto
        this.apiComments.getTodosComentarios().subscribe((dataComen) => {
          this.comments = dataComen
          this.apiComments.getComentariosPeloId(this.idDaUrl).subscribe((respComent) => {
            this.commentsInterna = respComent
          })
          })
        })
      })
    })
  }

  findAutor( id: number ): string{
    for( let autor of this.users ){
      if( autor.id == id ){
        return autor.username
      }
    }
    return ''
  }

  finUser( id: number ): string{
    for( let autor of this.users ){
      if( autor.id == id ){
        return autor.name
      }
    }
    return ''
  }


}
