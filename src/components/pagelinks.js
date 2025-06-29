import {Pagelinks} from '../data';
  
const Pagelinkscomponent = ({ parentClass, itemClass }) => {
    return(
            <ul className={parentClass} id="nav-links">
              {Pagelinks.map((link)=>{
              return (
                  <li key={link.id}>
                    <a href={link.href} className={itemClass}>
                       {link.text}
                       </a>
                  </li>
                  );
             })}
       </ul>
    )
}
export default Pagelinkscomponent;


 