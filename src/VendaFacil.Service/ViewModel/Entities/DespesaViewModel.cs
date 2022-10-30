﻿namespace VendaFacil.Service.ViewModel.Entities
{
    public class DespesaViewModel
    {
        public int Codigo { get; set; }
        public int CodigoCartao { get; set; }
        public string? Descricao { get; set; }
        public int CodigoCategoria { get; set; }
        public double Valor { get; set; }
        public int CodigoMes { get; set; }
        public int Ano { get; set; }
        public int CodigoUsuario { get; set; }
        public DateTime DataCadastro { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public bool Ativo { get; set; }
    }
}