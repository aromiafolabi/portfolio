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

function Skills () {

  return (
    <div className="skills-container" id="skills">
      <div className="row skills-rows">
          <div className="col-lg-12 text-center">
            <h1 className="skills-title">Skills</h1>
            </div>        
        <div className="col-lg-2 col-md-4 text-center">
        <img src={djangoIcon}  className="skill-icon" alt="Django Icon" /> 
        <p className="mb-0">Django</p>       
        </div>    
      <div className="col-lg-2 col-md-4 text-center">
        <img src={expressIcon}  className="skill-icon" alt="Express Icon" />
        <p className="mb-0">Express</p>   
        </div>         
      <div className="col-lg-2 col-md-4 text-center">
        <img src={herokuIcon}  className="skill-icon" alt="Heroku Icon" />
        <p className="mb-0">Heroku</p>   
        </div>     
      <div className="col-lg-2 col-md-4 text-center">
        <img src={cssIcon}  className="skill-icon" alt="CSS Icon" />
        <p className="mb-0">CSS</p>    
        </div>        
      <div className="col-lg-2 col-md-4 text-center">
        <img src={htmlIcon}  className="skill-icon" alt="HTML Icon" />
        <p className="mb-0">HTML5</p>     
        </div>         
      <div className="col-lg-2 col-md-4 text-center">
        <img src={jsIcon}  className="skill-icon" alt="JavaScript Icon" />
        <p className="mb-0">JavaScript</p>    
        </div>     
      <div className="col-lg-2 col-md-4 text-center">
        <img src={nodejsIcon}  className="skill-icon" alt="Node Icon" />
        <p className="mb-0">Node</p>    
        </div>     
      <div className="col-lg-2 col-md-4 text-center">
        <img src={postgresIcon}  className="skill-icon" alt="PostgreSQL Icon" />
        <p className="mb-0">PostgreSQL</p>    
        </div>       
      <div className="col-lg-2 col-md-4 text-center">
        <img src={pythonIcon} className="skill-icon" alt="Python Icon" />
        <p className="mb-0">Python</p>    
        </div>          
      <div className="col-lg-2 col-md-4 text-center">
        <img src={reactIcon} className="skill-icon" alt="React Icon" />
        <p className="mb-0">React</p>    
        </div>          
      <div className="col-lg-2 col-md-4 text-center">
        <img src={sassIcon} className="skill-icon" alt="Sass Icon" />      
        <p className="mb-0">Sass</p>     
      </div>    
      <div className="col-lg-2 col-md-4 text-center">
        <img src={insomniaIcon}  className="skill-icon" alt="Insomnia Icon" />
        <p className="mb-0">Insomnia</p>   
        </div>      
      <div className="col-lg-2 col-md-4 text-center">
        <img src={bootstrapIcon}  className="skill-icon" alt="bootstrap Icon" />
        <p className="mb-0">Bootstrap</p>   
        </div>      
      <div className="col-lg-2 col-md-4 text-center">
        <img src={npmIcon} className="skill-icon" alt="npm Icon" />
        <p className="mb-0">NPM</p>    
        </div>     
      <div className="col-lg-2 col-md-4 text-center">
        <img src={githubIcon}  className="skill-icon" alt="github Icon" />
        <p className="mb-0">GitHub</p>   
      </div>
      </div>
      </div>    
      )

  }

      export default Skills