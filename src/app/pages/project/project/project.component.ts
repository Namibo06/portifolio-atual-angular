import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  /*search*/
  searchContent: string = "";
  searchFoundLength: number = 0;
  contentInput: string = "";

  findBySearch(){
    this.searchContent = this.contentInput;
  }

  projects = [
    {
      id: "1",
      image_url: "barbx.jpg",
      types: [
        { id: "1", type_name: "HTML" },
        { id: "2", type_name: "CSS" },
        { id: "3", type_name: "JavaScript" }
      ],
      title: "Barbx",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ver projeto"
    },
    {
      id: "2",
      image_url: "barbx.jpg",
      types: [
        { id: "1", type_name: "Node.js" },
        { id: "2", type_name: "Express.js" },
        { id: "3", type_name: "Sequelize" },
        { id: "4", type_name: "MySQL" }
      ],
      title: "Gerenciador para um hotel canino",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ver projeto"
    },
    {
      id: "3",
      image_url: "barbx.jpg",
      types: [
        { id: "1", type_name: "Java" },
        { id: "2", type_name: "Kafka" },
        { id: "3", type_name: "SpringBoot" },
        { id: "4", type_name: "MySQL" },
      ],
      title: "E-commerce com pagamento",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ver projeto"
    },
  ];

}
