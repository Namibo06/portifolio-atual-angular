import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  /*search*/
  searchContent: string = "";
  searchFoundLength: number = 0;
  contentInput: string = "";

  /*faq*/
  openFaqs: { [key: string]: boolean } = {}; 

  findBySearch(){
    this.searchContent = this.contentInput;
  }

  showHideFaqContent(id: string) {
    this.openFaqs = { [id]: !this.openFaqs[id] };
  }

  faqData = [
    {
      id: "1",
      title: 'Estou disponível para trabalhar presencialmente, híbrido ou remoto?',
      description: 'Se a vaga for em Feira de Santana estou disposto a trabalhar de forma presencial ou híbrida, fora isso, estou disposto a viajar de tempos em tempos para visitar o local de trabalho mas mantendo-se em formato remoto'
    },
    {
      id: "2",
      title: 'Aceito PJ? Estou atrás de estágio? Para quais contratos de trabalho estou disponível?',
      description: 'Estou aberto aos seguintes tipos de contrato de trabalho: CLT, PJ, estágio, jovem aprendiz, auxiliar, assistente'
    },
    {
      id: "3",
      title: 'Quais áreas já tive experiência acadêmica, profissional ou pessoal',
      description: " Frontend: HTML - CSS - JavaScript - Sass - Bootstrap - JQuery - Angular Framework - VueJS. Backend:  PHP - Java - Node.js - Nest.js - Laravel - SpringBoot. Banco de Dados: SQLite - MongoDB - MySQL - PostgreSQL. Ferramentas: Git - Docker - RabbitMQ - Slack - Trello - Gitlab - Github - Android Studio - dentre outros"
    },
    {
      id: "4",
      title: 'Faixa salarial: Tem mínima definida? Tem alguns valores em mente?',
      description: 'Para estágio e jovem aprendiz no mínimo deve ser R$900, para regime CLT mínimo de R$2.500, e PJ, mínimo de R$2.900'
    },
  ];
}
