import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


function App(){
  return(
    <div className="App">
      
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content">
          <div className="content">
            <HomePage />
          </div>
        </div>
      
    </div>
  );
}

export default App;