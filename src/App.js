import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingHomePage from "./components/MontraPrice/view/HomePage/HomePage"
import PricingHeader from "./components/MontraPrice/Header/Header";
function App() {
  return (
    <div className="App">
      <PricingHeader />
      <PricingHomePage />

    </div>
  );
}

export default App;
