import Title from './Title';
import { servicelinks } from '../data';
import MyServicecard from './Servicecard';

const Services = () =>{
    return (
 <section className="section services" id='services'>
  <Title title='Our' subtitle='Services'/>   
      <div className="section-center services-center">
       {servicelinks.map((Service)=>{
        return <MyServicecard key={Service.id} {...Service}/>
       })}
      </div>
    </section>
    )
 }

 export default Services;