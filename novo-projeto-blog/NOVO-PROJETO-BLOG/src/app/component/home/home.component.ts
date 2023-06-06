import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/model/posts';
import { User } from 'src/app/model/user';
import { PostsService } from 'src/app/service/posts.service';
import { UsersService } from 'src/app/service/users.service'; 
import { Comments } from 'src/app/model/comments';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor( 
    private apiPost: PostsService,
    private apiUser: UsersService,
    private apiComments: CommentsService
   ){}



   posts: Posts ={
    userId: 0,
    id: 0,
    title: '',
    body: ''
   }

   postHome: Posts[] = []
   comments: Comments[] = []

   users: User[] = []

   ngOnInit(): void {
     this.pegarInfos();
   }

   pegarInfos(): void{
    this.apiPost.getTodosPosts().subscribe( (resp) => {
      this.postHome = resp
      this.apiUser.getTodosUsuarios().subscribe( (data) => {
        this.users = data
        // this.apiUser.getUsuariosPeloId().subscribe( (use) => {
          // this.users = use
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

  // puxaComment(id: number): string{
  //   let n = this.comments.filter((changePng) => changePng. == id)
  //   return n.length.
  // }

}
