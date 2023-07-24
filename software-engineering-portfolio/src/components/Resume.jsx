import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-page">
      <Link
        to={
          "https://drive.google.com/file/d/1WVONmUVoQL4eWQa9_40oDneUCzAVq0ce/view?usp=sharing"
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
      <h2 style={{backgroundImage:'radial-gradient(circle, white, rgb(208, 30, 240, 0))', color: 'black'}}>Software Engineer</h2>
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
      <h2 style={{backgroundImage:'radial-gradient(circle, white, rgb(208, 30, 240, 0))', color: 'black'}}>Skills and Expertise</h2>
      <p>
        HTML | CSS | JavaScript | Node.js | Express | Github | MongoDB |
        Mongoose | React | Python | Django | SQL
      </p>
      ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
      ● ● ● ● ● ● ●
      <h2 style={{backgroundImage:'radial-gradient(circle, white, rgb(208, 30, 240, 0))', color: 'black'}}>Technical Project Experience</h2>
      <div
        style={{
          backgroundImage:
          "linear-gradient( to right, rgb(208, 30, 240, 0), black, rgb(208, 30, 240, 0))",
            borderTop: '2px solid white',
        }}
      >
        <h3 style={{backgroundImage: "linear-gradient( to right, rgb(208, 30, 240, 0), grey, rgb(208, 30, 240, 0))"}}>Battleship</h3>
        Front-end web browser game of the two-player classic board game
        Battleship
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
      <div
        style={{
          backgroundImage:
          "linear-gradient( to right, rgb(208, 30, 240, 0), black, rgb(208, 30, 240, 0))",
            // borderTop: '2px solid rgba(255, 255, 255, .4)'
        }}
      >
        <h3 style={{backgroundImage: "linear-gradient( to right, rgb(208, 30, 240, 0), grey, rgb(208, 30, 240, 0))"}}>The Libation Station</h3>
        React application that organizes and cocktail API information on
        backend, and displays ingredients and recipes on the front end.
        <ul style={{ textAlign: "left" }}>
          <li>
            Pair programmed with 2 software developers effectively, avoiding
            conflicts by applying version control and working in our own
            branches, regular communication, and task delegation to build a
            fully functional React application.
          </li>
          <li>
            {" "}
            Imported and implemented necessary dependencies from different
            libraries, including React, axios, and react-router-dom.{" "}
          </li>
          <li>
            Integrated 3rd party API call by performing an asynchronous
            operation to fetch information for when the components mount.
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
            Implemented ES6 tagged template literals with Styled-Components
            along CSS3 to provide style and flexbox layout.
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundImage:
          "linear-gradient( to right, rgb(208, 30, 240, 0), black, rgb(208, 30, 240, 0))",
        }}
      >
        <h3 style={{backgroundImage: "linear-gradient( to right, rgb(208, 30, 240, 0), grey, rgb(208, 30, 240, 0))"}}> Daily Dish</h3>
        MERN-stack application that allows users to create an account to a
        weekly food subscription service.
        <ul style={{ textAlign: "left" }}>
          <li>
            {" "}
            Assigned specific tasks or features to individual team members
            helping to minimize overlap and reduce the chances of conflicting
            changes.
          </li>
          <li>
            Maintained open and consistent communication among team members by
            regularly discussing the progress of tasks, sharing updates, and
            informing others about code changes.
          </li>
          <li>
            Utilized React.js as the JavaScript library for building the
            frontend.
          </li>
          <li>Employed React Context API for state management.</li>
          <li>
            Styled the application using custom SCSS and Bootstrap v5.3.0 for
            responsive layouts.
          </li>
          <li>Used React Router v6.14.0 for client-side routing.</li>
          <li>Integrated Stripe v1.54.1 and v2.1.1 for processing payments.</li>
          <li>
            Implemented user authentication with bcrypt.js v2.4.3 for password
            hashing, allowing meal plan selection, payment processing, and user
            account management features.
          </li>
          <li>
            Assisted in backend by researching and populating seed data for
            recipes & ingredients.
          </li>
          <li>
            Responsible for managing the meal service selection process in the
            application. Which navigates through steps allowing for user input
            and interactions, calculates the total price based on selected
            options, and manages the UI based on the current step.
          </li>
          <li>
            Applied a mobile-first approach to the application's design for a
            seamless experience across devices.
          </li>
        </ul>
      </div>
      ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
      ● ● ● ● ● ● ●
      <div
        style={{
          backgroundImage:
            "linear-gradient( to right, rgb(208, 30, 240, 0), black, rgb(208, 30, 240, 0))",
            borderBottom: "2px solid white"
        }}
      >
        <h2 style={{backgroundImage:'radial-gradient(circle, white, rgb(208, 30, 240, 0))', color: 'black'}}>Experience</h2>
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
          activities, directing the movement of residents and guests, and
          ensuring a secure environment. Safeguarded the neighborhood by
          conducting regular patrols to check for any signs of intrusion,
          damage, or potential threats, while also ensuring all properties were
          properly secured. Implemented a systematic and organized data logging
          process to record and register visitor, resident, and vehicle
          information, contributing to an efficient tracking system.
        </p>
        <h2 style={{backgroundImage:'radial-gradient(circle, white, rgb(208, 30, 240, 0))', color: 'black'}}>Education</h2>
        <p>
          General Assembly | Software Engineering Immersive |Remote May
          2023-August 2023
        </p>
        <p>
          Florida Gulf Coast University | Bachelors in Business Management |
          August 2012-May 2014
        </p>
      </div>
    </div>
  );
};

export default Resume;
