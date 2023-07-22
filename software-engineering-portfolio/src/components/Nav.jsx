import { Link } from "react-router-dom"

const Nav = () => {
    return (

        <div className="nav">
           
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


