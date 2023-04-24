export interface Receitas {
    id: string,
    titulo: String,
    destaque: boolean,
    resumo: string,
    imagem: string,
    rendimento: number,
    tempoPreparo: number,
    categoria: number,
    dificuldade: number,
    dataPublicacao: string,
    ingredientes: [
        {
          quantidade: number,
          ingrediente: string
        }
      ],
      modoPreparo: [
        {
          passo: number,
          texto : string
        }
      ]      
}
