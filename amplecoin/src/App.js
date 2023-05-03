
import Navbar from './Components/Header/Navbar'
import About from './Screens/About';
import BuyNow from './Screens/BuyNow';
import FirstPage from './Screens/FirstPage';
import Atokens from './Screens/Atokens'
import Features from './Screens/Features';
import Partners from './Screens/Partners';
import Footer from './Components/Footer/Footer';
import Roadmap from './Components/Roadmap'
import Newnavbar from './Components/Header/Newnavbar'


function App() {
  return (
    <div>
      <Newnavbar/>
      <FirstPage/>
      <About/>
      <Atokens/>
      <Features/>
      <Roadmap />
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;

