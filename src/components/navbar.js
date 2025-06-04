
import logo from '../images/logo.svg';
import {sociallinks }from '../data';
import Pagelinkscomponent from './pagelinks';

const Navbar = () =>{
    return (
  <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">

          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
       
          <Pagelinkscomponent parentClass="nav-links" itemClass="nav-link" />
 
        <ul className="nav-icons">
          {sociallinks.map((link) => {
          const {id,href,icon} = link;
                return (
                 <li key={id}>
            <a href={href}
             target="_blank"
             rel="noreferrer"
              className="nav-icon"
              >
                <i className={icon}></i>
                </a>
          </li>
                )
          })}
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;