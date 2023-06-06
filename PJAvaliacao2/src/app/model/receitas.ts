import { Ingredientes } from "./ingredientes"
import { ModoPreparo } from "./modo-preparo"

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

    ingredientes: Ingredientes [],
      modoPreparo: ModoPreparo []      
}
