import { Coments } from "./coments"

export interface Post {
            titulo: string,
            data: string,
            texto: string,
            imagem: string,
            autor: number,
            curtidas: number,
            comentarios: Coments[],
            id: number
}
