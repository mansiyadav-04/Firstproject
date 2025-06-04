
import {sociallinks } from "../data";
import Pagelinkscomponent from './pagelinks';
const Footer = () =>{
    return (
<footer className="section footer" id="tour">
       
        <Pagelinkscomponent parentClass="footer-links" itemClass="footer-link" />
    
      <ul className="footer-icons"> 
        {sociallinks.map((link)=>{
         const {id,href,icon} = link;
         return(
           <li key={id}>
          <a href={href} target="_blank" rel="noreferrer" 
          className="footer-icon"
            ><i className={icon}></i></a>
        </li>
         );
        })}
      </ul>



      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    )
 }

 export default Footer;
