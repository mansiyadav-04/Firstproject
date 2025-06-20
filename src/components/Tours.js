import Title from './Title';
import { tourdata } from '../data';
import Tour from './Tour';


const Tours = () => {
  return (

    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tourdata.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )}
export default Tours;

