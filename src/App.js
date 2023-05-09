import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{"backgroundColor": "#FFFFFF"}}>
        <div className="container-fluid">
          <div className='row'>
             <div className='col-3'>
               
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">Montra App</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Platforms</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Solutions</a>
                  </li>
                  </ul> 
              
              </div>
               <div className='col-6'></div>
               <div className='col-3'>
         
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nigeria
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/">Action</a></li>
                      <li><a class="dropdown-item" href="/">Another action</a></li>
                      <li><a class="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" href="/">Company </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Resourses</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Help</a>
                  </li>
                  </ul> 
              
          </div>
        </div>
        </div>
      </nav>
      
    </div>
  );
}

export default App;
