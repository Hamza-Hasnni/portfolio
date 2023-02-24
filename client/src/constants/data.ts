import images from './images';

const skills =[
    {name:'Node', icon: images.node, bgColor: '#fff'},
    {name:'React', icon: images.react, bgColor: '#fff'},
    {name:'Javascript', icon: images.javascript, bgColor: '#fff'},
    {name:'Redux', icon: images.redux, bgColor: '#fff'},
    {name:'Sass', icon: images.sass, bgColor: '#fff'},
    {name:'Typescript', icon: images.typescript, bgColor: '#fff'},
    {name:'Git', icon: images.git, bgColor: '#fff'},
    {name:'HTML', icon: images.html, bgColor: '#fff'},
    {name:'CSS', icon: images.css, bgColor: '#fff'},
  ]
  const experiences = [
      {year:'2022-Present', works: [{name:'Instructor', company: 'GoMyCode', desc: 'create a canvas project using canvasJs'}]},
    {year:'2021', works: [{name:'freelance', company: 'UpWork', desc: 'create a canvas project using canvasJs'}]},
  ]
  const abouts =[
    {title:'Front-End', description: 'Create UI/UX web app using ReactJs', imgUrl: images.about01},
    {title:'Back-End', description: 'Create Backend app using NodeJs', imgUrl: images.about03},
    {title:'Full-Stack', description: 'Create MERN app', imgUrl: images.about04},
]



const works  = [
  {
    tags: ["Front-End", "JavaScript"],
    imgUrl: images.calculator,
    name: "Project 1",
    projectLink: "https://hamza-hasnni.github.io/calculator/",
    codeLink: "https://github.com/Hamza-Hasnni/calculator",
    title: "Javascript calculator",
    description: "my first project in front end development",
  },
  {
    tags: ["Angular", "TypeScript"],
    imgUrl: "https://example.com/image2.png",
    name: "Project 2",
    projectLink: "https://example.com/project2",
    codeLink: "https://example.com/project2-code",
    title: "Project 2 Title",
    description: "Description of Project 2",
  },
  {
    tags: ["React JS", "Redux", "TypeScript"],
    imgUrl: "https://example.com/image3.png",
    name: "Project 3",
    projectLink: "https://example.com/project3",
    codeLink: "https://example.com/project3-code",
    title: "Project 3 Title",
    description: "Description of Project 3",
  },
];
  export {
    skills,
    experiences,
    abouts,
    works,
  }