import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent {
  //modal
  isOpenModal: boolean = false;

  //templates
  isOpenTemplateTitle: boolean = false;
  isOpenTemplateSubtitle: boolean = false;
  isOpenTemplateParagraph: boolean = false;
  isOpenTemplateImage: boolean = false;

  //data
  titleForm: string = "";
  subtitleForm: string = "";
  paragraphForm: string = "";

  constructor(){}

  hideAll(){
    this.isOpenTemplateTitle = false;
    this.isOpenTemplateSubtitle = false;
    this.isOpenTemplateParagraph = false;
    this.isOpenTemplateImage = false;
  }

  openTemplateTitle(){
    this.isOpenTemplateTitle = true;
    this.isOpenTemplateSubtitle = false;
    this.isOpenTemplateParagraph = false;
    this.isOpenTemplateImage = false;
  }

  openTemplateSubtitle(){
    this.isOpenTemplateTitle = false;
    this.isOpenTemplateSubtitle = true;
    this.isOpenTemplateParagraph = false;
    this.isOpenTemplateImage = false;
  }

  openTemplateParagraph(){
    this.isOpenTemplateTitle = false;
    this.isOpenTemplateSubtitle = false;
    this.isOpenTemplateParagraph = true;
    this.isOpenTemplateImage = false;
  }

  openTemplateImage(){
    this.isOpenTemplateTitle = false;
    this.isOpenTemplateSubtitle = false;
    this.isOpenTemplateParagraph = false;
    this.isOpenTemplateImage = true;
  }

  chooseTemplate(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
  
    this.hideAll(); 
  
    switch (selectedValue) {
      case "1":
        this.openTemplateTitle();
        break;
      case "2":
        this.openTemplateSubtitle();
        break;
      case "3":
        this.openTemplateParagraph();
        break;
      case "4":
        this.openTemplateImage();
        break;
    }
  }
  
}
