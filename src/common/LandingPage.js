import arrow from '../assets/down-arrow.svg'

function LandingPage() {
  return (
    <div className="landing-page-container" id="#/">
      <div className="wrapper">
      <div className="wrapper-text">       
          <h2 className="firstline"> Hi, </h2> 
          <h2 className="secondline"> I'm Aromi!</h2> 
          <h2 className="thirdline"> An Environmental Engineer 👩🏾‍🔬 </h2>
          <h2 className="fourthline"> turned Software Engineer 👩🏾‍💻 </h2>
          <h2 className="fifthline" id="aboutme"> Find out more about me! </h2>   
          <a href="#aboutme"><img src={arrow} className="arrow" alt="arrow" /></a>    
        </div>    
    </div>
    </div>
  );
}

export default LandingPage;