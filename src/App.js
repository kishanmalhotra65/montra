import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer.js";
// import HomePage from "./components/view/HomePage/HomePage.js";
import BusinessPage from "./components/business/BusinessPage.js";
function App() {
  return (
    <div className="App">
      <Header />
        <BusinessPage/>
      <Footer />
    </div>
  );
}

export default App;
