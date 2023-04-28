
import Navbar from './Components/Header/Navbar'
import About from './Screens/About';
import BuyNow from './Screens/BuyNow';
import FirstPage from './Screens/FirstPage';
import Atokens from './Screens/Atokens'
import Features from './Screens/Features';
import Partners from './Screens/Partners';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
      <About/>
      <Atokens/>
      <Features/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;

