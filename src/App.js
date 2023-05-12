import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer.jsx";
import PaymentSection from './components/PaymentSection/PaymentSection';
function App() {
  return (
    <div className="App">
      <Header />
      <PaymentSection />
      <Footer />
    </div>
  );
}

export default App;
