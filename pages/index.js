import Banner from '../components/Homepage/Banner';
import Blog from '../components/Homepage/Blog';
import BusinessSolutions from '../components/Homepage/BusinessSolutions';
import Tools from '../components/Homepage/Tools';
import Unidades from '../components/Homepage/Unidades';

export default function Home() {
  return (
    <div className='App'>
      <Banner />
      <Tools />
      <BusinessSolutions />
      <Unidades />
      <Blog />
    </div>
  );
}
