import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/model/blog/autor';
import { Coments } from 'src/app/model/blog/coments';
import { Post } from 'src/app/model/blog/post';
import { AutoresService } from 'src/app/service/autores.service';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent {

  autores: Autor[] = []

  posts: Post[] = []

  idDaUrl: number = 0

  post: Post = {
    titulo: '',
    data: '',
    texto: '',
    imagem: '',
    autor: 0,
    curtidas: 0,
    comentarios: [],
    id: 0
  };

  constructor( 
    private apiBlog: BlogService,
    private apiAutores: AutoresService
     ){}


  ngOnInit(): void{
    this.pegarInfos();
  }

  pegarInfos(): void{
    this.apiAutores.getTodosAutores().subscribe( (side) => {
      this.autores = side
      this.apiBlog.getTodosPots().subscribe( (data) => {
        this.posts = data
      })
    })
  }

  converterData(data: string): string {
    return data.split('T')[0].trim().split('-').reverse().join('/')
  }

  findAutores(id: number): string{
    for( let autor of this.autores ){
      if( autor.id == id ){
        return autor.username
      }
    }
    return ''
  }

  fotoAutor(id: number): string {
    for (let picture of this.autores) {
      if (picture.id == id) {
        return picture.pfp
      }
    }
    return ''
  }


  curtidasPub(post: Post): void {
    this.post.curtidas++
    this.apiBlog.putEditarPublicacao(this.idDaUrl, post).subscribe((info) => {
      console.log(info)
      this.post = info
    })
  }

  mostrarCurtidas(): number {
    for (let curti of this.posts) {
      if (curti.id == this.post.id) {
        return curti.curtidas
      }
    }
    return 0
  }

}

// new Date()
// toISOString
