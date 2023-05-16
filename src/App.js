import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentHeader from "./components/MontraPaymentLink/Header/Header";
import NewPayment from './components/MontraPaymentLink/NewPayment/NewPayment';

function App() {
  return (
    <div className="App">
<PaymentHeader/>
<NewPayment/>
    </div>
  );
}

export default App;
