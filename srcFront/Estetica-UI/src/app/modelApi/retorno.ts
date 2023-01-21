export interface Retorno<T> {
  paginacao: Paginacao;
  dados: T;
}

export interface Paginacao {
  paginaAtual?: number;
  quantidadePorPagina?: number;
  totalPagina?: number;
  totalRegistros?: number;
}
