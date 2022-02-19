import djangoIcon from '../assets/django.svg'
import expressIcon from '../assets/expressjs.svg'
import herokuIcon from '../assets/heroku.svg'
import cssIcon from '../assets/icons8-css3.svg'
import htmlIcon from '../assets/icons8-html-5.svg'
import jsIcon from '../assets/icons8-javascript-logo.svg'
import nodejsIcon from '../assets/icons8-nodejs.svg'
import postgresIcon from '../assets/icons8-postgresql.svg'
import pythonIcon from '../assets/icons8-python.svg'
import reactIcon from '../assets/icons8-react.svg'
import sassIcon from '../assets/icons8-sass.svg'
import insomniaIcon from '../assets/insomnia.svg'
import bootstrapIcon  from '../assets/icons8-bootstrap.svg'
import npmIcon from '../assets/icons8-npm.svg'
import githubIcon from '../assets/github.svg'

// import tableplusIcon from '../assets/tableplus.svg'


function AboutMe() {
  return (
    <div className="about-me-container" id="about">
      <div className="about-me-details-container">
      <div className="about-me-title">
      <h1>AboutMe</h1>
      </div>
      <p>
        Hi, my name is Aromi. I am a full stack developer from London. 
      </p>
      <p>
        My previous role as an advisor enabled me to develop skills in negotiations, 
        policy developement, strategy, project management and delivery.
        Over the course of my time at my previous role, I was instrumental in the signing of 2 trade deals.
      </p>
      <p>
        Moving into web development was a natural progression for me as i have always been interested in technology and self taught in my spare time.
        I wanted to immerse myself more into software development, 
        so i enrolled in the Software Engineering Immersive course at General Assembly, 
        which has been a great way for me to combine the skills obtained at my previous role and technical skills.
      </p>
      </div>
      <div className="about-me-technologies conatiner">
        <h1>Skills</h1>
        <div className="tech-container my-5">
        <div className="skill-container">
          <img src={djangoIcon} height="100" className="skill-icon"  alt="Django Icon"/>
        </div>
        <div className="skill-container">
          <img src={expressIcon} height="100" className="skill-icon"  alt="Express Icon"/>
        </div>
        <div className="skill-container">
          <img src={herokuIcon} height="100" className="skill-icon"  alt="Heroku Icon"/>
        </div>
        <div className="skill-container">
          <img src={cssIcon} height="100" className="skill-icon"  alt="CSS Icon"/>
        </div>
        <div className="skill-container">
          <img src={htmlIcon} height="100" className="skill-icon"  alt="HTML Icon"/>
        </div>
        <div className="skill-container">
          <img src={jsIcon} height="100" className="skill-icon"  alt="JavaScript Icon"/>
        </div>
        <div className="skill-container">
          <img src={nodejsIcon} height="100" className="skill-icon"  alt="Node Icon"/>
        </div>
        <div className="skill-container">
          <img src={postgresIcon} height="100" className="skill-icon"  alt="PostgreSQL Icon"/>
        </div>
        <div className="skill-container">
          <img src={pythonIcon} height="100" className="skill-icon"  alt="Python Icon"/>
        </div>
        <div className="skill-container">
          <img src={reactIcon} height="100" className="skill-icon"  alt="React Icon"/>
        </div>
        <div className="skill-container">
          <img src={sassIcon} height="100" className="skill-icon"  alt="Sass Icon"/>
        </div>
        <div className="skill-container">
          <img src={insomniaIcon} height="100" className="skill-icon"  alt="Insomnia Icon"/>
        </div>
        <div className="skill-container">
          <img src={bootstrapIcon} height="100" className="skill-icon"  alt="Insomnia Icon"/>
        </div>
        <div className="skill-container">
          <img src={npmIcon} height="100" className="skill-icon"  alt="Insomnia Icon"/>
        </div>
        <div className="skill-container">
          <img src={githubIcon} height="100" className="skill-icon"  alt="Insomnia Icon"/>
        </div>

      </div>
    </div>
    </div>
  );
}

export default AboutMe;
