import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <Link to={"https://www.linkedin.com/in/bryanvelez-se/"} target="_blank" rel="noopener noreferrer" style={{width:'10px'}}>
          <img
            src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/Linkedin%20Icon.png?raw=true"
            alt="LinkedIn"
          />
          
        </Link>
        <Link to={"mailto:your.b.velez205@gmail.com"} target="_blank" rel="noopener noreferrer">
          
          <img
            src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/Gmail%20Icon.png?raw=true"
            alt="B.velez205@gmail.com"
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
