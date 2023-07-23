import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-page">
    
      
     
      <p>
          <a href="https://bryanbattleship.surge.sh/" target="blank" rel="noopener noreferrer">
        Battleship Game
      </a>
        : <br />Languages Used: HTML, JavaScript, CSS Function:
        Front-end web browser game of the classic two-player board game
        Battleship. It allows users to play against each other by placing ships
        on a grid and attempting to guess the location of the opponent's ships.
      </p>
      <p>
    <a href="https://thelibationstation.netlify.app/" target="blank" rel="noopener noreferrer">
        The Libation Station
      </a>
        : <br /> Languages Used: React (JavaScript, JSX),
        HTML, CSS Function: A React application that organizes cocktail
        information from a backend API and displays ingredients and recipes on
        the front end. Users can explore various cocktails and their recipes.
      </p>
      <p>
     <a href="https://daily-dish.netlify.app/" target="blank" rel="noopener noreferrer">
        DailyDish
      </a>
       : <br />Languages Used: MERN-stack (MongoDB, Express.js,
        React, Node.js), Bootstrap, HTML, CSS Function: A MERN-stack application
        that allows users to create an account for a weekly food subscription
        service. Users can select meals and manage their weekly food
        subscription.
      </p>
      <p>
    
        Get it Done! (In Progress): <br /> Languages Used: MongoDB, Mongoose,
        Express.js, React (JavaScript, JSX), Node.js, HTML, CSS Function: A
        full-stack application aimed at helping users efficiently manage tasks.
        The application will allow users to create, read, update, and delete
        tasks, providing a simple and effective task management system.
      </p>
    </div>
  );
};

export default Projects;
