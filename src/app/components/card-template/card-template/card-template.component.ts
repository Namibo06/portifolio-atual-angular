import { Component, Input, OnInit } from '@angular/core';
import { faEye, faHeart, faThumbsDown, faThumbsUp, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrl: './card-template.component.scss'
})
export class CardTemplateComponent implements OnInit{
  @Input() dataApi: any;
  idCard: string = "";
  titleCard: string = "";
  imageURLCard: string = "";
  typeNameCard: any = [];
  descriptionCard: string = "";
  namePostCard: string = "";

  /*icons*/
  likeIcon:IconDefinition = faThumbsUp;
  unlikeIcon:IconDefinition = faThumbsDown;
  viewIcon:IconDefinition = faEye;
  favoriteIcon:IconDefinition = faHeart;
  shareIcon:IconDefinition = faShareNodes;

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.idCard = this.dataApi.id;
    this.titleCard = this.dataApi.title;
    this.imageURLCard = this.dataApi.image_url;
    this.typeNameCard = this.dataApi.types;
    this.descriptionCard = this.dataApi.description;
    this.namePostCard = this.dataApi.nameToPost;
  }
}
