import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tiktok-template',
  templateUrl: './card-tiktok-template.component.html',
  styleUrl: './card-tiktok-template.component.scss'
})
export class CardTiktokTemplateComponent {
  @Input() dataApi: any;
  idCard: string = "";
  titleCard: string = "";
  imageURLCard: string = "";
  descriptionCard: string = "";
  namePostCard: string = "";

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.titleCard = this.dataApi.title;
    this.imageURLCard = this.dataApi.image_url;
    this.descriptionCard = this.dataApi.description;
    this.namePostCard = this.dataApi.nameToPost;
  }
}
