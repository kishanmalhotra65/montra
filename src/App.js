import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer.js";
import HomePage from "./components/view/HomePage/HomeSection/HomePage";
function App() {
  return (
    <div className="App">
      <Header />
        <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
