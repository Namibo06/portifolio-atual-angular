import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit{
  /*steps&templates*/
  stepActive: string = "";
  @ViewChild('templateAll') templateAll!:ElementRef;
  @ViewChild('templateBlog') templateBlog!:ElementRef;
  @ViewChild('templateProject') templateProject!:ElementRef;
  @ViewChild('templateTiktok') templateTiktok!:ElementRef;

  /*search*/
  searchContent: string = "";
  searchFoundLength: number = 0;
  contentInput: string = "";

/*  templates: any = [
    "templateAll",
    "templateBlog",
    "templateProject",
    "templateTiktok"
  ]; */

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.activeStep('all');
    });
  }

  activeStep(step: string){
    this.stepActive = step;

    this.verifyStepForChangeTemplate(step);
  }

  verifyStepForChangeTemplate(step: string){
    /*step = "template" + step.charAt(0).toUpperCase() + step.substring(1, 14);
    this.templates.forEach((el: ElementRef) => {
      console.log(el);
      console.log(step);
      if(el.nativeElement.id === step){
        el.nativeElement.style.display = "block";
      }
      el.nativeElement.style.display = "none";
    });*/
    
    if(step === "all"){
      this.templateAll.nativeElement.style.display = "block";
      this.templateBlog.nativeElement.style.display = "none";
      this.templateProject.nativeElement.style.display = "none";
      this.templateTiktok.nativeElement.style.display = "none";
    } else if(step === "blog"){
      this.templateAll.nativeElement.style.display = "none";
      this.templateBlog.nativeElement.style.display = "block";
      this.templateProject.nativeElement.style.display = "none";
      this.templateTiktok.nativeElement.style.display = "none";
    } else if(step === "project"){
      this.templateAll.nativeElement.style.display = "none";
      this.templateBlog.nativeElement.style.display = "none";
      this.templateProject.nativeElement.style.display = "block";
      this.templateTiktok.nativeElement.style.display = "none";
    } else if(step === "tiktok"){
      this.templateAll.nativeElement.style.display = "none";
      this.templateBlog.nativeElement.style.display = "none";
      this.templateProject.nativeElement.style.display = "none";
      this.templateTiktok.nativeElement.style.display = "block";
    }
  }

  findBySearch(){
    this.searchContent = this.contentInput;
  }

  /*fake data*/
  allPosts = [
    {
      id: "1",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "HTML" },
        { id: "2", type_name: "INTERNET" }
      ],
      title: "Como fazer aplicações web modernas com HTML e CSS?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
    {
      id: "2",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "HTML" },
        { id: "2", type_name: "CSS" }
      ],
      title: "O que é PHP e para que ele serve?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
    {
      id: "3",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "PHP" }
      ],
      title: "Como funciona a internet, e o quais são as linguagens conhecidas como a tríade do Front-end?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
    {
      id: "4",
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
      id: "5",
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
      id: "6",
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
    {
      id: "7",
      image_url: "setup.png",
      types: [
        { id: "1", type_name: "Vscode" },
        { id: "2", type_name: "Git" },
        { id: "3", type_name: "MySQL" },
      ],
      title: "Instalando Ambiente de Desenvolvimento",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ver video"
    },
  ];  

  blog = [
    {
      id: "1",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "HTML" },
        { id: "2", type_name: "INTERNET" }
      ],
      title: "Como fazer aplicações web modernas com HTML e CSS?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
    {
      id: "2",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "HTML" },
        { id: "2", type_name: "CSS" }
      ],
      title: "O que é PHP e para que ele serve?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
    {
      id: "3",
      image_url: "html-css-javascript.webp",
      types: [
        { id: "1", type_name: "PHP" }
      ],
      title: "Como funciona a internet, e o quais são as linguagens conhecidas como a tríade do Front-end?",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ler artigo"
    },
  ];

  project = [
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

  tiktok = [
    {
      id: "1",
      image_url: "setup.png",
      types: [
        { id: "1", type_name: "Vscode" },
        { id: "2", type_name: "Git" },
        { id: "3", type_name: "MySQL" },
      ],
      title: "Instalando Ambiente de Desenvolvimento",
      description: "Recentemente, percebi que o pessoal de T.I tem uma breve dificuldade em começar a programar, então sempre recomendo a todos, a primeiro entender como funciona a internet e também como funciona HTML, CSS e JavaScript...",
      nameToPost: "Ver video"
    }
  ];
}
