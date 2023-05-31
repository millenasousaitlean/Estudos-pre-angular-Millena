import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from 'src/app/model/blog/autor';
import { Post } from 'src/app/model/blog/post';
import { Coments } from 'src/app/model/blog/coments';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoresService } from 'src/app/service/autores.service';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-interna',
  templateUrl: './blog-interna.component.html',
  styleUrls: ['./blog-interna.component.scss']
})
export class BlogInternaComponent implements OnInit {



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

  newComents: Coments = {
    texto:'',
    autor: 0,
    curtidas: [],
    data: '',
    id: 0
  }

  autos: Autor = {
    username: '',
    curtidas: 0,
    pfp: '',
    resumo: '',
    postagens: [],
    id: 0
  }

  autores: Autor[] = []

  idDaUrl: number = 0

  formComentario: FormGroup

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiBlog: BlogService,
    private apiAutores: AutoresService

  ) {
    this.formComentario = new FormGroup({
      texto: new FormControl('',[
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(255)
      ])
    })
  }

  ngOnInit(): void {
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarInformacoes()
  }


  pegarInformacoes(): void {
    this.apiAutores.getTodosAutores().subscribe((resposta) => {
      this.autores = resposta
      this.apiBlog.getPostPeloId(this.idDaUrl).subscribe((data) => {
        this.post = data
        this.apiAutores.getAutoresPeloId(this.idDaUrl).subscribe((auto) => {
          this.autos = auto
        })
      })
    })
  }

  converterData(data: string): string {
    return data.split('T')[0].trim().split('-').reverse().join('/')
  }

  // converteData( data:string ): string{
  //   return data.split(':')[0].trim().split('/').reverse().join('/')
  //   let dma = data.split('T')[0].split('-').reverse().join('/')
  //   let hora = data.split('T')[1].split(':')[0]
  //   let min = data.split('T')[1].split(':')[1]
  //   return `${dma} ${hora}:${min}`
  // }



  acharAutor(id: number): string {
    for (let autor of this.autores) {
      if (autor.id == id) {
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
  // userAutor(id: number): number {
  //   for (let picture of this.autores) {
  //     if (picture.id == id) {
  //       return picture.id
  //     }
  //   }
  //   return 0
  // }


  fazerComentario(): void{
    let nId = 1
    let acharId = this.post.comentarios.length
    if( acharId> 0 ){
      nId = this.post.comentarios[ acharId - 1 ].id 
    }
    this.newComents = {
      texto: this.formComentario.value.texto,
      autor: 2, //Estatico
      curtidas: [],
      data: this.getNowISO(),
      id: nId
    }
    let postAlterado: Post = this.post
    postAlterado.comentarios.push(this.newComents)
    this.apiBlog.putEditarPublicacao(this.idDaUrl, postAlterado).subscribe( (data) => {
      // this.pegarInformacoes()
      alert('Comentário postado!')
      window.location.href = `http://localhost:4200//blog/interna/${this.idDaUrl}`
      
    })
    
    // this.newComents = {
      //   texto: ''[this.formComentario.value.texto],
      //   autor: 0, //Estatico
      //   curtidas: [],
      //   data: '',
      //   id: 0
      // }
      
    }

  
  getNowISO(): string{
    let now: Date = new Date()
    return now.toISOString()
  }

  fnLike(comentario: Coments): void{
    let altComent = comentario
    let altPost = this.post
    if( comentario.curtidas.includes( 3 ) ){ // 3 sendo o ID do usuário
      // Retiro o like
      altComent.curtidas.splice(comentario.curtidas.indexOf(3), 1) // Retira o id da curtida
    } else {
      // Coloco o like
      altComent.curtidas.push(3)
    }
    altPost.comentarios[ comentario.id - 1 ] = altComent
    this.apiBlog.putEditarPublicacao(this.idDaUrl, altPost).subscribe( (data) => {
      this.pegarInformacoes()
    })
  }

  checkLike(comentario: Coments): boolean{
    return comentario.curtidas.includes( 3 )
  }





  // addComentario(): void {

  //   this.apiBlog.postCriarNovoComentario(this.post).subscribe((coments) => {
  //     this.post = coments
  //     alert('Comentario criado')
  //   })

  // }

  // editarComentarios(comentes: Coments): void {
  //   let addComente: Coments = {
  //     texto: '',
  //     autor: 0,
  //     curtidas: [],
  //     data: this.getNowISO(),
  //     id: 0
  //   }

  // }



  // curtidasPub(): void {
  //   this.post.comentarios[0].curtidas++
  //   this.apiBlog.putEditarcomentario(this.post).subscribe((info) => {
  //     console.log(info)
  //     this.post = info
  //   })
  // }

  // mostrarCurtidas(): number {
  //   for (let curti of this.post.comentarios) {
  //     if (curti.autor == this.idDaUrl) {
  //       return curti.curtidas
  //     }
  //   }
  //   return 0
  // }





}
