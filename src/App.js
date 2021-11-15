import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';


function App(){
  return(
    <div className="App">
      
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content"></div>
          <div className="content">
           <Switch>
             <Route path="/" exact>
               <HomePage />
             </Route>
             <Route path="/about" exact>
               <AboutPage />
             </Route>
             <Route path="/portfolios" exact>
               <PortfolioPage />
             </Route>
             <Route path="/blogs" exact>
               <BlogsPage />
             </Route>
             <Route path="/contact" exact>
               <ContactPage />
             </Route>
           </Switch>
          </div>
         
        </div>
      
   
  );
}

export default App;