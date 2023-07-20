import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Catalog from './components/Catalog/Catalog';
import InfoSection from './components/InfoSection/InfoSection';
import PriceSection from './components/PriceSection/PriceSection';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';

function App() {
  let age = 30
  let message = age <= 18 ? "Welcome" : " Not welcome";
  console.log(message)

  return (
    <div className="App">
      <nav>
        <ToolBar />
        <NavBar />
      </nav>
      <header>
        <Banner />
      </header>
      <main>
        <Catalog />
        <InfoSection />
        <PriceSection />
      </main>
      <footer>
        <Footer />
        <Footer2 />
      </footer>
    </div>
  );
}

export default App;
