import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Autor } from 'src/app/model/blog/autor';
import { Post } from 'src/app/model/blog/post';
import { AutoresService } from 'src/app/service/blog/autores.service';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  formPost: FormGroup;

  autores: Autor[] = []

  constructor(
    private apiBlog: BlogService,
    private apiAutor: AutoresService
  ) {
    this.formPost = new FormGroup({
      titulo: new FormControl('', [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100)]),
      texto: new FormControl('', [Validators.required, Validators.required,
      Validators.minLength(255)]),
      imagem: new FormControl('', [Validators.nullValidator]),
      autor: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.apiAutor.getTodosAutores().subscribe((data) => {
      this.autores = data
    })
  }

  criarPost(): void {
    // console.log( this.formPost )

    let enviarPost: Post = {
      titulo: this.formPost.value.titulo,
      data: this.getNowISO(),
      texto: this.formPost.value.texto,
      imagem: this.formPost.value.imagem,
      comentarios: [],
      autor: this.formPost.value.autor,
      curtidas: 0,
      id: 0
    }
    this.apiBlog.postCriarNovoPost(enviarPost).subscribe((data) => {
      alert('Postagem Criada')
      
    })
    
  }
  

  getNowISO(): string {
    let now: Date = new Date()
    return now.toISOString()
  }
  
  
  
}
    
// if (autor.id == 1){
          //   altAutor = autor
          // }
          
          
    
          
          // let altAutor: Autor = {
          //   username: '',
          //   pfp: '',
          //   resumo: '',
          //   curtidas: 0,
          //   postagens: [],
          //   id: 0
          // }
          // altAutor.postagens.push(data.id)
          // this.apiAutor.putEditarPerfil(altAutor.id, altAutor).subscribe( (data) => {
          // })