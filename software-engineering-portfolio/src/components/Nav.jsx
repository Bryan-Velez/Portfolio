import { Link } from "react-router-dom"

const Nav = () => {
    return (

        <div className="nav">
            <div className="nav-logo">
                <Link to="/">
                    <img src="https://github.com/Bryan-Velez/Portfolio/blob/main/software-engineering-portfolio/src/assets/mushroom.png/mushroom.png" alt="logo" />
                </Link>
            </div>
            <div className="nav-links">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/projects">Projects</Link>
                <Link to ="/resume">Resume</Link>
                <Link to ="/contact">Contact</Link>
                
            </div>
        </div>
    )
}

export default Nav 


