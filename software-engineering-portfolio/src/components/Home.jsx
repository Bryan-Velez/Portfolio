import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">

      <div className="home-content">
        
        <img
          src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/About%20Picture.jpeg?raw=true"
          alt="Image Missing"
          className="intro-picture"
        />
      </div>

      <p className="intro">
      <strong style={{fontSize: '30px'}} className="welcome"> Welcome!</strong>
      <br />
      <br />
        My name is Bryan Velez.<br /> I'm a committed and enthusiastic software
        engineer with a flair for creative problem-solving and a keen eye for
        innovative design. Maintaining a focus on front-end development and
        video game design, I strive to deliver seamless and captivating user
        experiences. Throughout my journey, I have honed my skills to deliver
        results I can be proud of, pushing myself to expand my knowledge and
        expertise continuously.
        <br />
        <br />
        In this space, you'll find a showcase of my projects, each reflecting my
        commitment to blending ingenuity with artistic design. I believe the
        journey to being a great developer begins with a passion for technology
        and user-centric design to create extraordinary functional solutions.
        Let's connect and explore the boundless possibilities of tomorrow's
        digital landscape together.
      </p>
    </div>
  );
};

export default Home;
