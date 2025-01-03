import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEjjd4h9lTr4w/profile-displayphoto-shrink_400_400/B56ZQeVke6HQAk-/0/1735675760168?e=1741219200&v=beta&t=GB_tHwl3nhJuMVHXOOIi1JsFKo3nKXCggvgiF2BUnPM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sarathkrishna869" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sarath-krishna-ck/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sarath Krishna C K</h1>
          <p>Software Tester | Devoloper | AI/ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;