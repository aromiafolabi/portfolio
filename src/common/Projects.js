import ketoKitchen from '../assets/keto-kitchen.png'
import finalSpace from '../assets/final-space.png'
import gymInvaders from '../assets/gym-invader.png'
import honeyThyme from '../assets/honey-thyme.png'
import { Carousel } from '3d-react-carousal'
// import djangoIcon from '../assets/django.svg'
// import expressIcon from '../assets/expressjs.svg'
// import herokuIcon from '../assets/heroku.svg'
// import cssIcon from '../assets/icons8-css3.svg'
// import htmlIcon from '../assets/icons8-html-5.svg'
// import jsIcon from '../assets/icons8-javascript-logo.svg'
// import nodejsIcon from '../assets/icons8-nodejs.svg'
// import postgresIcon from '../assets/icons8-postgresql.svg'
// import pythonIcon from '../assets/icons8-python.svg'
// import reactIcon from '../assets/icons8-react.svg'
// import sassIcon from '../assets/icons8-sass.svg'
// import insomniaIcon from '../assets/insomnia.svg'
// import bootstrapIcon  from '../assets/icons8-bootstrap.svg'
// import npmIcon from '../assets/icons8-npm.svg'
// import githubIcon from '../assets/github.svg'
// import Carousel from 'react-material-ui-carousel'
// import { Button } from '@mui/material'
// import { styled } from '@mui/styles'


export default function Projects() {
  const projects = [
    {
      name: 'Project-4: Honey&Thyme',
      image: honeyThyme,
      // technologies: ['pythonIcon', 'djangoIcon', 'reactIcon', 'jsIcon',  'cssIcon','htmlIcon', 'githubIcon','herokuIcon'],
      description: 'Pinterest clone of cocktails that allows users to register and login, save cocktails, comment on cocktails and search for cocktails',
      links: {
        demo: 'https://honey-thyme.netlify.app',
        gitHub: 'https://github.com/aromiafolabi/Honey-Thyme-FE',
      },
    },
    {
      name: 'Project-3: Keto-Kitchen',
      image: ketoKitchen,
      // technologies: ['devicon-python-plain', 'devicon-django-plain', 'devicon-postgresql-plain', 'devicon-javascript-plain','devicon-react-original-wordmark',  'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain','devicon-heroku-original'],
      description: 'Use agile methodology to run 4-week personal growth and development sprints utilising a personal dashboard. Full stack app. 10-day sprint, 3-person team.',
      links: {
        demo: 'https://ketokitchen.netlify.app',
        gitHub: 'https://github.com/aromiafolabi/ketokitchen-front-end',
      },
    },
    {
      name: 'Project-2: FinalSpace',
      image: finalSpace,
      // technologies: ['devicon-javascript-plain', 'devicon-nodejs-plain', 'devicon-express-original', 'devicon-mongodb-plain-wordmark', 'devicon-react-original-wordmark', 'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain', 'devicon-heroku-original'],
      description: 'A new take on Netflix where you can choose movies based on your current mood. Full stack MERN app. 10-day sprint, 3-person team.',
      links: {
        demo: 'https://aromifinalspace.netlify.app',
        gitHub: 'https://github.com/aromiafolabi/final-space',
      },
    },
    {
      name: 'Project-1: Gym Invaders',
      image: gymInvaders,
      // technologies: ['devicon-react-original-wordmark', 'devicon-javascript-plain', 'devicon-sass-original','devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-git-plain'],
      description: 'A multiple-choice quiz generator that consumes a public API. 28-hour hackathon, pair programming.',
      links: {
        demo: 'https://aromiafolabi.github.io/gym-invaders/',
        gitHub: 'https://github.com/aromiafolabi/gym-invaders',
      },
    },
  ]

  return (
    <>
    <div className="component-container dark" id="projects"> 
    <div className="column-flex-container">
      <div className="projects-title-description-container">
        <h1 className="projects-title">Projects</h1>
        <p>Our learning in the General Assembly's Software Engineering Immersive was consolidated with four projects</p>
      </div>
  <Carousel           
    slides = {
      projects.map(project => {
        return (                 
          <>
          <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={project.image} className="project-images" alt={project.name}></img>
          <div className="project-name-description-container">
          <h2 className="project-name medium-title">{project.name}</h2>
          <p className="project-description">{project.description}</p>
          </div>
          <div className="project-links">
            <div className="project-link-demo">
          <a className="btn btn-primary" role="button" href={project.links.demo} target="blank"> Website </a>
          </div>
          <div className="project-link-code">
          <a className="btn btn-primary" role="button" href={project.links.gitHub} target="blank"><i class="bi bi-github"></i> GitHub </a>
          </div>
          </div>
          </div>
          </div>
          </>
            )
          })
          }
    autoplay={false}
    className="carousel"         
  />
  
</div>
</div>

    </>
  );
}

// <div className="component-container dark" id="projects"> 
// <div className="column-flex-container">
//   <h1 className="title-font">Projects</h1>
//   <p>Our learning in the General Assembly Software Engineering Immersive was consolidated with four projects:</p>
//   <Carousel           
//     slides = {
//       projects.map(project => {
//         return (                 
//           <>
//           <h2 className="project-name medium-title">{project.name}</h2>
//           <img src={project.image} className="project-img" alt={project.name}></img>
//           </>
//             )
//           })
//           }
//     autoplay={false}
//     className="carousel"              
//   />
//   { 
//   projects.map(project => {
//     return (
//       <>
//       <div className="container">
//         <div className="row row-cols-2">
//           <div className="col">
//       <h2 className="project-name medium-title">{project.name}</h2>
//       <h3 className="project-desc">{project.description}</h3>
//       <div className="project-button-container">
//         <button className="CheckButton">
//           <a href={project.links.demo} target="_blank" rel="noreferrer" className="cursor demo-link">see the website</a>
//         </button>
//         <button className="CheckButton">
//           <a href={project.links.gitHub} target="_blank" rel="noreferrer" className="cursor repo-link"><i className="devicon-github-original"></i> see the code</a>
//         </button>
//       </div>
//       </div>
//       </div>
//       </div>
//       </>
//     )
//   })
//   }

//   </div>
// </div>

// <hr className="section-break-left"/>