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
    name: "JS Calculator",
    projectLink: "https://hamza-hasnni.github.io/calculator/",
    codeLink: "https://github.com/Hamza-Hasnni/calculator",
    title: "Javascript calculator",
    description: "my first project in front end development",
  },
  {
    tags: ["React JS", "Figma"],
    imgUrl: images.gpt3,
    name: "GPT-3",
    projectLink: "https://hamza-hasnni.github.io/gpt-3-ux-ui/",
    codeLink: "https://github.com/Hamza-Hasnni/gpt-3-ux-ui",
    title: "GPT-3",
    description: "Change GPT-3 design to a beuatfualt website",
  },
];
  export {
    skills,
    experiences,
    abouts,
    works,
  }