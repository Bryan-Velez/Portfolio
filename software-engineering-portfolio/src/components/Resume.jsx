import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-page">
      <Link
        to={
          "https://drive.google.com/file/d/1nQWaFtQFjhg0WRs0wyEIP4tnWLKGuxaw/view?usp=sharing"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to view the PDF
        <img
          src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/Resume%20Icon.png?raw=true"
          alt=""
          style={{ 
            // border: '10px solid white', 
            // borderRadius: '100px',
            width: "8vw",
             }}
        />
      </Link>

      <h1>Resume</h1>
      <h1>Bryan Velez</h1>
      <h2>Software Engineer</h2>
      <p>
        Dedicated software engineer with a passion for creating innovative
        designs that align with consumer demand in finding solutions and
        creating products that are sustainable over time. I have a background in
        meeting customer and employer needs under pressure and am driven by a
        passion for expanding my knowledge and skills. I thrive on solving
        complex coding challenges with creative thinking and problem-solving
        skills. My goal is to apply my creativity to front-end development and
        video game design, focusing on enhancing user interfaces through
        interactive, seamless, and responsive features and services. I am
        committed to improving user experiences through approachable navigation
        in websites and software, ensuring inclusivity and accessibility for
        all. Moreover, I aim to provide user-friendly and effective results by
        incorporating functionality and aesthetics.
      </p>
      <h2>Skills and Expertise</h2>
      <p>
        HTML | CSS | JavaScript | Node.js | Express | Github | MongoDB |
        Mongoose | React | Python | Django | SQL
      </p>
      <h2>Technical Project Experience</h2>

      <div>
        <h3>
          Battleship - Front-end web browser game of the two-player classic
          board game Battleship
        </h3>
        <ul style={{ textAlign: "left" }}>
          <li>
            Created a structured HTML file to set up a layout of the page.
          </li>
          <li>
            {" "}
            Used DOM manipulation methods to select and interact with elements
            in the HTML{" "}
          </li>
          <li>
            Inserted Javascript code to provide transitions, pulls and
            animations within the game
          </li>
          <li>
            Created elements and arrays within Javascript to facilitate dry code
            and store and process data.
          </li>
          <li>
            Managed the use of Event listeners to add drag and drop and rotation
            functionality to the player ships as well as interaction with the
            enemy game board.
          </li>
          <li>
            {" "}
            Employed Object-Oriented-Programing principles by defining a class
            to create objects with specific properties.
          </li>
          <li>
            {" "}
            Manipulated CSS classes to control the appearance and behavior of
            HTML element.
          </li>
          <li>
            Applied use of conditional statements to maneuver the flow of
            execution based on certain conditions. (valid ship placement,
            winning and losing conditions.)
          </li>
        </ul>
      </div>

      <h3>
        The Libation Station - React application that organizes and cocktail API
        information on backend, and displays ingredients and recipes on the
        front end.
      </h3>
      <ul style={{ textAlign: "left" }}>
        <li>
          Pair programmed with 2 software developers effectively, avoiding
          conflicts by applying version control and working in our own branches,
          regular communication, and task delegation to build a fully functional
          React application.
        </li>
        <li>
          {" "}
          Imported and implemented necessary dependencies from different
          libraries, including React, axios, and react-router-dom.{" "}
        </li>
        <li>
          Integrated 3rd party API call by performing an asynchronous operation
          to fetch information for when the components mount.
        </li>
        <li>
          Engineered routes that render different components based on the
          current URL path.
        </li>
        <li>
          {" "}
          Utilized hooks to enable functional components to have state
          management, perform side effects, access location data, and retrieve
          URL parameters.
        </li>
        <li>
          Implemented ES6 tagged template literals with Styled-Components along
          CSS3 to provide style and flexbox layout.
        </li>
      </ul>

      <h2>Experience</h2>
      <p>
        Boston Beer Garden - Server/ Bartender October 2021-February 2023
        Demonstrated Comprehensive product knowledge encompassing the menu,
        specials and events. Fostered positive relationships with customers,
        resulting in heightened satisfaction and enhanced loyalty to the
        restaurant. Contributed to the training of new hires, providing
        necessary guidance and valuable insight into understanding company
        policies, procedures, and in-depth knowledge of food and beverage
        offerings.
      </p>
      <p>
        Securitas Security Company - Security Officer October 2019-September
        2021 Maintained community security through vigilant monitoring of
        activities, directing the movement of residents and guests, and ensuring
        a secure environment. Safeguarded the neighborhood by conducting regular
        patrols to check for any signs of intrusion, damage, or potential
        threats, while also ensuring all properties were properly secured.
        Implemented a systematic and organized data logging process to record
        and register visitor, resident, and vehicle information, contributing to
        an efficient tracking system.
      </p>
      <h2>Education</h2>
    </div>
  );
};

export default Resume;
