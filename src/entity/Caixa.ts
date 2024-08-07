export interface Caixa {
    id: number,
    descricao: string,
    tipo: string,
    cliente: string,
    valor: string,
    numero_nota: number,
}

export interface PostCaixa {
    descricao: string,
    tipo: string,
    cliente: string,
    valor: string,
    numero_nota: number,
}