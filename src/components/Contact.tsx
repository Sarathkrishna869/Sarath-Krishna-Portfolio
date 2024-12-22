import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Let's connect and collaborate!</p>
          <Box className="contact-info">
            <div className="info-item">
              <EmailIcon className="icon" />
              <a href="mailto:sarathkrishna869@gmail.com">sarathkrishna869@gmail.com</a>
            </div>
            <div className="info-item">
              <PhoneIcon className="icon" />
              <a href="tel:+918137903858">+918137903858</a>
            </div>
            <div className="social-icons">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/sarathkrishnack"
                target="_blank"
                aria-label="LinkedIn"
                className="icon-button"
              >
                <LinkedInIcon className="icon" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/sarathkrishna869"
                target="_blank"
                aria-label="GitHub"
                className="icon-button"
              >
                <GitHubIcon className="icon" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/sarathkrishna869"
                target="_blank"
                aria-label="Instagram"
                className="icon-button"
              >
                <InstagramIcon className="icon" />
              </IconButton>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
