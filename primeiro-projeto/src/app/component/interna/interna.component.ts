import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/model/noticia';
import { Categoria } from 'src/app/model/categoria';
import { NoticiaService } from 'src/app/service/noticia.service';
import { CategoriasService } from 'src/app/service/categorias.service';


@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {


  // noticia: Noticia[] = [
  //   // {
  //   //   titulo: "Lula propõe teto de juros de 1,97% ao mês para empréstimo consignado a aposentados",
  //   //   categoria: 1,
  //   //   dataPublicacao: "2023-03-28",
  //   //   autor: "Valdo Cruz",
  //   //   imagem: "https://media.gazetadopovo.com.br/2023/02/14161021/43anospt.presidentelula-8-crop-20230214190011-960x540.jpg",
  //   //   corpo: "Em reunião com a equipe ministerial nesta terça-feira (28), o presidente Luiz Inácio Lula da Silva (PT) propôs o percentual de 1,97% ao mês para o teto de juros do crédito consignado de aposentados e pensionistas do INSS. Ministério da Previdência defendia uma taxa abaixo de 1,90%, enquanto os bancos privados queriam uma taxa de 1,99%. Agora, a posição de Lula será levada para o Conselho Nacional de Previdência Social (CNPS), que é o responsável final pela definição da taxa. Lula se reuniu no fim da manhã desta terça com os ministros Fernando Haddad, Carlos Lupi, Luiz Marinho e com os secretários-executivos da Casa Civil, Miriam Belchior, e da Fazenda, Gabriel Galípolo, depois que uma reunião no dia anterior terminou sem definição.",
  //   //   id: 1
  //   // },

  //   // {
  //   //   titulo: "professora que imobilizou agressor para salvar vítima de ataque em escola de SP",
  //   //   categoria: 2,
  //   //   dataPublicacao: "2023-03-28",
  //   //   autor: "g1 SP e TV Globo",
  //   //   imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/03/121212.jpeg?w=876&h=484&crop=1",
  //   //   corpo: "A professora de educação física Cinthia Barbosa, que conseguiu imobilizar o estudante que atacou educadores e alunos dentro da sala de aula da Escola Estadual Thomazia Montoro, relatou nesta terça (28) sobre a dificuldade de falar sobre os acontecimentos.É bastante difícil falar ainda assim porque acho que nesse momento as emoções estão bem afloradas. Então, eu vou me limitar a tudo isso que eu estou sentido agora, a me expressar ali dentro agora com meus colegas. Embora o momento não seja para isso, ou talvez seja porque é uma confusão de sentimentos, eu quero passar energia para os meus colegas, para família, para toda nossa comunidade escolar, também para todo um sistema de educação. Então, eu vou lá agora. É só amor.",
  //   //   id: 2
  //   // },
  //   // {
  //   //   titulo: "aluguel disparam depois de negociações 'generosas' durante a pandemia",
  //   //   categoria: 1,
  //   //   dataPublicacao: "2023-03-28",
  //   //   autor: "Isabela Bolzani",
  //   //   imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/S%C3%A3o_Paulo-SP_-_Brasil_-_Zona_Leste.jpg/800px-S%C3%A3o_Paulo-SP_-_Brasil_-_Zona_Leste.jpg",
  //   //   corpo: "Os preços médios do aluguel no Brasil dispararam nos últimos meses. Dados divulgados pelo último Índice FipeZap mostram que o aumento foi de 1,61% em fevereiro, no oitavo avanço consecutivo. Em 12 meses, a alta acumulada é de 17,05%. O cenário, segundo especialistas, reflete uma série de fatores, tais como: 'Uma recomposição de preços'após negociações mais brandas durante a pandemia; A variação dos indexadores de aluguel;  A maior demanda por imóveis bem localizados para locação — principalmente em meio à volta das pessoas para os centros empresariais;.",
  //   //   id: 3
  //   // }
  // ]
  noticias: Noticia = {
    titulo: '',
    categoria: 0,
    dataPublicacao: '',
    autor: '',
    imagem: '',
    corpo: '',
    id: 0
  }

  categorias: Categoria = 
    {
      nome: '',
      id: 0
    }
  

findCateg(id:number) {
    
  for (let categ in this.categorias) {
    if (id == id) {
      return this.categorias.nome
    }
  }
  return
}

  idDaUrl: number = 0

  constructor(
    private rotaAtiva: ActivatedRoute,
    private apiNoticia: NoticiaService,
    private apiCategorias: CategoriasService
    ){}

 

  ngOnInit(): void {
    console.log( this.rotaAtiva.snapshot.params['id'] )
    this.idDaUrl = Number(this.rotaAtiva.snapshot.params['id'])
    this.pegarPeloId();
  }

  pegarPeloId(): void{
    this.apiNoticia.getNoticiaById( this.idDaUrl ).subscribe( (data) => {
      this.noticias = data
    })
  }

  pegarCategId(): void{
    this.apiCategorias.getCategoriasById( this.idDaUrl ).subscribe( (data) => {
      this.categorias = data
    })
  }

}
