import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Autor } from 'src/app/model/blog/autor';
import { Coments } from 'src/app/model/blog/coments';
import { Post } from 'src/app/model/blog/post';
import { AutoresService } from 'src/app/service/blog/autores.service';
import { BlogService } from 'src/app/service/blog/blog.service'; 

@Component({
  selector: 'app-perfil-post',
  templateUrl: './perfil-post.component.html',
  styleUrls: ['./perfil-post.component.scss']
})
export class PerfilPostComponent {

  autores: Autor[] = []

  post: Post[] = []

  posts: Post = {
    titulo: '',
    data: '',
    texto: '',
    imagem: '',
    autor: 0,
    curtidas: 0,
    comentarios: [],
    id: 0
  };

  autos: Autor = {
    username: '',
    curtidas: 0,
    pfp: '',
    resumo: '',
    postagens: [],
    id: 0
  }
  idDaUrl: number = 0

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiBlog: BlogService,
    private apiAutores: AutoresService
  ){}

  ngOnInit(): void{
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    // this.pegarInfos();
    this.pegarInformacoes()
  }

  // pegarInfos(): void{
  //   this.apiAutores.getTodosAutores().subscribe( (side) => {
  //     this.autores = side
      
  //   })
  // }
  pegarInformacoes(): void {
    this.apiAutores.getTodosAutores().subscribe((resposta) => {
      this.autores = resposta
      this.apiBlog.getPostPeloId(this.idDaUrl).subscribe((data) => {
        this.posts = data
        this.apiBlog.getTodosPots().subscribe( (data) => {
          this.post = data
          this.apiAutores.getAutoresPeloId(this.idDaUrl).subscribe((auto) => {
            this.autos = auto
          })
        })
      })
    })
  }

  converterData(data: string): string{
    return data.split(':')[0].split('T')[0].trim().split('-').reverse().join('/')
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

  likesPerfil():void{
    this.autos.curtidas ++
    this.apiAutores.putEditarPerfil(this.autos).subscribe((info) => {
      console.log(info)
      this.autos = info
    })
  }

  mostrarCurtidas(): number{
    for(let curti of this.autores){
      if( curti.id == this.idDaUrl ){
        return curti.curtidas
      }
    }
    return 0
  }

  mostrarPostagens(autor: number): string[]{ 
    let array = []
    for(let dataPost of this.post){
      if( dataPost.autor == this.idDaUrl ){
        array.push(dataPost.titulo)    
      }
    }
    return array
  }









}
