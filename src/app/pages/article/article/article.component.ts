import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{
  /*data article*/
  articleId: string = "";
  articleTitle: string = "";
  articleAuthor: string = "";
  articleCreatedAt: string = "";
  articleUpdatedAt: string = "";

  articleSectionData: any = [];

  @ViewChildren('subtitleRef') subtitles!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.articleData.article.article_section.sort((a, b) => Number(a.position) - Number(b.position));
    this.getArticleData();
  }

  getArticleData(){
    this.articleId = this.articleData.article.id;
    this.articleTitle = this.articleData.article.title;
    this.articleAuthor = this.articleData.article.author;
    this.articleCreatedAt = this.articleData.article.created_at;
    this.articleUpdatedAt = this.articleData.article.updated_at;
    this.articleSectionData = this.articleData.article.article_section;
  }

  articleData = {
    article:{
      id: "1",
      title: "Iniciando Desenvolvimento Web com PHP",
      author: "Joalisson Pinto Maia",
      created_at: "31/04/2025 14:25:00",
      updated_at: "31/04/2025 14:25:00",

      article_section:[
        {
          article_id: "1",
          section_type: "title", 
          content: "História do PHP",
          position: "2"
        },
        {
          article_id: "1",
          section_type: "subtitle", 
          content: "Primeiramente, o que significa PHP?",
          position: "3" 
        },
        {
          article_id: "1",
          section_type: "paragraph", 
          content: "PHP é um acrônimo para PHP: HiperText PreProcessor, sim o nome da linguagem está no seu significado",
          position: "4" 
        },
        {
          article_id: "1",
          section_type: "subtitle", 
          content: "Agora, vamos iniciar a história dessa liguagem maravilhosa...",
          position: "6" 
        },
        {
          article_id: "1",
          section_type: "paragraph", 
          content: "O PHP foi criado por Rasmus Lerdorf, sua primeira versão saiu em 1994, e a motivação para criação da linguagem foi para adicionar conteúdos dinâmicos em páginas HTML. Uma curiosidade é que Rasmus programava tanto em C quanto em Perl por isso observamos algumas semelhanças dessas linguagens ao PHP",
          position: "7" 
        },
        {
          article_id: "1",
          section_type: "references", 
          content: "https://www.php.net/manual/pt_BR/history.php.php",
          position: "8" 
        },
        {
          article_id: "1",
          image_url: "html-css-javascript.webp",
          caption: "Iniciando Desenvolvimento Web com PHP", //legenda da imagem
          position: "1"
        },
        {
          article_id: "1",
          image_url: "setup.png",
          caption: "História do PHP", //legenda da imagem
          position: "5"
        }
      ],
    },
  };

  scrollToSection(position: number) {
    // Encontra o elemento correto com base na posição
    const element = this.subtitles.toArray().find(el => el.nativeElement.id === 'subtitle' + position);
    
    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  trackByPosition(index: number, item: any): number {
    return item.position;
  }
  
}
