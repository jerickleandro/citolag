import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Nav1 from './components/Nav/Nav1';
import Nav2 from './components/Nav/Nav2';
import Apps from '../components/Homepage/Apps';
import Banner from '../components/Homepage/Banner';
import BusinessSolutions from '../components/Homepage/BusinessSolutions';
import EliteBanking from '../components/Homepage/EliteBanking';
import LoanCalculator from '../components/Homepage/LoanCalculator';
import Ticker from '../components/Homepage/Ticker';
import Tools from '../components/Homepage/Tools';
import Splashscreen from './views/Splashscreen';
import Unidades from '../components/Homepage/Unidades';

function App() {
  return (
    <div className='App'>
      {/* <Splashscreen /> */}
      {/* <Nav1 /> */}
      <Nav2 />
      <Banner />
      <Tools />
      {/* <Ticker /> */}
      <BusinessSolutions />
      <Unidades />
      {/* <EliteBanking />
      <LoanCalculator /> */}
      
      {/* <Apps /> */}
      <Footer />
    </div>
  );
}

export default App;
